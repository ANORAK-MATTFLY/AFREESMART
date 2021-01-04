import axios from 'axios';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import companyAnimation from '../../../lotties/previousCreated.json';
import prj from '../../../lotties/34803-social-scrolling-animation.json';
import moneyAnim from '../../../lotties/moneyMaker.json';
import LottieSuperObj from '../../../components/buttons/lottieFingerprint';
import stl from '../../../styles/details.page.module.scss';
import UserInfo from '../../../components/admincmt/userinfo';
import UpdateProject from '../../../components/admincmt/updateproject';
import { useRouter } from 'next/router';


const DetailPage = ({ project, mindset, businessMind, moneyMaker, ProjectOwner }) => {
    const [docs, setDocs] = useState({
        turnoverGrowth: "",
        companyManagement: "",
        projectLegalAuthorizations: "",
        fluxGrowth: "",
        teamProfile: "",
        companyVision: "",
        abilityToGenerateEmployment: "",
        cashFlowStatement: "",
        balanceSheet: "",
        contextLink: "",
        businessModelLink: "",
        comercialtLink: "",
        marketingtLink: "",
        managementLink: "",
        corporateLink: "",
        businessPlanLink: "",
        proofOfConceptLink: "",
        planFinancierLink: "",
    });
    const router = useRouter();
    const [role, setRole] = useState(null)
    const { id, projectsName, companyName, fundRaiseExpectation, userId } = project;
    const getRole = async () => {
        if (typeof window !== 'undefined') {
            var token = localStorage.getItem('afreesmartAcessToken') || '';
        }
        const req = await axios({
            url: 'https://afre-api.herokuapp.com/graphql',
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


    const getDocs = async () => {
        if (typeof window !== 'undefined') {
            var token = localStorage.getItem('afreesmartAcessToken') || '';
        };
        const config = {
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                    query {
                        getProjectDocByIdButForReal(id:${userId}) {
                        contextLink
                        companyLink
                        businessModelLink
                        comercialtLink
                        marketingtLink
                        managementLink
                        corporateLink
                        businessPlanLink
                        proofOfConceptLink
                        planFinancierLink
                        companyManagement
                        turnoverGrowth
                        projectLegalAuthorizations
                        fluxGrowth
                        teamProfile
                        companyVision
                        abilityToGenerateEmployment
                        cashFlowStatement
                        balanceSheet
                        }
                    }
                    `
            }
        }
        const req = await axios(config);
        if (req.data.data !== null) {
            setDocs(req.data.data.getProjectDocByIdButForReal);
        }
    }

    useEffect(() => {
        getRole();
        getDocs();
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
                        <div className={stl.projectOwnerInfo}>
                            <h3 className={stl.cardName}>Candidat: {ProjectOwner.name} {ProjectOwner.lastName}</h3>
                            <Link href={`mailto:${ProjectOwner.email}?cc=munga.steve.k@gmail.com`}>
                                <a target={'_blank'}>
                                    <h3 className={stl.cardName}>Contact: {ProjectOwner.email}</h3>
                                </a>
                            </Link>

                        </div>
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
                    {role == 2 ?
                        <div className={stl.description}>
                            <h1>Gestion de document Management</h1>
                            <div className={stl.criteriaCard}>
                                <div className={stl.docCard}>
                                    <div className={stl.docName}>
                                        <p>Organisation de l'entreprise</p>
                                    </div>
                                    <div className={stl.btnSection}>
                                        {docs.companyManagement == '' || docs.companyManagement == null ?
                                            <button className={stl.downloadBtn}>Download</button>
                                            :
                                            <Link href={`${docs.companyManagement}`}  >
                                                <a target={"_blank"}>
                                                    <button className={stl.downloadBtn}>Download</button>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                </div>

                                <div className={stl.docCard}>
                                    <div className={stl.docName}>
                                        <p>Croissance du chiffre d'affaire</p>
                                    </div>
                                    <div className={stl.btnSection}>
                                        {docs.turnoverGrowth == '' || docs.turnoverGrowth == null ?
                                            <button className={stl.downloadBtn}>Download</button>
                                            :
                                            <Link href={`${docs.turnoverGrowth}`}  >
                                                <a target={"_blank"}>
                                                    <button className={stl.downloadBtn}>Download</button>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className={stl.docCard}>
                                    <div className={stl.docName}>
                                        <p>Legibilite du projet et autorisations accorde</p>
                                    </div>
                                    <div className={stl.btnSection}>
                                        {docs.projectLegalAuthorizations == '' || docs.projectLegalAuthorizations == null ?
                                            <button className={stl.downloadBtn}>Download</button>
                                            :
                                            <Link href={`${docs.projectLegalAuthorizations}`}  >
                                                <a target={"_blank"}>
                                                    <button className={stl.downloadBtn}>Download</button>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className={stl.docCard}>
                                    <div className={stl.docName}>
                                        <p>Profile de l'equipe</p>
                                    </div>
                                    <div className={stl.btnSection}>
                                        {docs.teamProfile == '' || docs.teamProfile == null ?
                                            <button className={stl.downloadBtn}>Download</button>
                                            :
                                            <Link href={`${docs.teamProfile}`}  >
                                                <a target={"_blank"}>
                                                    <button className={stl.downloadBtn}>Download</button>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className={stl.docCard}>
                                    <div className={stl.docName}>
                                        <p>Vision de l'entreprise</p>
                                    </div>
                                    <div className={stl.btnSection}>
                                        {docs.companyVision == '' || docs.companyVision == null ?
                                            <button className={stl.downloadBtn}>Download</button>
                                            :
                                            <Link href={`${docs.companyVision}`}  >
                                                <a target={"_blank"}>
                                                    <button className={stl.downloadBtn}>Download</button>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className={stl.docCard}>
                                    <div className={stl.docName}>
                                        <p>Monte de flux</p>
                                    </div>
                                    <div className={stl.btnSection}>
                                        {docs.cashFlowStatement == '' || docs.cashFlowStatement == null ?
                                            <button className={stl.downloadBtn}>Download</button>
                                            :
                                            <Link href={`${docs.cashFlowStatement}`}  >
                                                <a target={"_blank"}>
                                                    <button className={stl.downloadBtn}>Download</button>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className={stl.docCard}>
                                    <div className={stl.docName}>
                                        <p>Bilan de l'entreprise</p>
                                    </div>
                                    <div className={stl.btnSection}>
                                        {docs.balanceSheet == '' || docs.balanceSheet == null ?
                                            <button className={stl.downloadBtn}>Download</button>
                                            :
                                            <Link href={`${docs.balanceSheet}`}  >
                                                <a target={"_blank"}>
                                                    <button className={stl.downloadBtn}>Download</button>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className={stl.docCard}>
                                    <div className={stl.docName}>
                                        <p>Capacite a generer de l'emploi</p>
                                    </div>
                                    <div className={stl.btnSection}>
                                        {docs.abilityToGenerateEmployment == '' || docs.abilityToGenerateEmployment == null ?
                                            <button className={stl.downloadBtn}>Download</button>
                                            :
                                            <Link href={`${docs.abilityToGenerateEmployment}`}  >
                                                <a target={"_blank"}>
                                                    <button className={stl.downloadBtn}>Download</button>
                                                </a>
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </div>
                            <UpdateProject id={id} />
                        </div>
                        : role == 3 ?
                            <div className={stl.description}>
                                <h1>Gestion de document Gouvernance</h1>
                                <div className={stl.criteriaCard}>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Context</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            {docs.contextLink == '' || docs.contextLink == null ?
                                                <button className={stl.downloadBtn}>Download</button>
                                                :
                                                <Link href={`${docs.contextLink}`}  >
                                                    <a target={"_blank"}>
                                                        <button className={stl.downloadBtn}>Download</button>
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>

                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Entreprise</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            {docs.companyLink == '' || docs.companyLink == null ?
                                                <button className={stl.downloadBtn}>Download</button>
                                                :
                                                <Link href={`${docs.companyLink}`}  >
                                                    <a target={"_blank"}>
                                                        <button className={stl.downloadBtn}>Download</button>
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Business Model</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            {docs.businessModelLink == '' || docs.businessModelLink == null ?
                                                <button className={stl.downloadBtn}>Download</button>
                                                :
                                                <Link href={`${docs.businessModelLink}`}  >
                                                    <a target={"_blank"}>
                                                        <button className={stl.downloadBtn}>Download</button>
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Commercial</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            {docs.comercialtLink == '' || docs.comercialtLink == null ?
                                                <button className={stl.downloadBtn}>Download</button>
                                                :
                                                <Link href={`${docs.comercialtLink}`}  >
                                                    <a target={"_blank"}>
                                                        <button className={stl.downloadBtn}>Download</button>
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Marketing</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            {docs.marketingtLink == '' || docs.marketingtLink == null ?
                                                <button className={stl.downloadBtn}>Download</button>
                                                :
                                                <Link href={`${docs.marketingtLink}`}  >
                                                    <a target={"_blank"}>
                                                        <button className={stl.downloadBtn}>Download</button>
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Corporate</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            {docs.corporateLink == '' || docs.corporateLink == null ?
                                                <button className={stl.downloadBtn}>Download</button>
                                                :
                                                <Link href={`${docs.corporateLink}`}  >
                                                    <a target={"_blank"}>
                                                        <button className={stl.downloadBtn}>Download</button>
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Business plan</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            {docs.businessPlanLink == '' || docs.businessPlanLink == null ?
                                                <button className={stl.downloadBtn}>Download</button>
                                                :
                                                <Link href={`${docs.businessPlanLink}`}  >
                                                    <a target={"_blank"}>
                                                        <button className={stl.downloadBtn}>Download</button>
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Proof of concept</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            {docs.proofOfConceptLink == '' || docs.proofOfConceptLink == null ?
                                                <button className={stl.downloadBtn}>Download</button>
                                                :
                                                <Link href={`${docs.proofOfConceptLink}`}  >
                                                    <a target={"_blank"}>
                                                        <button className={stl.downloadBtn}>Download</button>
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                    <div className={stl.docCard}>
                                        <div className={stl.docName}>
                                            <p>Plan financier</p>
                                        </div>
                                        <div className={stl.btnSection}>
                                            {docs.planFinancierLink == '' || docs.planFinancierLink == null ?
                                                <button className={stl.downloadBtn}>Download</button>
                                                :
                                                <Link href={`${docs.planFinancierLink}`}  >
                                                    <a target={"_blank"}>
                                                        <button className={stl.downloadBtn}>Download</button>
                                                    </a>
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <UpdateProject id={id} />
                            </div>
                            : null
                    }
                    <UserInfo mindset={mindset} businessMind={businessMind} moneyMaker={moneyMaker} />
                </div>
            </div>
        </div>
    );
}


export async function getServerSideProps({ query }) {
    const id = query.id
    const req = await axios({
        url: 'https://afre-api.herokuapp.com/graphql',
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
                        userId
                    }
                    getMindSetById(id:${id}){
                        companyValues
                        family
                        thoughtOnTeamwork
                        thoughtOnAdvices
                        whyBecomeEnt
                        ethic
                        IfWrong
                        IfLate
                        IfYouGetStuck
                        ifYouFaille
                        ifYouHaveNoExp
                        fiveKeyStrength
                        fiveWeakness
                        relationShipWithMoney
                        education
                        }
                    getBusinessMindById(id:${id}){
                        idol
                        careerAchievement
                        companyCreatedPreviously
                        failuresAsEntrepreneur
                        numberOfEmployeesManaged
                        mentors
                        doYouHaveSupport
                        howManyAreYou
                        companyFailures
                        PreviousCompaniesCard
                        twoQuestionsForThisPeople
                        threePeopleYouWouldLikeToMet
                    }
                    getAbilityToMakeMoneyById(id:${id}){
                        passive
                        monthlyEarningMoney
                    }
                    getUserById(id: ${id}) {
                        name
                        email
                        lastName
                    }
                }
                
            `
        }
    })
    const project = await req.data.data.getProjectById;
    const mindset = await req.data.data.getMindSetById;
    const businessMind = await req.data.data.getBusinessMindById;
    const moneyMaker = await req.data.data.getAbilityToMakeMoneyById;
    const ProjectOwner = await req.data.data.getUserById;
    return {
        props: {
            project, mindset, businessMind, moneyMaker, ProjectOwner
        },
    }
}

export default DetailPage;