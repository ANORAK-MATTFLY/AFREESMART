import stl from '../../styles/quizUI.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import youngBusinessMan from '../../lotties/9886-growth.json'
import updateFundRaise from '../../lib/updateFund';
import setInvalidate from '../../utils/setInvalidate';
import loadingAnimation from '../../lotties/loadingAnimation.json';



const Test2Quiz3 = () => {
    const router = useRouter();
    const [choice, setChoice] = useState(null)
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = async (x) => {
        setIsClicked(true);
        if (isClicked) {
            await setChoice(x)
            if (choice) {
                await updateFundRaise(choice);
                await setInvalidate(true);
                await router.push('./quiz4');
            }
        }
    }
    useEffect(() => {
        onClickHandler()
    }, [choice])
    const obj = {
        loop: true,
        autoplay: true,
        animationData: youngBusinessMan,
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
                <div className={stl.liquid5}></div>
            </div>
            <div className={stl.quizBox}>
                <div className={stl.illustrationCard}>
                    {choice !== null ?
                        <LottieSuperObj objectProps={loading} />
                        : <LottieSuperObj objectProps={obj} />
                    }
                </div>
                <h3>Quel est la somme que vous souhaitez lever en suivant notre programme ?</h3>
                <div className={stl.buttonSection}>

                    <button className={stl.selectBtn} onClick={() => onClickHandler("25.000$ - 100.000$")}>
                        25.000$ - 100.000$
                    </button>


                    <button className={stl.selectBtn} onClick={() => onClickHandler("100.000$ - 300.000$")}>
                        100.000$ - 300.000$
                    </button>


                    <button className={stl.selectBtn} onClick={() => onClickHandler("null")}>
                        Moins que ca
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Test2Quiz3;