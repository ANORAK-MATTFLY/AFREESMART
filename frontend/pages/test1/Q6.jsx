import { useState } from 'react';
import { useForm } from "react-hook-form";
import stl from "../../styles/quizUI.module.scss";
import { useRouter } from 'next/router';
import updateToHasAfricans from '../../lib/updateToHasAfricans';
import { motion } from "framer-motion";
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import quizIllustration from '../../lotties/people.json'


const Question6 = () => {
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
                        <h1>Avez-vous des membres dans votre équipe aillant une nationalité africaine ?</h1>
                    </div>
                    <div className={stl.btnSection}>
                        <button className={stl.yesBtn}>Oui</button>
                        <button className={stl.noBtn}>Non</button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default Question6;
