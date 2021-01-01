import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import achievement from '../../../lotties/achievement.json';
import successAnimation from '../../../lotties/validated.json'
import updateIfWrongUtil from '../../../utils/updateIfWrong';


const IfWrong = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [wrong, setWrong] = useState('');

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
                            IfWrong
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { IfWrong } = mindSet
        setWrong(IfWrong);
    }
    componentDidMount()
    const Achieved = {
        loop: true,
        autoplay: true,
        animationData: achievement,
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
    console.log(wrong, isSelected);
    const OnclickHandler = (x) => {
        updateIfWrongUtil(x);
        setIsSelected(true);
    };
    return (
        (wrong != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label} htmlFor="achievements">Si vous avez tort comment réagissez-vous ?</h3>

                </div>
            </div>
            : <div className={stl.cardLong} >
                <h3>Si vous avez tort comment réagissez-vous ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={Achieved} />
                </div>

                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Vous avez rarement tort.')}>
                        <p>Vous avez rarement tort.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous prenez du recul sur ce qui s’est passé et vous trouvez une manière de réparer vos torts.')}>
                        <p>Vous prenez du recul sur ce qui s’est passé et vous trouvez une manière de réparer vos torts.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous cherchez à savoir qui ou quoi vous a induit en erreur.')}>
                        <p>Vous cherchez à savoir qui ou quoi vous a induit en erreur.</p>
                    </div>
                </div>
            </div>
    );
}

export default IfWrong;