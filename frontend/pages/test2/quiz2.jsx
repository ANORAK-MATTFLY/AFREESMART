import stl from '../../styles/quizUI.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import team from '../../lotties/EG.json'
import updateDailyPeopleInvolved from '../../lib/updateDailyInvoled';
import setInvalidate from '../../utils/setInvalidate';





const Test2Quiz2 = () => {
    const router = useRouter();
    const [choice, setChoice] = useState(null)
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = async (x) => {
        setIsClicked(true);
        if (isClicked) {
            await setChoice(x)
            if (choice) {
                await updateDailyPeopleInvolved(choice);
                await setInvalidate(true);
                await router.push('./quiz3');
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
    return (
        <div className={stl.container}>
            <div className={stl.progressBar}>
                <div className={stl.liquid4}></div>
            </div>
            <div className={stl.quizBox}>
                <div className={stl.illustrationCard}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <h3>Quel est le nombre de persones implique dans le Day to Day management ?</h3>
                <div className={stl.buttonSection}>
                    <button className={stl.selectBtn} onClick={() => onClickHandler("null")}>
                        Aucune
                    </button>
                    <button className={stl.selectBtn} onClick={() => onClickHandler("null")}>
                        1
                    </button>
                    <button className={stl.selectBtn} onClick={() => onClickHandler("2 - 3")}>
                        2 - 3
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Test2Quiz2;