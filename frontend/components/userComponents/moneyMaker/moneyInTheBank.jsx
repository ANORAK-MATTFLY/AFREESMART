import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import BankAnimation from '../../../lotties/money.json';
import successAnimation from '../../../lotties/validated.json'
import updateMoneyUtil from '../../../utils/updateMoneyInBank';


const MoneyInTheBankCard = () => {
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
                            moneyInBank
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { moneyMaker } = data;
        const { moneyInBank } = moneyMaker
        if (!moneyInBank) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }
    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = data => {
        if (data.bank) {
            updateMoneyUtil(data.bank);
        }
    }
    const Achieved = {
        loop: true,
        autoplay: true,
        animationData: BankAnimation,
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
                    <label className={stl.label} htmlFor="bank">Avez-vous deja cree des entreprises avant ?</label>
                    <input className={stl.input}
                        type="text"
                        name="bank"
                        placeholder="Banque"
                        id="bank"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Modifier</button>
                </div>
            </form>
            : <form onSubmit={handleSubmit(onSubmit)} className={stl.card}>
                <h3>Bank</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Achieved} />
                </div>
                <div className={stl.cardInput}>
                    <label className={stl.label} htmlFor="bank">Combien d'employes avez-vous eu a gerer ?</label>
                    <input className={stl.input}
                        type="text"
                        name="bank"
                        placeholder="Releve banquair"
                        id="bank"
                        ref={register({ required: true })}
                    />
                    <button className={stl.btn} onClick={() => completionHandler()}>Valider</button>
                </div>
            </form>
    );
}

export default MoneyInTheBankCard;