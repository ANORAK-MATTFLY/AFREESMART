<<<<<<< HEAD
import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import ethic from '../../../lotties/why_ent.json';
import successAnimation from '../../../lotties/validated.json'
import updateEntUtil from '../../../utils/updateEnt';


const EthicCard = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [reason, setReason] = useState(null);

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
                            whyBecomeEnt
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { whyBecomeEnt } = mindSet
        setReason(whyBecomeEnt);
    }


    componentDidMount();
    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: ethic,
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
        updateEntUtil(x);
        setIsSelected(true);
    };
    return (
        (reason != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3>Pourquoi souhaitez-vous entreprendre ?</h3>
                </div>
            </div>
            : <div className={stl.cardLarge}>
                <h3>Pourquoi souhaitez-vous entreprendre ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Car ça vous passionne.')}>
                        <p>Car ça vous passionne.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous sentez que vous êtes destinés à faire votre projet.')}>
                        <p>Vous sentez que vous êtes destinés à faire votre projet.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Pour impressionner mon entourage sur mon intelligence et combativité.')}>
                        <p>Pour impressionner mon entourage sur mon intelligence et combativité.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Par vengeance, je me suis fait humilier, je veux prouver que je suis le/la meilleur (e).')}>
                        <p>Par vengeance, je me suis fait humilier, je veux prouver que je suis le/la meilleur (e).</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous avez besoin d’argent pour s’occuper d’un proche.')}>
                        <p>Vous avez besoin d’argent pour s’occuper d’un proche.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous n’aimez pas l’autorité et souhaitez être votre propre chef.')}>
                        <p>Vous n’aimez pas l’autorité et souhaitez être votre propre chef.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Car vous avez vu une opportunité de mieux faire que les autres.')}>
                        <p>Car vous avez vu une opportunité de mieux faire que les autres.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Le projet que vous souhaitez faire n’existe pas, vous voulez être le premier.')}>
                        <p>Le projet que vous souhaitez faire n’existe pas, vous voulez être le premier.</p>
                    </div>

                </div>
            </div>
    );
}

=======
import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import ethic from '../../../lotties/why_ent.json';
import successAnimation from '../../../lotties/validated.json'
import updateEntUtil from '../../../utils/updateEnt';


const EthicCard = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [reason, setReason] = useState('');

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
                            whyBecomeEnt
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { whyBecomeEnt } = mindSet
        setReason(whyBecomeEnt);
    }


    componentDidMount();
    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: ethic,
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
        updateEntUtil(x);
        setIsSelected(true);
    };
    return (
        (reason != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3>Pourquoi souhaitez-vous entreprendre ?</h3>
                </div>
            </div>
            : <div className={stl.cardLarge}>
                <h3>Pourquoi souhaitez-vous entreprendre ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Car ça vous passionne.')}>
                        <p>Car ça vous passionne.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous sentez que vous êtes destinés à faire votre projet.')}>
                        <p>Vous sentez que vous êtes destinés à faire votre projet.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Pour impressionner mon entourage sur mon intelligence et combativité.')}>
                        <p>Pour impressionner mon entourage sur mon intelligence et combativité.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Par vengeance, je me suis fait humilier, je veux prouver que je suis le/la meilleur (e).')}>
                        <p>Par vengeance, je me suis fait humilier, je veux prouver que je suis le/la meilleur (e).</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous avez besoin d’argent pour s’occuper d’un proche.')}>
                        <p>Vous avez besoin d’argent pour s’occuper d’un proche.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous n’aimez pas l’autorité et souhaitez être votre propre chef.')}>
                        <p>Vous n’aimez pas l’autorité et souhaitez être votre propre chef.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Car vous avez vu une opportunité de mieux faire que les autres.')}>
                        <p>Car vous avez vu une opportunité de mieux faire que les autres.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Le projet que vous souhaitez faire n’existe pas, vous voulez être le premier.')}>
                        <p>Le projet que vous souhaitez faire n’existe pas, vous voulez être le premier.</p>
                    </div>

                </div>
            </div>
    );
}

>>>>>>> parent of 6b6dd8d... done with responsive
export default EthicCard;