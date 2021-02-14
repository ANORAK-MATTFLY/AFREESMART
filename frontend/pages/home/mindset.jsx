import stl from '../../styles/client.homepage.module.scss'
import MindSet from '../../components/userComponents/mindSetComponent';
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import ThoughtOnTeamwork from '../../components/userComponents/mindsetCards/thought_on_teamwork';
import IfWrong from '../../components/userComponents/mindsetCards/if_wrong';
import IfLate from '../../components/userComponents/mindsetCards/if_you_are_late';
import WhatIsFailureToYou from '../../components/userComponents/mindsetCards/what_is_failure';
import ThoughtOnAdvices from '../../components/userComponents/mindsetCards/thougth_on_advices';
import EthicCard from '../../components/userComponents/mindsetCards/why_ent';
import IfYouFaille from '../../components/userComponents/mindsetCards/if_you_faille';
import FiveStrength from '../../components/userComponents/mindsetCards/five_strength';
import FiveWeaknessesCard from '../../components/userComponents/mindsetCards/five_weaknesses';
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
                <ThoughtOnTeamwork />
                <IfWrong />
                <IfLate />
                <WhatIsFailureToYou />
                <IfYouGetStuck />
                <ThoughtOnAdvices />
                <EthicCard />
                <IfYouFaille />
                <FiveStrength />
                <FiveWeaknessesCard />
                <RelationShipWithMoney />
                <Ent_values_Card />
                <EdCard />
            </div>
        </HomePageLayout>
    );
}
export default MindSetComponent;