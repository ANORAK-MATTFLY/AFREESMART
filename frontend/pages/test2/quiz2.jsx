import stl from '../../styles/quizUI.module.scss';
import Link from 'next/link';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import team from '../../lotties/EG.json'


const Test2Quiz2 = () => {
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
                <h3>Quel est le nombre de persones implique dans le Day to Day management ?</h3>
                <div className={stl.buttonSection}>
                    <Link href={'./quiz3'}>
                        <button className={stl.selectBtn}>
                            1 - 3
                </button>
                    </Link>
                    <Link href={'./quiz3'}>
                        <button className={stl.selectBtn}>
                            3 - 6
                    </button>
                    </Link>
                    <Link href={'./quiz3'}>
                        <button className={stl.selectBtn}>
                            6 - 12
                    </button>
                    </Link>
                </div>


            </div>
        </div>
    );
}

export default Test2Quiz2;