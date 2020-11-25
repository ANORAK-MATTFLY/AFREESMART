import stl from '../../styles/quizUI.module.scss';
import Link from 'next/link';
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
                <h3>Quel est le pourcentage de votre chiffre d'affaire enregistre en bank ?</h3>
                <div className={stl.buttonSection}>
                    <Link href={'./quiz5'}>
                        <button className={stl.selectBtn}>
                            50%
                    </button>
                    </Link>
                    <Link href={'./quiz5'}>
                        <button className={stl.selectBtn}>
                            90%
                    </button>
                    </Link>
                    <Link href={'./quiz5'}>
                        <button className={stl.selectBtn}>
                            Moins que ca
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Test2Quiz4;