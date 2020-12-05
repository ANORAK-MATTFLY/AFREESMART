import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import stl from '../../styles/details.page.module.scss';
import DeleteProject from '../../utils/deleteProject';



const UpdateProject = ({ id }) => {

    const router = useRouter();
    const [role, setRole] = useState(null);
    const [choice, setChoice] = useState(0);
    const [projectStatus, setProjectStatus] = useState(null);
    if (!id) {
        router.back();
    }
    const getRole = async () => {
        if (typeof window !== 'undefined') {
            var token = localStorage.getItem('afreesmartAcessToken') || '';
        }
        const req = await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                    query{
                        current{
                            roleId
                        }
                    }
                `
            }
        })
        const res = await req.data.data.current.roleId;
        setRole(res);
    }

    getRole()


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
    const onClickHandler = async (x) => {
        if ((role === 2) && (x > 3)) {
            return;
        }
        if ((role === 3) && (x <= 2)) {
            return;
        }
        if (x == 2) {
            await DeleteProject(id)
            await router.back();
            return;
        }
        await updateProjectStatus(x, id)
        router.reload()
    }
    useEffect(() => {
        getProjectStatus();
    }, [projectStatus])
    console.log(projectStatus);
    return (
        <div className={stl.updateSection}>
            <h3>Metre a jour le l'etat du projet</h3>
            <div className={stl.btnSelector}>
                <button className={stl.selectBtnNegat} onClick={() => onClickHandler(2)}>Invalider</button>
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