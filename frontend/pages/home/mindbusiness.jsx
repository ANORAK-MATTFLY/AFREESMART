import BusinessComponent from '../../components/userComponents/businessMindComponent';
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import stl from '../../styles/client.homepage.module.scss'
import IdolCard from '../../components/userComponents/businessMindCards/who_inpire_you';
import ThreeGhost from '../../components/userComponents/businessMindCards/three_ghost';
import PreviousCompaniesCard from '../../components/userComponents/businessMindCards/previous_experience';
import QuestionsForThreePrs from '../../components/userComponents/businessMindCards/questions_to_ask_three_prs';
import NumberOfCompaniesCreated from '../../components/userComponents/businessMindCards/how_many_companies_created';
import CompanyFailures from '../../components/userComponents/businessMindCards/how_many_failures';
import EmployeeManagement from '../../components/userComponents/businessMindCards/employees_managed';
import Mentors from '../../components/userComponents/businessMindCards/do_you_have_mentors';
import HowManyAreYou from '../../components/userComponents/businessMindCards/how_many_are_you';
import DoYouHaveSupport from '../../components/userComponents/businessMindCards/do_you_have_support';


const MindBusiness = () => {
    return (
        <HomePageLayout>
            <TitleSection>
                <div className={stl.IllustrationContainer}>
                    <BusinessComponent />
                </div>
                <h2>Nous investison dans l'homme avant la chose.</h2>
                <h2> Decrivez-nous votre mindset !</h2>
            </TitleSection>
            <div className={stl.cardsSection}>
                <IdolCard />
                <ThreeGhost />
                <PreviousCompaniesCard />
                {/* <QuestionsForThreePrs /> */}
                <NumberOfCompaniesCreated />
                <CompanyFailures />
                <EmployeeManagement />
                <Mentors />
                <HowManyAreYou />
                <DoYouHaveSupport />
            </div>
        </HomePageLayout>
    );
}
export default MindBusiness;