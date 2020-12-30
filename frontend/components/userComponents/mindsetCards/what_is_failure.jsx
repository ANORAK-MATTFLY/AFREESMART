import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import power from '../../../lotties/youth-power.json';
import successAnimation from '../../../lotties/validated.json'
import updateFailure from '../../../utils/updateFailure';


const WhatIsFailureToYou = () => {
    const [failure, setFailure] = useState('')
    const [isSelected, setIsSelected] = useState(false);

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
                            ifYouFaille
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { ifYouFaille } = mindSet
        setFailure(ifYouFaille);
    }
    componentDidMount();

    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: power,
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
        updateFailure(x);
        setIsSelected(true);
    };
    console.log(failure);
    return (
        failure !== null || failure !== null || isSelected !== false ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label} htmlFor="strength">Que représente l’échec pour vous ?</h3>
                </div>
            </div>
            : <div className={stl.cardLong} >
                <h3>Que représente l’échec pour vous ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous allez tenter de mieux faire la prochaine fois, pas des regrets.')}>
                        <p>Vous allez tenter de mieux faire la prochaine fois, pas des regrets.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous ne connaissez pas d’échec.')}>
                        <p>Vous ne connaissez pas d’échec.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('C’est une manière de gagner de l’expérience, ça ne vous freine pas pour avancer.')}>
                        <p>C’est une manière de gagner de l’expérience, ça ne vous freine pas pour avancer.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('L’échec vous mets en horreur, vous pouvez abandonner et essayer autre chose.')}>
                        <p>L’échec vous mets en horreur, vous pouvez abandonner et essayer autre chose.</p>
                    </div>
                </div>
            </div>
    );
}

export default WhatIsFailureToYou;