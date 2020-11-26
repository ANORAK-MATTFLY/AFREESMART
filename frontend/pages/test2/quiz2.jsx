import stl from '../../styles/quizUI.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import team from '../../lotties/EG.json'
import updateDailyPeopleInvolved from '../../lib/updateDailyInvoled';

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
                router.push('./quiz3');
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
            <div className={stl.quizBox}>
                <div className={stl.illustrationCard}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <h3>Quel est le nombre de persones implique dans le Day to Day management ?</h3>
                <div className={stl.buttonSection}>
                    <button className={stl.selectBtn} onClick={() => onClickHandler("1 - 3")}>
                        1 - 3
                </button>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("3 - 6")}>
                        3 - 6
                    </button>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("6 - 12")}>
                        6 - 12
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Test2Quiz2;