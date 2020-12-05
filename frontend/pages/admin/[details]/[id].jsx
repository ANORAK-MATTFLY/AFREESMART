import axios from 'axios';
import { useState, useEffect } from 'react';
import companyAnimation from '../../../lotties/previousCreated.json';
import prj from '../../../lotties/34803-social-scrolling-animation.json';
import moneyAnim from '../../../lotties/moneyMaker.json';
import LottieSuperObj from '../../../components/buttons/lottieFingerprint';
import stl from '../../../styles/details.page.module.scss';
import UserInfo from '../../../components/admincmt/userinfo';
import UpdateProject from '../../../components/admincmt/updateproject';
import { useRouter } from 'next/router';


const DetailPage = ({ project, mindset, userRole }) => {
    const router = useRouter();
    const [role, setRole] = useState(null)
    const { projectStatusId, id, projectsName, companyName, fundRaiseExpectation, isBasedInAfrica, isRegistredCompany, isSimplifiedActionCompany, hasAfricans, hasCampaign, webSiteLink } = project;
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

    useEffect(() => {
        getRole();
    }, [role])
    if (role == 1) {
        router.push('/login')
    }

    const obj = {
        loop: true,
        autoplay: true,
        animationData: companyAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const projectIll = {
        loop: true,
        autoplay: true,
        animationData: prj,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const money = {
        loop: true,
        autoplay: true,
        animationData: moneyAnim,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className={stl.container}>
            <div className={stl.detailBox}>
                <div className={stl.cardsBar}>
                    <div className={stl.card}>
                        <h2 className={stl.cardName}>{companyName}</h2>
                        <div className={stl.illust}>
                            <LottieSuperObj objectProps={obj} />
                        </div>

                    </div>
                    <div className={stl.card2}>
                        <h2 className={stl.cardName}>{projectsName}</h2>
                        <div className={stl.illust}>
                            <LottieSuperObj objectProps={projectIll} />
                        </div>
                    </div>
                    <div className={stl.card3}>
                        <p>Somme voulue : </p>
                        <h2 className={stl.cardName}>{fundRaiseExpectation.split("-")[1]}</h2>
                        <div className={stl.illust}>
                            <LottieSuperObj objectProps={money} />
                        </div>
                    </div>
                </div>
                <div className={stl.detailsSection}>
                    {
                        role === 3 ?
                            <div className={stl.description}>


                                <h1>Gestion de document</h1>
                                <div className={stl.criteriaCard}>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Doc 1</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            <button className={stl.downloadBtn}>Download</button>
                                            <button className={stl.uploadBtn}>Importez</button>
                                        </div>
                                    </div>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Doc 1</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            <button className={stl.downloadBtn}>Download</button>
                                            <button className={stl.uploadBtn}>Importez</button>
                                        </div>
                                    </div>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Doc 1</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            <button className={stl.downloadBtn}>Download</button>
                                            <button className={stl.uploadBtn}>Importez</button>
                                        </div>
                                    </div>
                                </div>
                                <UpdateProject id={id} />
                            </div>
                            : <div className={stl.description}>
                                <h1>Critères</h1>
                                <div className={stl.criteriaCard}>
                                    {isBasedInAfrica ? <button className={stl.criteriaBtn}>Base en afrique</button>
                                        : <button className={stl.criteriaBtnNegate}>Base en afrique</button>
                                    }
                                    {isRegistredCompany ? <button className={stl.criteriaBtn}>Eng. au giche unique</button>
                                        : <button className={stl.criteriaBtnNegate}>Erg. au giche unique</button>
                                    }
                                    {isSimplifiedActionCompany ? <button className={stl.criteriaBtn}>Ese. a action simplifie</button>
                                        : <button className={stl.criteriaBtnNegate}>Ese. a action simplifie</button>
                                    }
                                    {hasAfricans ? <button className={stl.criteriaBtn}>Membres afriains</button>
                                        : <button className={stl.criteriaBtnNegate}>Ese. a action simplifie</button>
                                    }
                                    {hasCampaign ? <button className={stl.criteriaBtn}>Compagne en cour...</button>
                                        : <button className={stl.criteriaBtnNegate}>Compagne en cour...</button>
                                    }
                                    {webSiteLink ? <button className={stl.criteriaBtn}>Site Web</button>
                                        : <button className={stl.criteriaBtnNegate}>Site Web</button>
                                    }
                                </div>
                                <UpdateProject id={id} />

                            </div>


                    }
                    {
                        role === 3 ?
                            null
                            :
                            <UserInfo mindset={mindset} />
                    }

                </div>
            </div>


        </div>
    );
}


export async function getServerSideProps({ query }) {
    const id = query.id
    const req = await axios({
        url: 'http://localhost:9100/graphql',
        method: 'post',
        data: {
            query: `
                query{
                    getProjectById(id:${id}){
                        id
                        projectsName
                        actualTurnover
                        companyName
                        fundRaiseExpectation
                        isBasedInAfrica
                        isRegistredCompany
                        isSimplifiedActionCompany
                        hasAfricans
                        hasCampaign
                        webSiteLink
                    }
                    getMindSetById(id:${id}){
                        motivations
                        ethic
                        family
                        philosophies
                        diploma
                        strength
                        weaknesses
                        ambitions
                        achievements
                        education
                        }
                }
                
            `
        }
    })
    const project = await req.data.data.getProjectById;
    const mindset = await req.data.data.getMindSetById;
    return {
        props: {
            project, mindset,
        },
    }
}

export default DetailPage;