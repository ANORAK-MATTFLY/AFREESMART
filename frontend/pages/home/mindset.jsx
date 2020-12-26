import stl from '../../styles/client.homepage.module.scss'
import MindSet from '../../components/userComponents/mindSetComponent';
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import EducationCard from '../../components/userComponents/mindsetCards/education';
import IfWrong from '../../components/userComponents/mindsetCards/if_wrong';
import MotivationCard from '../../components/userComponents/mindsetCards/motivation';
import StrengthCard from '../../components/userComponents/mindsetCards/strength';
import FamilyCard from '../../components/userComponents/mindsetCards/family';
import EthicCard from '../../components/userComponents/mindsetCards/ethic';
import PhilosophyCard from '../../components/userComponents/mindsetCards/philosophy';
import FiveStrength from '../../components/userComponents/mindsetCards/five_strength';
import WeaknessesCard from '../../components/userComponents/mindsetCards/weaknesses';
import RelationShipWithMoney from '../../components/userComponents/mindsetCards/relationship_with_money';
import Ent_values_Card from '../../components/userComponents/mindsetCards/ent_values';
import EdCard from '../../components/userComponents/mindsetCards/niveau_etude';
import IfYouGetStuck from '../../components/userComponents/mindsetCards/if_you_get_stuck';




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
                <IfWrong />
                <MotivationCard />
                <StrengthCard />
                <IfYouGetStuck />
                <FamilyCard />
                <EthicCard />
                <PhilosophyCard />
                <FiveStrength />
                <WeaknessesCard />
                <RelationShipWithMoney />
                <Ent_values_Card />
                <EdCard />
            </div>
        </HomePageLayout>
    );
}
export default MindSetComponent;