import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import stl from '../../styles/admin.dashboard.module.scss';
import Link from 'next/link';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import projectIllustration from '../../media/14571-search-loading-animation.json'

const projects = [
    { projectName: "Recycling", id: 1, projectDescription: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { projectName: "Sponge BOB", id: 2, projectDescription: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { projectName: "Bip Bip", id: 3, projectDescription: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { projectName: "Will you", id: 4, projectDescription: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { projectName: "Rawbank", id: 5, projectDescription: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { projectName: "Pilipili", id: 6, projectDescription: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. " },
    { projectName: "Will you", id: 7, projectDescription: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { projectName: "Rawbank", id: 8, projectDescription: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner." },
    { projectName: "Pilipili", id: 9, projectDescription: "God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner,God called lone; I will make him a helper as his partner.God called lone; I will make him a helper as his partner. " }
];


const ProjectsBoard = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: projectIllustration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className={stl.mainSection}>
            {
                projects.map(project => (
                    <Link as={`../${project.projectName}/${project.projectDescription}`} href={"../[projectsName]/[projectDescription]"}>
                        <div key={project.id} className={stl.projectCard}>
                            <h3>{project.projectName}</h3>
                            <div className={stl.cardIcon}>
                                <LottieSuperObj objectProps={obj} />
                            </div>
                            <div className={stl.detailsBtn}>Details</div>
                        </div>
                    </Link>
                ))
            }
        </div >

    );
}

export default ProjectsBoard;
