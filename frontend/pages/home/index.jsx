import axios from 'axios';
import stl from "../../styles/client.homepage.module.scss"
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import FilesUpload from '../../components/userComponents/uploadefiles';
import UploadContextCard from '../../components/userComponents/management/context_card';
import UploadBusinessModelCard from '../../components/userComponents/management/business_model';
import UploadCommercialCard from '../../components/userComponents/management/commercial_card';
import UploadMarketingCard from '../../components/userComponents/management/marketing_card';
import UploadCorporateCard from '../../components/userComponents/management/corporate';
import UploadManagementCard from '../../components/userComponents/management/management_card';
import UploadBusinessPlanCard from '../../components/userComponents/management/business_plan';
import UploadProofOfConceptCard from '../../components/userComponents/management/proof_card';
import UploadFinanceCard from '../../components/userComponents/management/finance_card';
import UploadCompanyCard from '../../components/userComponents/management/comapny_card';



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
    return (
        <HomePageLayout>
            <TitleSection>
                <div className={stl.IllustrationContainer}>
                    <FilesUpload />
                </div>
                <h2>Vouz devez uploader les documents suivant</h2>
            </TitleSection>
            <div className={stl.cardsSection}>
                <UploadContextCard contextLink={contextLink} />
                <UploadBusinessModelCard businessModelLink={businessModelLink} />
                <UploadCommercialCard comercialtLink={comercialtLink} />
                <UploadMarketingCard marketingtLink={marketingtLink} />
                <UploadManagementCard managementLink={managementLink} />
                <UploadCorporateCard corporateLink={corporateLink} />
                <UploadBusinessPlanCard businessPlanLink={businessPlanLink} />
                <UploadProofOfConceptCard proofOfConceptLink={proofOfConceptLink} />
                <UploadFinanceCard planFinancierLink={planFinancierLink} />
                <UploadCompanyCard companyLink={companyLink} />
            </div>
        </HomePageLayout>
    )
}

export async function getStaticProps() {
    const config = {
        url: 'https://afre-api.herokuapp.com/graphql',
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