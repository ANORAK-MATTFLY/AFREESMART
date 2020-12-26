import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import ethic from '../../../lotties/ethic.json';
import successAnimation from '../../../lotties/validated.json'
import updateEthicUtil from '../../../utils/updateEthic';


const EthicCard = () => {
    const router = useRouter();
    const [isCompleted, setIsCompleted] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        completionHandler();
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
                            ethic
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { ethic } = mindSet
        if (!ethic) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = async (data) => {
        if (data.ethic) {
            await updateEthicUtil(data.ethic);
            await router.reload()
        }
    }
    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: ethic,
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
                    <label className={stl.label} htmlFor="ethic">Decrivez votre sans de l'ethic</label>
                    <input className={stl.input}
                        type="text"
                        name="ethic"
                        placeholder="Points forts"
                        id="ethic"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <div onSubmit={handleSubmit(onSubmit)} className={stl.cardLarge}>
                <h3>Pourquoi souhaitez-vous entreprendre ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn}>
                        <p>Car ça vous passionne.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous sentez que vous êtes destinés à faire votre projet.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Pour impressionner mon entourage sur mon intelligence et combativité.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Par vengeance, je me suis fait humilier, je veux prouver que je suis le/la meilleur (e).</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous avez besoin d’argent pour s’occuper d’un proche.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous n’aimez pas l’autorité et souhaitez être votre propre chef.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Car vous avez vu une opportunité de mieux faire que les autres.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Le projet que vous souhaitez faire n’existe pas, vous voulez être le premier.</p>
                    </div>

                </div>
            </div>
    );
}

export default EthicCard;