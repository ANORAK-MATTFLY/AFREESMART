import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import family from '../../../lotties/avicer.json';
import successAnimation from '../../../lotties/validated.json'
import updateThoughtOnAdvicesUtil from '../../../utils/updateupdateThoughtOnAdvicesUtil';


const ThoughtOnAdvices = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [thought, setThought] = useState('');

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
                            thoughtOnAdvices
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { thoughtOnAdvices } = mindSet

        setThought(thoughtOnAdvices)
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
        updateThoughtOnAdvicesUtil(x);
        setIsSelected(true);
    };
    return (
        (thought != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label}>Quel est votre attitude face aux donneurs de leçons sur votre projet ?</h3>

                </div>
            </div>
            : <div className={stl.cardLong}>
                <h3>Quel est votre attitude face aux donneurs de leçons sur votre projet ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>

                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Personne ne connait mieux que moi le projet pour me dire quoi faire.')}>
                        <p>Personne ne connait mieux que moi le projet pour me dire quoi faire.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('J’adore les remarques et conseils car ça me permet de m’améliorer.')}>
                        <p>J’adore les remarques et conseils car ça me permet de m’améliorer.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('J’aime écouter les remarques seulement si je sais que j’ai tort.')}>
                        <p>J’aime écouter les remarques seulement si je sais que j’ai tort.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Ça me vexe car ça veut dire que la personne pense que je ne fais pas bien mon travail.')}>
                        <p>Ça me vexe car ça veut dire que la personne pense que je ne fais pas bien mon travail.</p>
                    </div>
                </div>
            </div>
    );
}

export default ThoughtOnAdvices;