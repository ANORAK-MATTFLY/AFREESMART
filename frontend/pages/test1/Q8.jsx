import { useState, useEffect } from 'react';
import axios from 'axios';
import stl from "../../styles/quizUI.module.scss";
import { useRouter } from 'next/router'
import updateToisSimplifiedActionCompany from '../../lib/updateToisSimplifiedActionCompany';
import { motion } from "framer-motion";
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import quizIllustration from '../../lotties/business-plan-or-chart-presentation.json'
import InvalidateProject from '../../lib/invalidateProject';
import loadingAnimation from '../../lotties/loadingAnimation.json';




const Question8 = () => {
    const router = useRouter();
    const [myBoolean, setMyBoolean] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = async (x) => {
        await setIsClicked(true);
        if (isClicked) {
            await setMyBoolean(x)
            if (myBoolean == true || myBoolean == false) {
                await updateToisSimplifiedActionCompany(myBoolean);
                await InvalidateProject(true);
                router.push('./redirect');
            }
        }
    }
    function componentDidMount() {
        onClickHandler();
    }
    useEffect(() => {
        componentDidMount();
    }, [myBoolean]);
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
    console.log(isClicked);
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
                        {myBoolean !== null ?
                            <LottieSuperObj objectProps={loading} />
                            : <LottieSuperObj objectProps={obj} />
                        }
                    </div>
                    <div className={stl.quizText}>
                        <h1>Êtes-vous une société avec actions simplifiée ?</h1>
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

export default Question8;
