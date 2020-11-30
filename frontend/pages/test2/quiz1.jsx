import stl from '../../styles/quizUI.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import fundRaise from '../../lotties/Found raise'
import updateExpectedTurnover from '../../lib/updateTurnover';

const Test2Quiz1 = () => {
    const router = useRouter();
    const [choice, setChoice] = useState(null)
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = async (x) => {
        setIsClicked(true);
        if (isClicked) {
            await setChoice(x)
            if (choice) {
                await updateExpectedTurnover(choice);
                console.log(choice);
                router.push('./quiz2');
            }
        }
    }
    useEffect(() => {
        onClickHandler()
    }, [choice])
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
            <div className={stl.progressBar}>
                <div className={stl.liquid1}></div>
            </div>
            <div className={stl.quizBox}>
                <div className={stl.illustrationCard}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <h3>Quel a été le chiffre d'affaires annuelles le plus élevé que vous ayez réalisé ?</h3>
                <div className={stl.buttonSection}>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("12.000 - 24.000")}>
                        12.000 - 24.000
                    </button>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("24.000 - 48.000")}>
                        24.000 - 48.000
                    </button>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("60.000 - 72.000")}>
                        60.000 - 72.000
                    </button>
                </div>
                <div className={stl.buttonSection}>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("84.000 - 96.000")}>
                        84.000 - 96.000
                    </button>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("108.000 - 120.000")}>
                        108.000 - 120.000
                    </button>


                    <button className={stl.selectBtn} onClick={() => onClickHandler("132.000 - 144.000")}>
                        132.000 - 144.000
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Test2Quiz1;