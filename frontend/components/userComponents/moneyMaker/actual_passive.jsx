<<<<<<< HEAD
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/passive_money.json';
import successAnimation from '../../../lotties/validated.json';
import updatePassiveUtil from '../../../utils/updatePassive';

const Passive = ({ projects }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [passive, setPassive] = useState(null);
    const componentDidMount = async () => {
        const token = await localStorage.getItem('afreesmartAcessToken') || '';
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
                            passive
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { moneyMaker } = data;
        const { passive } = moneyMaker;
        setPassive(passive);
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
        updatePassiveUtil(x);
        setIsSelected(true);
    };
    return (
        (passive != null) || (isSelected != false) ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">De combien sont vos revenues passives ?</div>
                </div>
            </div>
            :
            <div className={stl.cardSmallGrid}>
                <h3>De combien sont vos revenues passives ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('0-200 $')}>
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

=======
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/passive_money.json';
import successAnimation from '../../../lotties/validated.json';
import updatePassiveUtil from '../../../utils/updatePassive';

const Passive = ({ projects }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [passive, setPassive] = useState('');
    const componentDidMount = async () => {
        const token = await localStorage.getItem('afreesmartAcessToken') || '';
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
                            passive
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { moneyMaker } = data;
        const { passive } = moneyMaker;
        setPassive(passive);
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
        updatePassiveUtil(x);
        setIsSelected(true);
    };
    return (
        (passive != null) || (isSelected != false) ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">De combien sont vos revenues passives ?</div>
                </div>
            </div>
            :
            <div className={stl.cardSmallGrid}>
                <h3>De combien sont vos revenues passives ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('0-200 $')}>
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

>>>>>>> parent of 6b6dd8d... done with responsive
export default Passive;