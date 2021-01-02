import stl from '../../styles/details.page.module.scss';



const UserInfo = ({ mindset }) => {
    const {
        companyValues,
        family,
        thoughtOnTeamwork,
        thoughtOnAdvices,
        whyBecomeEnt,
        ethic,
        IfWrong,
        IfLate,
        IfYouGetStuck,
        ifYouFaille,
        ifYouHaveNoExp,
        fiveKeyStrength,
        fiveWeakness,
        relationShipWithMoney,
        education,
    } = mindset;

    const {
        idol,
        careerAchievement,
        companyCreatedPreviously,
        failuresAsEntrepreneur,
        numberOfEmployeesManaged,
        mentors,
        doYouHaveSupport,
        howManyAreYou,
        companyFailures,
        PreviousCompaniesCard,
        twoQuestionsForThisPeople,
        threePeopleYouWouldLikeToMet
    } = businessMind;

    return (
        <div className={stl.userDetails}>
            <h3>Mind set</h3>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{thoughtOnTeamwork}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Que pensez-vous du travail en équipe ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{IfWrong}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Si vous avez tort comment réagissez-vous ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{IfLate}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Vous allez arriver en retard à un rendez-vous que faites-vous ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{ifYouFaille}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Que représentez l’échec pour vous ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{thoughtOnAdvices}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Quel est votre attitude face aux donneurs de leçons sur votre projet ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{whyBecomeEnt}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Pourquoi souhaitez-vous entreprendre ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{IfYouGetStuck}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Si ce que vous faites ne marche pas ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{ifYouHaveNoExp}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Quand vous ne savez pas faire quelque chose ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{fiveKeyStrength}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Quels sont vos 5 forces personnel ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{fiveWeakness}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Quels sont vos 5 faiblesses ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{relationShipWithMoney}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Quel est votre rapport avec l’argent</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{companyValues}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Quels sont tes valeurs entrepreneuriales ?</p>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
