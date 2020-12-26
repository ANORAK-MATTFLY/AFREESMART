import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import family from '../../../lotties/33300-familia.json';
import successAnimation from '../../../lotties/validated.json'
import updateFamilyUtil from '../../../utils/updateFamily';


const FamilyCard = () => {
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
                            family
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { family } = mindSet
        if (!family) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = async (data) => {
        if (data.family) {
            await updateFamilyUtil(data.family);
            await router.reload()
        }
    }
    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: family,
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
                    <label className={stl.label} htmlFor="family">Combien de frere et soeur avez-vouz ?</label>
                    <input className={stl.input}
                        type="text"
                        name="family"
                        placeholder="Points forts"
                        id="family"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <div onSubmit={handleSubmit(onSubmit)} className={stl.cardLong}>
                <h3>Quel est votre attitude face aux donneurs de leçons sur votre projet ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>

                    <div className={stl.QbtnLong}>
                        <p>Personne ne connait mieux que moi le projet pour me dire quoi faire.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>J’adore les remarques et conseils car ça me permet de m’améliorer.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>J’aime écouter les remarques seulement si je sais que j’ai tort.</p>
                    </div>
                    <div className={stl.QbtnLong}>
                        <p>Ça me vexe car ça veut dire que la personne pense que je ne fais pas bien mon travail.</p>
                    </div>
                </div>
            </div>
    );
}

export default FamilyCard;