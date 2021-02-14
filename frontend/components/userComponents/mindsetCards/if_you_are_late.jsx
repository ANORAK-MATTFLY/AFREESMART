import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import motivation from '../../../lotties/ifLate';
import successAnimation from '../../../lotties/validated.json'
import updateIfLateUtil from '../../../utils/updateIfLate';


const IfLate = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [late, setLate] = useState('');

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
                        mindSet{
                            IfLate
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { IfLate } = mindSet
        setLate(IfLate);

    }
    componentDidMount();



    const Motivated = {
        loop: true,
        autoplay: true,
        animationData: motivation,
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
        updateIfLateUtil(x);
        setIsSelected(true);
    };
    return (
        (late != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label}>Vous allez arriver en retard à un rendez-vous que faites-vous ?
                    </h3>

                </div>
            </div>
            : <div className={stl.cardLong}>
                <h3>Vous allez arriver en retard à un rendez-vous que faites-vous ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Motivated} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Vous n’êtes jamais en retard.')}>
                        <p>Vous n’êtes jamais en retard.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous vous excusez devant lui à votre arrivée.')}>
                        <p>Vous vous excusez devant lui à votre arrivée.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous prévenez 15 minutes avant l’heure du rendez-vous votre retard.')}>
                        <p>Vous prévenez 15 minutes avant l’heure du rendez-vous votre retard.</p>
                    </div>
                </div>
            </div>
    );
}

export default IfLate;