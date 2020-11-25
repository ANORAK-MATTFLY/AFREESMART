import stl from '../../styles/quizUI.module.scss';
import Link from 'next/link';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import fundRaise from '../../lotties/Found raise'


const Test2Quiz1 = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: fundRaise,
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
                <h3>Quel a été le chiffre d'affaires annuelles le plus élevé que vous ayez réalisé ?</h3>
                <div className={stl.buttonSection}>
                    <Link href={'./quiz2'}>
                        <button className={stl.selectBtn}>
                            12.000 - 24.000
                    </button>
                    </Link>
                    <Link href={'./quiz2'}>
                        <button className={stl.selectBtn}>
                            24.000 - 48.000
                    </button>
                    </Link>
                    <Link href={'./quiz2'}>
                        <button className={stl.selectBtn}>
                            60.000 - 72.000
                    </button>
                    </Link>
                </div>
                <div className={stl.buttonSection}>
                    <Link href={'./quiz2'}>
                        <button className={stl.selectBtn}>
                            84.000 - 96.000
                    </button>
                    </Link>
                    <Link href={'./quiz2'}>
                        <button className={stl.selectBtn}>
                            108.000 - 120.000
                    </button>
                    </Link>

                    <Link href={'./quiz2'}>
                        <button className={stl.selectBtn}>
                            132.000 - 144.000
                    </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Test2Quiz1;