import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import ambitionAnimation from '../../../lotties/ambition.json';
import successAnimation from '../../../lotties/validated.json'
import updateAmbitionUtil from '../../../utils/updateAmbition';


const RelationShipWithMoney = () => {
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
                            ambitions
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { ambitions } = mindSet
        if (!ambitions) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = async (data) => {
        if (data.ambitions) {
            await updateAmbitionUtil(data.ambitions);
            await router.reload()
        }
    }
    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: ambitionAnimation,
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
                    <label className={stl.label} htmlFor="ambitions">Decrivez vos ambitions</label>
                    <input className={stl.input}
                        type="text"
                        name="ambitions"
                        placeholder="Points forts"
                        id="ambitions"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <form onSubmit={handleSubmit(onSubmit)} className={stl.cardLong}>
                <h3>Quel est votre rapport avec l’argent</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.QbtnLong}>
                        <p>L’argent est un mauvais maitre mais un bon serviteur.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>L’argent ne rend pas heureux mais contribue à 90%</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>L’argent ne m’intéresse pas.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Il ne faut pas travailler pour l’argent mais le faire travailler pour nous.</p>
                    </div>
                </div>
            </form>
    );
}

export default RelationShipWithMoney;