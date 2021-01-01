import stl from '../../styles/admin.dashboard.module.scss';
import ContextCard from '../admincmt/templatesCoards/context';
import CompanyTemplate from '../admincmt/templatesCoards/company';
import BusinessModelCard from '../admincmt/templatesCoards/businessmodel';
import CommercialCard from '../admincmt/templatesCoards/commercial';
import MarketingCard from '../admincmt/templatesCoards/marketing';
import ManagementCard from '../admincmt/templatesCoards/management';
import CorporateCard from '../admincmt/templatesCoards/corporat';
import BusinessPlanCard from '../admincmt/templatesCoards/businessplan';
import ProofOfConceptCard from '../admincmt/templatesCoards/proof';
import FinanceCard from '../admincmt/templatesCoards/finantial_plan';





const FileUploadSection = () => {
    return (
        <div className={stl.documentBox}>
            <h2>Gestion de document</h2>
            <ContextCard />
            <CompanyTemplate />
            <BusinessModelCard />
            <CommercialCard />
            <MarketingCard />
            <ManagementCard />
            <CorporateCard />
            <BusinessPlanCard />
            <ProofOfConceptCard />
            <FinanceCard />
        </div>
    );
}


export default FileUploadSection;









// const componentDidMount = async () => {
//     const id = 1;
//     const req = await axios({
//         url: 'https://afre-api.herokuapp.com/graphql',
//         method: 'post',
//         data: {
//             query: `
//             query{
//                 getTemplateById(id:${id}){
//                 contextLink
//                 businessModelLink
//                 comercialtLink
//                 marketingtLink
//                 managementLink
//                 corporateLink
//                 businessPlanLink
//                 proofOfConceptLink
//                 planFinancierLink
//             }
//             }
//             `
//         }
//     })
//     if (req.data.data !== null) {
//         var res = await req.data.data.getTemplateById;
//     }
// }