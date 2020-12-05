import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import stl from '../../styles/admin.dashboard.module.scss';
import { useRouter } from 'next/router';
import FileUploadSection from '../../components/admincmt/fileuploadesection';


const AdminHomePage = ({ projects }) => {
    const [role, setRole] = useState(null);
    const router = useRouter();
    const handelLogout = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('afreesmartAcessToken');
        }
        router.push('/login')
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
        if (req.data.data.current !== null) {
            var res = await req.data.data.current.roleId;
        }
        setRole(res);
    }
    getRole()


    if ((role !== null) || typeof window !== 'undefined') {
        const token = localStorage.getItem('afreesmartAcessToken');
        if ((!token) || (role == 1)) {
            router.push('/login');
        }
    }


    return (
        <div className={stl.container}>
            <div className={stl.navBar}>
                <h1>Tableau de bord AFREESMART</h1>
                <button className={stl.btn} onClick={() => handelLogout()}>Deconexion</button>
            </div>
            <div className={stl.tableSquare}>
                <table className={stl.table}>
                    <thead>
                        <tr className={stl.thr}>
                            <th className={stl.th}>Details</th>
                            <th className={stl.th}>Projet</th>
                            <th className={stl.th}>Categorie</th>
                            <th className={stl.th}>Companie</th>
                            <th className={stl.th}> Max chiffre d'affaires</th>
                            <th className={stl.th}>somme desirée</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                            <tr key={project.id}>
                                <Link as={`../admin/${project.projectsName}/${project.id}`} href={`../admin/[details]/[id]`}>
                                    <td><button className={stl.detailBtn}>Details</button></td>
                                </Link>
                                <td>{project.projectsName}</td>
                                <td><button className={stl.categoryBtn}>{project.projectCategoryId = 1 ? "Hi-Tech" : project.projectCategoryId = 2 ? "Logistique" : "Aucun"}</button></td>
                                <td>{project.companyName}</td>
                                <td>{project.previousTurnover}</td>
                                <td>{project.fundRaiseExpectation.split("-")[1]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <FileUploadSection />
            </div>


        </div>
    );
}

export async function getServerSideProps() {
    const req = await axios({
        url: 'http://localhost:9100/graphql',
        method: 'post',
        data: {
            query: `
                query{
                    getAllProject{
                        id
                        projectsName
                        companyName
                        fundRaiseExpectation
                        previousTurnover
                        projectCategoryId
                    }
                }
            `
        }
    })
    const projects = await req.data.data.getAllProject;
    return {
        props: {
            projects,
        },
    }
}

export default AdminHomePage;