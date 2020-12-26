import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import family from '../../../lotties/33300-familia.json';
import successAnimation from '../../../lotties/validated.json'
import updateFamilyUtil from '../../../utils/updateFamily';


const Ent_values_Card = () => {
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
            : <div onSubmit={handleSubmit(onSubmit)} className={stl.cardLargeGrid}>
                <h3>Quels sont tes valeurs entrepreneuriales ? (4 choix maximum)</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>

                    <div className={stl.Qbtn}>
                        <p>Challenge</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Innovation</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Sécurité</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Audace</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Audace</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Leadership</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Storytelling</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Empathie</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Honneur</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Loyauté</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Méritocratie</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Famille avant le travail</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Travail avant la famille</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Ecoute</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Esprit d'équipe</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Apprentissage continue</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Obstination</p>
                    </div>
                </div>
            </div>
    );
}

export default Ent_values_Card;