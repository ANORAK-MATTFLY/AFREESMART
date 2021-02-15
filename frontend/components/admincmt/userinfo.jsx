import stl from '../../styles/details.page.module.scss';



const UserInfo = ({ mindset, businessMind, moneyMaker }) => {
    const {
        passive,
        monthlyEarningMoney
    } = moneyMaker;
    console.log(monthlyEarningMoney, "dBen");
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
            <h3>Mindset</h3>
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
            <h3>Mind Business</h3>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{idol}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Citez trois personnes qui vous inspire que vous ne connaissez pas ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{threePeopleYouWouldLikeToMet}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Citez trois personnes que vous aurez voulu rencontrer s’ils étaient encore vivants ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{companyCreatedPreviously}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Combien d’entreprises avez-vous déjà créer ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{companyFailures}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Combien de faillites avez-vous connu ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{numberOfEmployeesManaged}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Combien de personne avez-vous déjà gérer pour une affaire ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{mentors}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Avez-vous des mentors ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{howManyAreYou}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Combien de personne compose votre ménage en dehors de vous-même ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{doYouHaveSupport}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Est-ce que votre entourage soutient votre projet ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{careerAchievement}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Qu’as-tu déjà accomplis dans ta vie professionnelle dont tu es fière ?</p>
                </div>
            </div>
            <h3>Money maker</h3>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{passive}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>De combien sont vos revenues passives ?</p>
                </div>
            </div>
            <div className={stl.quotes}>
                <div className={stl.quotesContent}>
                    <p>{monthlyEarningMoney}</p>
                </div>
                <div className={stl.quotesTitle}>
                    <p>Combien gagnez-vous par mois aujourd’hui en dehors de vos revenus passives ?</p>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;
