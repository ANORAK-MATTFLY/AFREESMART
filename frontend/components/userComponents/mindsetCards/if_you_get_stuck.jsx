import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import diplomaAnimation from '../../../lotties/diploma.json';
import successAnimation from '../../../lotties/validated.json'
import updateDiplomaUtil from '../../../utils/updateDiploma';


const IfYouGetStuck = () => {
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
                            diploma
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { diploma } = mindSet
        if (!diploma) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = data => {
        if (data.diploma) {
            updateDiplomaUtil(data.diploma);
            router.reload();
        }
    }
    const Achieved = {
        loop: true,
        autoplay: true,
        animationData: diplomaAnimation,
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
                    <label className={stl.label} htmlFor="diploma">Quel est vos diploms obtenue jusqu-ici ?</label>
                    <input className={stl.input}
                        type="text"
                        name="diploma"
                        placeholder="Vos diplomes"
                        id="diploma"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <div onSubmit={handleSubmit(onSubmit)} className={stl.cardLong}>
                <h3>Quand vous ne savez pas faire quelque chose ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Achieved} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.QbtnLong}>
                        <p>Vous demandez conseils auprès des autres.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous cherchez par vous-même la solution via internet, livre etc</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous engagez quelqu’un pour le faire à votre place.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Vous laissez tomber car vous n’aimez pas vous prendre la tête.</p>
                    </div>
                </div>
            </div>
    );
}

export default IfYouGetStuck;