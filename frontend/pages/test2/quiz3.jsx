import stl from '../../styles/quizUI.module.scss';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import youngBusinessMan from '../../lotties/9886-growth.json'


const Test2Quiz3 = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: youngBusinessMan,
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
                <h3>Quel est la somme que vous souhaitez lever en suivant notre programme ?</h3>
                <div className={stl.buttonSection}>
                    <button className={stl.selectBtn}>
                        25.000$ - 100.000$
                    </button>
                    <button className={stl.selectBtn}>
                        100.000$ - 300.000$
                    </button>
                    <button className={stl.selectBtn}>
                        Moins que ca
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Test2Quiz3;