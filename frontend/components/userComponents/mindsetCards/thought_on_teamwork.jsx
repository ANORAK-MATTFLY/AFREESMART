import { useState, useEffect } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/teamWork.json';
import successAnimation from '../../../lotties/validated.json';
import updateThoughtOnTeamWork from '../../../utils/updateThoughtOnTeamWork';

const ThoughtOnTeamwork = () => {
    const [thought, setThought] = useState('');
    const [isSelected, setIsSelected] = useState(false);
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
                            mindSet{
                                thoughtOnTeamwork
                            }
                        }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { thoughtOnTeamwork } = mindSet;
        await setThought(thoughtOnTeamwork);
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
        updateThoughtOnTeamWork(x);
        setIsSelected(true);
    };

    return (
        thought !== null || isSelected !== false ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">Que pensez-vous du travail en équipe ?</div>
                </div>
            </div>
            :
            <div className={stl.cardLong}>
                <h3>Que pensez-vous du travail en équipe ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler("Je bosse mieux seul.")}>
                        <p>Je bosse mieux seul. </p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler("Je renforce mes faiblesses et je me concentre sur mes forces.")}>
                        <p>Je renforce mes faiblesses et je me concentre sur mes forces.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler("J’aime travailler avec des personnes ayant les mêmes forces que moi.")}>
                        <p>J’aime travailler avec des personnes ayant les mêmes forces que moi.</p>
                    </div>
                </div>
            </div>
    );
}


export default ThoughtOnTeamwork;