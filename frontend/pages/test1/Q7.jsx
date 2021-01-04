import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import stl from "../../styles/quizUI.module.scss";
import updateToGeneratesMoney from '../../lib/updateToGeneratesMoney'
import { motion } from "framer-motion";
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import quizIllustration from '../../lotties/Happy-pig.json'
import loadingAnimation from '../../lotties/loadingAnimation.json';


const Question7 = () => {
    const router = useRouter();
    const [myBoolean, setMyBoolean] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = x => {
        setIsClicked(true);
        if (isClicked) {
            setMyBoolean(x)
            if (myBoolean == true || myBoolean == false) {
                updateToGeneratesMoney(myBoolean);
                router.push('./Q8')
            }
        }
    }
    useEffect(() => {
        onClickHandler()
    }, [myBoolean])
    const obj = {
        loop: true,
        autoplay: true,
        animationData: quizIllustration,
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
                <div className={stl.liquid8}></div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={stl.quizContainer}
            >
                <div>
                    <button className={stl.btn}>Retour</button>
                </div>
                <div className={stl.mainSection}>
                    <div className={stl.rocketIllustration}>
                        {myBoolean !== null ?
                            <LottieSuperObj objectProps={loading} />
                            : <LottieSuperObj objectProps={obj} />
                        }
                    </div>
                    <div className={stl.quizText}>
                        <h1>Le but de l’entreprise est-il de faire du profit ?</h1>
                    </div>
                    <div className={stl.btnSection}>
                        <button className={stl.yesBtn} onClick={() => onClickHandler(true)}>Oui</button>
                        <button className={stl.noBtn} onClick={() => onClickHandler(false)}>Non</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Question7;
