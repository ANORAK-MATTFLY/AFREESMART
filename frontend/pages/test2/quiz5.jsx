import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import stl from "../../styles/quizUI.module.scss";
import { motion } from "framer-motion";
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import quizIllustration from '../../lotties/marketing-concept.json'
import updateHasCampaign from '../../lib/updateHasCampaign';
import setInvalidate from '../../utils/setInvalidate';





const Test2Quiz5 = () => {
    const router = useRouter();
    const [myBoolean, setMyBoolean] = useState(null)
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = async (x) => {
        setIsClicked(true);
        if (isClicked) {
            await setMyBoolean(x)
            if (myBoolean == true || myBoolean == false) {
                await updateHasCampaign(myBoolean);
                await setInvalidate(true);
                await router.push('./quiz6');
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
    return (
        <div className={stl.container}>
            <div className={stl.progressBar}>
                <div className={stl.liquid9}></div>
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
                        <LottieSuperObj objectProps={obj} />
                    </div>
                    <div className={stl.quizText}>
                        <h1>Avez-vous un plant de communication ?</h1>
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

export default Test2Quiz5;
