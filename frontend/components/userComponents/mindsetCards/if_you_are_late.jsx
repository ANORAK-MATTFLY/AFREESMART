import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import motivation from '../../../lotties/motivation.json';
import successAnimation from '../../../lotties/validated.json'
import updateMotivationUtil from '../../../utils/updateMotivation';


const IfLate = () => {
    const router = useRouter();
    const [isCompleted, setIsCompleted] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        completionHandler()
    }, [isCompleted])
    const componentDidMount = async () => {
        const token = localStorage.getItem('afreesmartAcessToken') || '';
        let req = await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                    query{
                        mindSet{
                            motivations
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { motivations } = mindSet
        if (!motivations) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = async (data) => {
        if (data.motivation) {
            await updateMotivationUtil(data.motivation);
            await router.reload()
        }
    }
    const Motivated = {
        loop: true,
        autoplay: true,
        animationData: motivation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const completedAnimation = {
        loop: true,
        autoplay: true,
        animationData: successAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        isCompleted ?
            <form onSubmit={handleSubmit(onSubmit)} className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <label className={stl.label} htmlFor="motivation">Quel est votre niveaux d'education ?</label>
                    <input className={stl.input}
                        type="text"
                        name="motivation"
                        placeholder="Motivation"
                        id="motivation"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <div onSubmit={handleSubmit(onSubmit)} className={stl.cardLong}>
                <h3>Vous allez arriver en retard à un rendez-vous que faites-vous ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Motivated} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn}>
                        <p>Vous n’êtes jamais en retard.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous vous excusez devant lui à votre arrivée.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous prévenez 15 minutes avant l’heure du rendez-vous votre retard.</p>
                    </div>
                </div>
            </div>
    );
}

export default IfLate;