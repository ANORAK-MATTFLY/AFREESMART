import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import idolAnimation from '../../../lotties/idol.json';
import successAnimation from '../../../lotties/validated.json'
import updateIdolUtil from '../../../utils/updateIdol';


const IdolCard = () => {
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
                        businessMind{
                            idol
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { businessMind } = data;
        const { idol } = businessMind
        if (!idol) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
        console.log(idol);
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = data => {
        if (data.idol) {
            updateIdolUtil(data.idol);
        }
    }
    const Achieved = {
        loop: true,
        autoplay: true,
        animationData: idolAnimation,
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
                    <label className={stl.label} htmlFor="idol">Quel est votre niveaux d'education ?</label>
                    <input className={stl.input}
                        type="text"
                        name="idol"
                        placeholder="Vos idol"
                        id="idol"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <form onSubmit={handleSubmit(onSubmit)} className={stl.card}>
                <h3>Qui sont vos idol ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Achieved} />
                </div>
                <div className={stl.cardInput}>
                    <label className={stl.label} htmlFor="idol">Quel sont vos Accomplissements ?</label>
                    <input className={stl.input}
                        type="text"
                        name="idol"
                        placeholder="Vos idols"
                        id="idol"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Valider</button>
                </div>
            </form>
    );
}

export default IdolCard;