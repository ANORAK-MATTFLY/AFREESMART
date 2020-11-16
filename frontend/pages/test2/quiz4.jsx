import stl from '../../styles/quizUI.module.scss';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import team from '../../lotties/10073-credit-card-error.json'


const Test2Quiz4 = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: team,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className={stl.container}>
            <div className={stl.quizBox}>
                <div className={stl.illustrationCard}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <h3>Quel est votre pourcentage de chiffre d'affaire enregistre en bank ?</h3>
                <div className={stl.buttonSection}>
                    <button className={stl.selectBtn}>
                        50%
                    </button>
                    <button className={stl.selectBtn}>
                        90%
                    </button>
                    <button className={stl.selectBtn}>
                        Moins que ca
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Test2Quiz4;