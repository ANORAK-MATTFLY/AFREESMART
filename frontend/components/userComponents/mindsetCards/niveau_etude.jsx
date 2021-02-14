import { useState, useEffect } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import family from '../../../lotties/education.json';
import successAnimation from '../../../lotties/validated.json'
import UpdateEducationUtil from '../../../utils/updateEducation';


const EdCard = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [diploma, setDiploma] = useState(null);

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
                            education
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { education } = mindSet
        setDiploma(education);
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
        UpdateEducationUtil(x);
        setIsSelected(true);
    };
    return (
        (diploma != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label} >Quel est votre niveau d’études</h3>

                </div>
            </div>
            : <div className={stl.cardLong}>
                <h3>Quel est votre niveau d’études</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>

                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Bac (diplôme d’état)')}>
                        <p>Bac (diplôme d’état)</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Bac+3')}>
                        <p>Bac+3</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Bac+4')}>
                        <p>Bac+4</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Bac+5')}>
                        <p>Bac+5</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Bac+5  et plus')}>
                        <p>Bac+5  et plus</p>
                    </div>
                </div>
            </div>
    );
}

export default EdCard;