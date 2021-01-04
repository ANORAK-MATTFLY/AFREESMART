import stl from '../../styles/quizUI.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import team from '../../lotties/10073-credit-card-error.json'
import updateToActualTurnover from '../../lib/updateActualTurnover';
import setInvalidate from '../../utils/setInvalidate';
import loadingAnimation from '../../lotties/loadingAnimation.json';



const Test2Quiz4 = () => {
    const router = useRouter();
    const [choice, setChoice] = useState(null)
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = async (x) => {
        setIsClicked(true);
        if (isClicked) {
            await setChoice(x)
            if (choice) {
                await updateToActualTurnover(choice);
                await setInvalidate(true);
                await router.push('./quiz5');
            }
        }
    }
    useEffect(() => {
        onClickHandler()
    }, [choice])
    const obj = {
        loop: true,
        autoplay: true,
        animationData: team,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const loading = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className={stl.container}>
            <div className={stl.progressBar}>
                <div className={stl.liquid7}></div>
            </div>
            <div className={stl.quizBox}>
                <div className={stl.illustrationCard}>
                    {choice !== null ?
                        <LottieSuperObj objectProps={loading} />
                        : <LottieSuperObj objectProps={obj} />
                    }
                </div>
                <h3>Quel est le pourcentage de votre chiffre d'affaire enregistre en bank ?</h3>
                <div className={stl.buttonSection}>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("null")}>
                        10% - 30%
                    </button>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("null")}>
                        30% - 40%
                    </button>
                    <button className={stl.selectBtn} onClick={() => onClickHandler("50% - 80%")}>
                        50% - 80%
                    </button>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("80% - 100%")}>
                        80% - 100%
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Test2Quiz4;