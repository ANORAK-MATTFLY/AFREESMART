import MoneyMaker from '../../components/userComponents/moneyMakerComponent';
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import achievement from '../../lotties/achievement.json';
import motivation from '../../lotties/motivation.json';
import power from '../../lotties/youth-power.json'
import stl from '../../styles/client.homepage.module.scss'
import MonthlyEarningMoney from '../../components/userComponents/moneyMaker/mounthlyEarn';
import Passive from '../../components/userComponents/moneyMaker/actual_passive';


const MoneyMakerPage = () => {
    const Achieved = {
        loop: true,
        autoplay: true,
        animationData: achievement,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const Motivated = {
        loop: true,
        autoplay: true,
        animationData: motivation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: power,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <HomePageLayout>
            <TitleSection>
                <div className={stl.IllustrationContainer}>
                    <MoneyMaker />
                </div>
                <h2>Nous investison dans l'homme avant la chose.</h2>
                <h2> Decrivez-nous votre habiltee a vous faire de l'argent !</h2>
            </TitleSection>
            <div className={stl.cardsSection}>
                <MonthlyEarningMoney />
                <Passive />
            </div>
        </HomePageLayout>
    );
}
export default MoneyMakerPage;