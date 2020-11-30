import stl from '../../styles/client.homepage.module.scss'
import MindSet from '../../components/userComponents/mindSetComponent';
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import EducationCard from '../../components/userComponents/mindsetCards/education';
import AchievementCard from '../../components/userComponents/mindsetCards/achievements';
import MotivationCard from '../../components/userComponents/mindsetCards/motivation';
import StrengthCard from '../../components/userComponents/mindsetCards/strength';
import FamilyCard from '../../components/userComponents/mindsetCards/family';
import EthicCard from '../../components/userComponents/mindsetCards/ethic';
import PhilosophyCard from '../../components/userComponents/mindsetCards/philosophy';
import DiplomaCard from '../../components/userComponents/mindsetCards/diploma';
import AmbitionCard from '../../components/userComponents/mindsetCards/ambition';
import WeaknessesCard from '../../components/userComponents/mindsetCards/weaknesses';


const MindSetComponent = () => {
    return (
        <HomePageLayout>
            <TitleSection>
                <div className={stl.IllustrationContainer}>
                    <MindSet />
                </div>
                <h2>Nous investison dans l'homme avant la chose.</h2>
                <h2> Decrivez-nous votre mindset !</h2>
            </TitleSection>
            <div className={stl.cardsSection}>
                <EducationCard />
                <AchievementCard />
                <MotivationCard />
                <StrengthCard />
                <FamilyCard />
                <EthicCard />
                <PhilosophyCard />
                <DiplomaCard />
                <AmbitionCard />
                <WeaknessesCard />
            </div>
        </HomePageLayout>
    );
}
export default MindSetComponent;