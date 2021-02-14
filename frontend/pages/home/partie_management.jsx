import axios from 'axios';
import { useState, useEffect } from 'react';
import stl from "../../styles/client.homepage.module.scss"
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import FilesUpload from '../../components/userComponents/uploadefiles';
import UploadTeamProfileCard from '../../components/userComponents/partie_management/management/team_profile';
import UploadAbilityToGenerateMoneyCard from '../../components/userComponents/partie_management/management/ability_to_generate_money';
import UploadCashFlowStatementCard from '../../components/userComponents/partie_management/management/cashFlowStatement';
import UploadProjectLegalAuthorizationsCard from '../../components/userComponents/partie_management/management/company_legal_card';
import UploadCompanyOrganizationCard from '../../components/userComponents/partie_management/management/company_management';
import UploadMoneyGrowthCard from '../../components/userComponents/partie_management/management/money_growth_card';
import UploadVisionCard from '../../components/userComponents/partie_management/management/vision_card';
import UploadBalanceSheetCard from '../../components/userComponents/partie_management/management/balance';


const HomePage = () => {
    // const [docs, setDoc] = useState(null);
    // const [isFetched, setIsFetched] = useState(false);
    // const getDocs = async () => {
    //     if (typeof window !== 'undefined') {
    //         var token = localStorage.getItem('afreesmartAcessToken') || '';
    //     };
    //     const req = await axios({
    //         url: 'https://afre-api.herokuapp.com/graphql',
    //         method: 'post',
    //         headers: {
    //             'Authorization': `Bearer ${token}`,
    //         },
    //         data: {
    //             query: `
    //             query {
    //                 getProjectDocById{
    //                 companyManagement
    //                 turnoverGrowth
    //                 projectLegalAuthorizations
    //                 teamProfile
    //                 companyVision
    //                 abilityToGenerateEmployment
    //                 cashFlowStatement
    //                 balanceSheet
    //                 }
    //             }
    //             `
    //         }
    //     })
    //     if (req.data.data !== null) {
    //         await setDoc(req.data.data.getProjectDocById);
    //         await setIsFetched(true);
    //     };
    // };
    // useEffect(() => {
    //     getDocs();
    // }, [isFetched]);


    return (
        <HomePageLayout>
            <TitleSection>
                <div className={stl.IllustrationContainer}>
                    <FilesUpload />
                </div>
                <h2>Vouz devez uploader les documents suivant</h2>
            </TitleSection>
            <div className={stl.cardsSection}>
                <UploadBalanceSheetCard UploadBalanceSheetCard={''} />
                <UploadAbilityToGenerateMoneyCard abilityToGenerateEmployment={''} />
                <UploadCashFlowStatementCard fluxGrowth={''} />
                <UploadProjectLegalAuthorizationsCard projectLegalAuthorizations={''} />
                <UploadCompanyOrganizationCard companyManagement={''} />
                <UploadMoneyGrowthCard turnoverGrowth={''} />
                <UploadTeamProfileCard teamProfile={''} />
                <UploadVisionCard companyVision={''} />
            </div>
        </HomePageLayout>
    )
}



export default HomePage;