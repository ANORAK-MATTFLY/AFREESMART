import axios from 'axios';
import stl from "../../styles/client.homepage.module.scss"
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import FilesUpload from '../../components/userComponents/uploadefiles';
import UploadTeamProfileCard from '../../components/userComponents/partie_management/management/team_profile';
import UploadAbilityToGenerateMoneyCard from '../../components/userComponents/partie_management/management/ability_to_generate_money';
import UploadBusinessModelCard from '../../components/userComponents/partie_management//management/business_model';
import UploadCashFlowStatementCard from '../../components/userComponents/partie_management/management/cashFlowStatement';
import UploadCompanyCard from '../../components/userComponents//partie_management/management/comapny_card';
import UploadProjectLegalAuthorizationsCard from '../../components/userComponents/partie_management/management/company_legal_card';
import UploadCompanyOrganizationCard from '../../components/userComponents/partie_management/management/company_management';
import UploadBusinessPlanCard from '../../components/userComponents/partie_management/management/business_plan';
import UploadMoneyGrowthCard from '../../components/userComponents/partie_management/management/money_growth_card';
import UploadVisionCard from '../../components/userComponents//partie_management//management/vision_card';



const HomePage = ({ templateData }) => {
    const {
        contextLink,
        companyLink,
        businessModelLink,
        comercialtLink,
        marketingtLink,
        managementLink,
        corporateLink,
        businessPlanLink,
        proofOfConceptLink,
        planFinancierLink
    } = templateData;
    console.log(templateData);
    return (
        <HomePageLayout>
            <TitleSection>
                <div className={stl.IllustrationContainer}>
                    <FilesUpload />
                </div>
                <h2>Vouz devez uploader les documents suivant</h2>
            </TitleSection>
            <div className={stl.cardsSection}>
                <UploadTeamProfileCard />
                <UploadAbilityToGenerateMoneyCard />
                <UploadBusinessModelCard />
                <UploadCashFlowStatementCard />
                <UploadCompanyCard />
                <UploadProjectLegalAuthorizationsCard />
                <UploadCompanyOrganizationCard />
                <UploadBusinessPlanCard />
                <UploadMoneyGrowthCard />
                <UploadTeamProfileCard />
                <UploadVisionCard />
            </div>
        </HomePageLayout>
    )
}

export async function getStaticProps() {
    const config = {
        url: 'http://localhost:9100/graphql',
        method: 'post',
        data: {
            query: `
            query {
                getTemplateById(id: ${1}) {
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
                }
            }
            `
        }
    }
    const req = await axios(config);
    if (req.data.data !== null) {
        var templateData = await req.data.data.getTemplateById;
    }

    return {
        props: { templateData }
    }
}




export default HomePage;