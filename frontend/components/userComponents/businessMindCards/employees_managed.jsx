import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/education.json';
import successAnimation from '../../../lotties/validated.json';
import updatePplManagedUtil from '../../../utils/updatePplManged';

const EmployeeManagement = ({ projects }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [pplManaged, setPplManaged] = useState(null);
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
                            numberOfEmployeesManaged
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { businessMind } = data;
        const { numberOfEmployeesManaged } = businessMind
        setPplManaged(numberOfEmployeesManaged);

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
        updatePplManagedUtil(x);
        setIsSelected(true);
    };
    return (
        (pplManaged != null) || (isSelected != false) ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">Combien de personne avez-vous déjà gérer pour une affaire ?</div>
                </div>
            </div>
            :
            <div className={stl.cardLong}>
                <h3>Combien de personne avez-vous déjà gérer pour une affaire ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('0-5')}>
                        <p>0-5</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('5-10')}>
                        <p>5-10</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('10-20')}>
                        <p>10-20</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('20-100')}>
                        <p>20-100</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('100 à')}>
                        <p>100 à</p>
                    </div>
                </div>
            </div>
    );
}

export default EmployeeManagement;