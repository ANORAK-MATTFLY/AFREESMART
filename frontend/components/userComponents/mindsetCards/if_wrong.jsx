import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import achievement from '../../../lotties/achievement.json';
import successAnimation from '../../../lotties/validated.json'
import updateAchievementUtil from '../../../utils/updateAchievement';


const IfWrong = () => {
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
                            achievements
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { achievements } = mindSet
        if (!achievements) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = data => {
        if (data.achievements) {
            updateAchievementUtil(data.achievements);
        }
    }
    const Achieved = {
        loop: true,
        autoplay: true,
        animationData: achievement,
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
                    <label className={stl.label} htmlFor="achievements">Quel est votre niveaux d'education ?</label>
                    <input className={stl.input}
                        type="text"
                        name="achievements"
                        placeholder="Accomplissements"
                        id="achievements"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <div onSubmit={handleSubmit(onSubmit)} className={stl.cardLong}>
                <h3>Si vous avez tort comment réagissez-vous ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Achieved} />
                </div>

                <div className={stl.cardInput}>
                    <div className={stl.Qbtn}>
                        <p>Vous avez rarement tort.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous prenez du recul sur ce qui s’est passé et vous trouvez une manière de réparer vos torts.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous cherchez à savoir qui ou quoi vous a induit en erreur.</p>
                    </div>
                </div>
            </div>
    );
}

export default IfWrong;