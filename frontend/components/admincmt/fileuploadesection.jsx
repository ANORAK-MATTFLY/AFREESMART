import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
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
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach(async (acceptedFile) => {
            const formData = new FormData();
            formData.append('file', acceptedFile);
            formData.append('upload_preset', 'evofo95k')
            const config = {
                url: `https://api.cloudinary.com/v1_1/dbku02uef/upload`,
                method: 'post',
                data: formData,
            }
            const req = await axios(config)
            if (req.data !== null) {
                var res = await req.data.secure_url;
            }
            setGetTemplate(res)
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accepts: ".docx",
        multiple: false,
    });
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
//         url: 'http://localhost:9100/graphql',
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