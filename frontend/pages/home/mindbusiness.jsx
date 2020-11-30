import BusinessComponent from '../../components/userComponents/businessMindComponent';
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import stl from '../../styles/client.homepage.module.scss'
import IdolCard from '../../components/userComponents/businessMindCards/idol';
import FailureCard from '../../components/userComponents/businessMindCards/failures';
import PreviousCompaniesCard from '../../components/userComponents/businessMindCards/companyCreated';
import EmployeeCard from '../../components/userComponents/businessMindCards/employeeManaged';
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
                <FailureCard />
                <PreviousCompaniesCard />
                <EmployeeCard />
            </div>
        </HomePageLayout>
    );
}
export default MindBusiness;