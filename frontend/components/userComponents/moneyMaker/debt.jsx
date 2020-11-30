import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import DebtAnimation from '../../../lotties/debt.json';
import successAnimation from '../../../lotties/validated.json'
import updateDebtUtil from '../../../utils/updateDebt';


const DebtCard = () => {
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
                        moneyMaker{
                            debt
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { moneyMaker } = data;
        const { debt } = moneyMaker
        if (!debt) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = data => {
        if (data.debt) {
            updateDebtUtil(data.debt);
        }
    }
    const Achieved = {
        loop: true,
        autoplay: true,
        animationData: DebtAnimation,
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
                    <label className={stl.label} htmlFor="debt">Avez-vous deja cree des entreprises avant ?</label>
                    <input className={stl.input}
                        type="text"
                        name="debt"
                        placeholder="Dette"
                        id="debt"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <form onSubmit={handleSubmit(onSubmit)} className={stl.card}>
                <h3>En dettement</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Achieved} />
                </div>
                <div className={stl.cardInput}>
                    <label className={stl.label} htmlFor="debt">Combien d'employes avez-vous eu a gerer ?</label>
                    <input className={stl.input}
                        type="text"
                        name="debt"
                        placeholder="Dette"
                        id="debt"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Valider</button>
                </div>
            </form>
    );
}

export default DebtCard;