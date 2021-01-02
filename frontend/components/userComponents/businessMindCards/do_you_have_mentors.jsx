
import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/education.json';
import successAnimation from '../../../lotties/validated.json';
import UpdateMentorsUtil from '../../../utils/updateMentors';

const Mentors = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [mentors, setMentors] = useState(null);
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
                        businessMind{
                            mentors
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { businessMind } = data;
        const { mentors } = businessMind;
        setMentors(mentors);

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
        UpdateMentorsUtil(x);
        setIsSelected(true);
    };
    return (
        (mentors != null) || (isSelected != false) ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">Quel est votre niveaux d'education ??</div>
                </div>
            </div>
            :
            <div className={stl.cardSmallGrid}>
                <h3>Avez-vous des mentors ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Oui')}>
                        <p>Oui</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Non')}>
                        <p>Non</p>
                    </div>
                </div>
            </div>
    );
}

export default Mentors;