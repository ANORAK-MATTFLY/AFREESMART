import stl from "../../styles/client.homepage.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust, faStar, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import TaskBoard from '../../components/userComponents/taskboard'
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';


const HomePage = () => {
    return (
        <HomePageLayout>
            <TitleSection />
        </HomePageLayout>
    )
}

export default HomePage;