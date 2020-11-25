import { useState, useEffect } from 'react';
import stl from "../../styles/quizUI.module.scss";
import { useRouter } from 'next/router'
import updateToisSimplifiedActionCompany from '../../lib/updateToisSimplifiedActionCompany';
import test1Redirection from '../../lib/test1Redirection';
import { motion } from "framer-motion";
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import quizIllustration from '../../lotties/business-plan-or-chart-presentation.json'


const Question8 = () => {
    const router = useRouter();
    const [myBoolean, setMyBoolean] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = x => {
        setIsClicked(true);
        if (isClicked) {
            setMyBoolean(x)
            if (myBoolean == true || myBoolean == false) {
                if (myBoolean == true) {
                    updateToisSimplifiedActionCompany(myBoolean);
                    router.push('./choise')
                }
                if (myBoolean == false) {
                    updateToisSimplifiedActionCompany(myBoolean);
                    router.push('./sorry');
                }
            }

        }
    }
    useEffect(() => {
        onClickHandler()
    }, [myBoolean]);
    const obj = {
        loop: true,
        autoplay: true,
        animationData: quizIllustration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className={stl.container}>
            <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className={stl.quizContainer}
            >
                <div>
                    <button className={stl.btn}>Retour</button>
                </div>
                <div className={stl.mainSection}>
                    <div className={stl.rocketIllustration}>
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.quizText}>
                        <h1>Êtes-vous une société par actions simplifiée ?</h1>
                    </div>
                    <div className={stl.btnSection}>
                        <button className={stl.yesBtn} onClick={() => setMyBoolean(true)}>Oui</button>
                        <button className={stl.noBtn} onClick={() => setMyBoolean(false)}>Non</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Question8;
