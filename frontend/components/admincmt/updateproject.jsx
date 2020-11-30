import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import stl from '../../styles/details.page.module.scss';


const UpdateProject = ({ id }) => {
    const router = useRouter();
    const [projectStatus, setProjectStatus] = useState(null)
    const getProjectStatus = async () => {
        const req = await axios({
            url: 'http://localhost:9100/graphql',
            method: "post",
            data: {
                query: `
                    query{
                        getProjectById(id:${id}){
                        projectStatusId
                }
                }`
            }
        })
        const res = await req.data.data.getProjectById.projectStatusId;
        await setProjectStatus(res)
    }

    const updateProjectStatus = async (setter, identifier) => {
        await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            data: {
                query: `
                    mutation{
                    updateProjectStatus(projectStatusId:${setter} , id:${identifier})
                }
                `
            }
        });
    }
    const onClickHandler = x => {
        updateProjectStatus(x, id)
        router.reload()
    }
    useEffect(() => {
        getProjectStatus();
    }, [projectStatus])
    return (
        <div className={stl.updateSection}>
            <h3>Metre a jour le l'etat du projet</h3>
            <div className={stl.btnSelector}>
                {projectStatus == 2 ? <button className={stl.selectBtnPositive}>Tracking</button>
                    : <button className={stl.selectBtnNegat} onClick={() => onClickHandler(2)}>Tracking</button>}
                {projectStatus == 3 ? <button className={stl.selectBtnPositive}>Pre-gouvernance</button>
                    : <button className={stl.selectBtnNegat} onClick={() => onClickHandler(3)}>Pre-gouvernance</button>}
                {projectStatus == 4 ? <button className={stl.selectBtnPositive}>Gouvernance</button>
                    : <button className={stl.selectBtnNegat} onClick={() => onClickHandler(4)}>Gouvernance</button>}
                {projectStatus == 5 ? <button className={stl.selectBtnPositive}>Production</button>
                    : <button className={stl.selectBtnNegat} onClick={() => onClickHandler(5)}>Production</button>}
            </div>
        </div>
    );
}

export default UpdateProject;