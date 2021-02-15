import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/charts.json';
import successAnimation from '../../../lotties/validated.json';
import updateMoneyUtil from '../../../utils/updateMoneyInBank';

const MonthlyEarningMoney = ({ projects }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [moneyEarned, setMoneyEarned] = useState(null);
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
                        moneyMaker{
                            monthlyEarningMoney
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { moneyMaker } = data;
        const { monthlyEarningMoney } = moneyMaker;
        setMoneyEarned(monthlyEarningMoney);
    }

    componentDidMount();

    const obj = {
        loop: true,
        autoplay: true,
        animationData: education,
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
    const OnclickHandler = (x) => {
        updateMoneyUtil(x);
        setIsSelected(true);
    };
    return (
        (moneyEarned != null) || (isSelected != false) ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">Combien gagnez-vous par mois aujourd’hui en dehors de vos revenus passives?</div>
                </div>
            </div>
            :
            <div className={stl.cardSmallGrid}>
                <h3>Combien gagnez-vous par mois aujourd’hui en dehors de vos revenus passives?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput} onClick={() => OnclickHandler('0-200 $')}>
                    <div className={stl.Qbtn}>
                        <p>0-200 $</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('200-500 $')}>
                        <p>200-500 $</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('500-1000 $')}>
                        <p>500-1000 $</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('1000 à $')}>
                        <p>1000 à $</p>
                    </div>
                </div>
            </div>
    );
}

export default MonthlyEarningMoney;