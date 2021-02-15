import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import diplomaAnimation from '../../../lotties/weaknesses.json';
import successAnimation from '../../../lotties/validated.json';
import UpdateIfYouHaveNoExpUtil from '../../../utils/updateifYouHaveNoExp';


const IfYouGetStuck = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [isStuck, setIsStuck] = useState(null);

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
                            ifYouHaveNoExp
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { ifYouHaveNoExp } = mindSet
        setIsStuck(ifYouHaveNoExp)
    }
    componentDidMount();
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
    const OnclickHandler = (x) => {
        UpdateIfYouHaveNoExpUtil(x);
        setIsSelected(true);
    };
    return (
        (isStuck != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label} htmlFor="diploma">Quand vous ne savez pas faire quelque chose ?</h3>

                </div>
            </div>
            : <div className={stl.cardLong}>
                <h3>Quand vous ne savez pas faire quelque chose ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Achieved} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous demandez conseils auprès des autres.')}>
                        <p>Vous demandez conseils auprès des autres.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous cherchez par vous-même la solution via internet, livre etc')}>
                        <p>Vous cherchez par vous-même la solution via internet, livre etc</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous engagez quelqu’un pour le faire à votre place.')}>
                        <p>Vous engagez quelqu’un pour le faire à votre place.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous laissez tomber car vous n’aimez pas vous prendre la tête.')}>
                        <p>Vous laissez tomber car vous n’aimez pas vous prendre la tête.</p>
                    </div>
                </div>
            </div>
    );
}

export default IfYouGetStuck;