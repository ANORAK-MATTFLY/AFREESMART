import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import failureAnimation from '../../../lotties/meet.json';
import successAnimation from '../../../lotties/validated.json'
import updateThreeGhostUtil from '../../../utils/updateThreeGhost';


const ThreeGhost = () => {
    const [isCompleted, setIsCompleted] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        completionHandler()
    }, [isCompleted])
    const componentDidMount = async () => {
        const token = localStorage.getItem('afreesmartAcessToken') || '';
        let req = await axios({
            url: 'https://afre-api.herokuapp.com/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                    query{
                        businessMind{
                            threePeopleYouWouldLikeToMet
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { businessMind } = data;
        const { threePeopleYouWouldLikeToMet } = businessMind
        if (!threePeopleYouWouldLikeToMet) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = data => {
        if (data.failure) {
            updateThreeGhostUtil(data.failure);
        }
    }
    const Achieved = {
        loop: true,
        autoplay: true,
        animationData: failureAnimation,
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
                    <label className={stl.label} htmlFor="failure">Citez trois personnes que vous aurez voulu rencontrer s’ils étaient encore vivants ?</label>
                    <input className={stl.input}
                        type="text"
                        name="failure"
                        placeholder=""
                        id="failure"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <form onSubmit={handleSubmit(onSubmit)} className={stl.card}>
                <p className={stl.label} htmlFor="achievements">Citez trois personnes que vous aurez voulu rencontrer s’ils étaient encore vivants ?</p>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Achieved} />
                </div>
                <div className={stl.cardInput}>
                    <input className={stl.input}
                        type="text"
                        name="failure"
                        placeholder=""
                        id="failure"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Valider</button>
                </div>
            </form>
    );
}

export default ThreeGhost;