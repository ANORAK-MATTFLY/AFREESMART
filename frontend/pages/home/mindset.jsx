import stl from '../../styles/client.homepage.module.scss'
import MindSet from '../../components/userComponents/mindSetComponent';
import HomePageLayout from '../../components/userComponents/homePageLayout';
import TitleSection from '../../components/userComponents/titleSection';
import Card from '../../components/userComponents/card';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import education from '../../lotties/education.json';
import achievement from '../../lotties/achievement.json';
import motivation from '../../lotties/motivation.json';
import power from '../../lotties/youth-power.json'



const MindSetComponent = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: education,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
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
                    <MindSet />
                </div>
                <h2>Nous investison dans l'homme avant la chose.</h2>
                <h2> Decrivez-nous votre mindset !</h2>
            </TitleSection>
            <div className={stl.cardsSection}>
                <Card>
                    <h3>Education</h3>
                    <div className={stl.cardIllustration}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.cardInput}>
                        <label className={stl.label} htmlFor="education">Quel est votre niveaux d'education ?</label>
                        <input className={stl.input}
                            type="text"
                            name="education"
                            placeholder="Education"
                            id="projectName"
                        />
                        <button className={stl.btn}>Valider</button>
                    </div>
                </Card>
                <Card>
                    <h3>Accomplissements</h3>
                    <div className={stl.cardIllustration}>
                        <LottieSuperObj objectProps={Achieved} />
                    </div>
                    <div className={stl.cardInput}>
                        <label className={stl.label} htmlFor="education">Quel sont vos Accomplissements ?</label>
                        <input className={stl.input}
                            type="text"
                            name="education"
                            placeholder="Accomplissements"
                            id="projectName"
                        />
                        <button className={stl.btn}>Valider</button>
                    </div>
                </Card>
                <Card>
                    <h3>Motivations</h3>
                    <div className={stl.cardIllustration}>
                        <LottieSuperObj objectProps={Motivated} />
                    </div>
                    <div className={stl.cardInput}>
                        <label className={stl.label} htmlFor="education">Quel sont vos Motivations ?</label>
                        <input className={stl.input}
                            type="text"
                            name="education"
                            placeholder="motivation"
                            id="projectName"
                        />
                        <button className={stl.btn}>Valider</button>
                    </div>
                </Card>
                <Card>
                    <h3>Vos points forts</h3>
                    <div className={stl.cardIllustration}>
                        <LottieSuperObj objectProps={youthPower} />
                    </div>
                    <div className={stl.cardInput}>
                        <label className={stl.label} htmlFor="education">Quel sont vos points forts ?</label>
                        <input className={stl.input}
                            type="text"
                            name="education"
                            placeholder="Points forts"
                            id="projectName"
                        />
                        <button className={stl.btn}>Valider</button>
                    </div>
                </Card>
            </div>
        </HomePageLayout>
    );
}
export default MindSetComponent;