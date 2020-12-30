import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import previous from '../../../lotties/previousCreated.json';
import successAnimation from '../../../lotties/validated.json'
import updateCompaniesCreatedUtil from '../../../utils/updatePreviousCompany';


const PreviousCompaniesCard = () => {
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
                            PreviousCompaniesCard
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { businessMind } = data;
        const { PreviousCompaniesCard } = businessMind
        if (!PreviousCompaniesCard) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = data => {
        if (data.companyCreated) {
            updateCompaniesCreatedUtil(data.companyCreated);
        }
    }
    const Achieved = {
        loop: true,
        autoplay: true,
        animationData: previous,
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
                    <label className={stl.label} htmlFor="companyCreated">Qu’as-tu déjà accomplis dans ta vie professionnelle dont tu es fière ?</label>
                    <input className={stl.input}
                        type="text"
                        name="companyCreated"
                        placeholder="..."
                        id="companyCreated"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <form onSubmit={handleSubmit(onSubmit)} className={stl.card}>
                <h3>Accomplissements</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Achieved} />
                </div>
                <div className={stl.cardInput}>
                    <p className={stl.label} htmlFor="companyCreated">Qu’as-tu déjà accomplis dans ta vie professionnelle dont tu es fière ?</p>
                    <input className={stl.input}
                        type="text"
                        name="companyCreated"
                        placeholder="Vos entreprises precedente"
                        id="companyCreated"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Valider</button>
                </div>
            </form>
    );
}

export default PreviousCompaniesCard;