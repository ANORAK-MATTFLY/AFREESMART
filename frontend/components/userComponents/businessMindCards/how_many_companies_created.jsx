import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/education.json';
import successAnimation from '../../../lotties/validated.json';
import UpdatePreviousCompaniesUtil from '../../../utils/PreviousCompanies';

const NumberOfCompaniesCreated = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [previousCompanies, setPreviousCompanies] = useState(null);
    const componentDidMount = async () => {
        const token = await localStorage.getItem('afreesmartAcessToken') || '';
        let req = await axios({
            url: 'http://localhost:9100/graphql',
            method: 'post',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            data: {
                query: `
                    query{
                        businessMind{
                            PreviousCompaniesCard
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { businessMind } = data;
        const { PreviousCompaniesCard } = businessMind
        setPreviousCompanies(PreviousCompaniesCard)
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
        UpdatePreviousCompaniesUtil(x);
        setIsSelected(true);
    };
    return (
        (previousCompanies != null) || (isSelected != false) ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">Combien d’entreprises avez-vous déjà créer ?</div>
                </div>
            </div>
            :
            <div className={stl.cardLong}>
                <h3>Combien d’entreprises avez-vous déjà créer ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput} onClick={() => OnclickHandler('1-3')}>
                    <div className={stl.Qbtn}>
                        <p>1-3 </p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('3-5')}>
                        <p>3-5</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('0-1')}>
                        <p>0-1</p>
                    </div>
                </div>
            </div>
    );
}

export default NumberOfCompaniesCreated;