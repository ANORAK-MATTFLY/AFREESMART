import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import family from '../../../lotties/33300-familia.json';
import successAnimation from '../../../lotties/validated.json'
import updateCompanyValuesUtil from '../../../utils/CompanyVal';


const Ent_values_Card = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [values, setValues] = useState('');
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
                            companyValues
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { companyValues } = mindSet;
        setValues(companyValues);
    }

    componentDidMount();
    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: family,
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
        updateCompanyValuesUtil(x);
        setIsSelected(true);
    };
    return (
        (values != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label} >Combien de frere et soeur avez-vouz ?</h3>
                </div>
            </div>
            : <div className={stl.cardLargeGrid}>
                <h3>Quels sont tes valeurs entrepreneuriales ? (4 choix maximum)</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>

                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Challenge')}>
                        <p>Challenge</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Innovation')}>
                        <p>Innovation</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Sécurité')}>
                        <p>Sécurité</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Audace')}>
                        <p>Audace</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Leadership')}>
                        <p>Leadership</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Storytelling')}>
                        <p>Storytelling</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Empathie')}>
                        <p>Empathie</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Honneur')}>
                        <p>Honneur</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Loyauté')}>
                        <p>Loyauté</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Méritocratie')}>
                        <p>Méritocratie</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Famille avant le travail')}>
                        <p>Famille avant le travail</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Travail avant la famille</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Ecoute</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Esprit d'équipe</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Apprentissage continue</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>Obstination</p>
                    </div>
                </div>
            </div>
    );
}

export default Ent_values_Card;