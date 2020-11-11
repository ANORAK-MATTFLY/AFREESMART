import stl from "../../styles/client.homepage.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faFileUpload, faStar, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import TaskBoard from '../../components/userComponents/taskboard'


const HomePage = () => {
    return (
        <div className={stl.container}>
            <div className={stl.leftSection}>
                <div className={stl.leftHead}>
                    <div className={stl.badge}>
                        <div className={stl.BadgeCircle}>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <h3>Etat du projet</h3>
                        <div className={stl.badgeTag}>En phase d'analyse</div>
                    </div>
                    <div className={stl.badge}>
                        <div className={stl.BadgeCircle}>
                            <FontAwesomeIcon icon={faUserCheck} />
                        </div>
                        <h3>Categorie</h3>
                        <div className={stl.badgeTag}>Hi-tech</div>
                    </div>
                    <div className={stl.badge}>
                        <div className={stl.BadgeCircle}>
                            <FontAwesomeIcon icon={faAdjust} />
                        </div>
                        <h3>Nom du projet</h3>
                        <div className={stl.badgeTag}>Recycling</div>
                    </div>
                </div>
                <div className={stl.dropSection}>
                    <div className={stl.dropZone}>
                        <h2>Phase une analyse</h2>
                        <div className={stl.dropZoneIcon}>
                            <FontAwesomeIcon icon={faFileUpload} />
                        </div>
                        <div className={stl.dropZoneCadre}>
                            <p>Details</p>
                        </div>
                    </div>
                    <div className={stl.dropZone}>
                        <h2>Phase deux gouvernance</h2>
                        <div className={stl.dropZoneIcon}>
                            <FontAwesomeIcon icon={faFileUpload} />
                        </div>
                        <div className={stl.dropZoneCadre}>
                            <p>Details</p>
                        </div>
                    </div>
                    <div className={stl.dropZone}>
                        <h2>Phase trois production</h2>
                        <div className={stl.dropZoneIcon}>
                            <FontAwesomeIcon icon={faFileUpload} />
                        </div>
                        <div className={stl.dropZoneCadre}>
                            <p>Details</p>
                        </div>
                    </div>
                </div>
            </div>
            <TaskBoard />
        </div>
    )
}

export default HomePage;