import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import weaknessAnimation from '../../../lotties/weaknesses.json';
import successAnimation from '../../../lotties/validated.json'
import updateWeaknessesUtil from '../../../utils/updateWeaknesses';


const FiveWeaknessesCard = () => {
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
                            weaknesses
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { weaknesses } = mindSet
        if (!weaknesses) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = async (data) => {
        if (data.weaknesses) {
            await updateWeaknessesUtil(data.weaknesses);
            await router.reload()
        }
    }
    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: weaknessAnimation,
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
                    <label className={stl.label} htmlFor="weaknesses">Decrivez vos ambitions</label>
                    <input className={stl.input}
                        type="text"
                        name="weaknesses"
                        placeholder="Points failbe"
                        id="weaknesses"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <form onSubmit={handleSubmit(onSubmit)} className={stl.card}>
                <h3>Quels sont vos 5 faiblesses ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>
                    <label className={stl.label} htmlFor="weaknesses">Decrivez vos points faible</label>
                    <input className={stl.input}
                        type="text"
                        name="weaknesses"
                        placeholder="Vos point failbe"
                        id="weaknesses"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Valider</button>
                </div>
            </form>
    );
}

export default FiveWeaknessesCard;