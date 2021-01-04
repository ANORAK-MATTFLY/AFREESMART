import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import ambitionAnimation from '../../../lotties/money.json';
import successAnimation from '../../../lotties/validated.json'
import UpdateRelationShipWithMoneylUtil from '../../../utils/updateDealingWithMoney';


const RelationShipWithMoney = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [money, setMoney] = useState('');


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
                            relationShipWithMoney
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { relationShipWithMoney } = mindSet
        setMoney(relationShipWithMoney);
    }
    componentDidMount();

    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: ambitionAnimation,
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
        UpdateRelationShipWithMoneylUtil(x);
        setIsSelected(true);
    };
    return (
        (money != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label} htmlFor="ambitions">Quel est votre rapport avec l’argent ?</h3>
                </div>
            </div>
            : <div className={stl.cardLong}>
                <h3>Quel est votre rapport avec l’argent ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('L’argent est un mauvais maitre mais un bon serviteur.')}>
                        <p>L’argent est un mauvais maitre mais un bon serviteur.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('L’argent ne rend pas heureux mais contribue à 90%')}>
                        <p>L’argent ne rend pas heureux mais contribue à 90%</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('L’argent ne m’intéresse pas.')}>
                        <p>L’argent ne m’intéresse pas.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Il ne faut pas travailler pour l’argent mais le faire travailler pour nous.')}>
                        <p>Il ne faut pas travailler pour l’argent mais le faire travailler pour nous.</p>
                    </div>
                </div>
            </div>
    );
}

export default RelationShipWithMoney;