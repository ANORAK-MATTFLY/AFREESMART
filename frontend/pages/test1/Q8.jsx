import { useState, useEffect } from 'react';
import axios from 'axios';
import stl from "../../styles/quizUI.module.scss";
import { useRouter } from 'next/router'
import updateToisSimplifiedActionCompany from '../../lib/updateToisSimplifiedActionCompany';
import test1Redirection from '../../lib/test1Redirection';
import { motion } from "framer-motion";
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import quizIllustration from '../../lotties/business-plan-or-chart-presentation.json'






const Question8 = () => {
    const [isValidProject, setIsValidProject] = useState('');
    const componentDidMount = async () => {
        if(typeof window !== "undefined"){
            var token = localStorage.getItem('afreesmartAcessToken') || '';
        }
        let req = await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                              query{
                              project{
                                isValid
                              }
                              }
                  `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { project } = data;
        if (project !== null) {
            const { isValid } = project
            setIsValidProject(isValid)
        }
    }
    componentDidMount();
    const router = useRouter();
    const [myBoolean, setMyBoolean] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = async (x) => {
        await setIsClicked(true);
        if (isClicked) {
            await setMyBoolean(x)
            if (myBoolean == true || myBoolean == false) {
                await updateToisSimplifiedActionCompany(myBoolean);
                if (isValidProject == true) {
                    await router.push('./choise')
                }
                if (isValidProject == false) {
                    await router.push('./sorry');
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
