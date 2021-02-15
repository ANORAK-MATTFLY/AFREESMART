<<<<<<< HEAD
import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import philosopher from '../../../lotties/if_you_get_stuck.json';
import successAnimation from '../../../lotties/validated.json'
import UpdateIfYouGetStuckUtil from '../../../utils/updateIfYouGetStuck';


const IfYouFaille = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [isStuck, setIsStuck] = useState(null);

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
                            IfYouGetStuck
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { IfYouGetStuck } = mindSet
        setIsStuck(IfYouGetStuck)
    }

    componentDidMount();

    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: philosopher,
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
        UpdateIfYouGetStuckUtil(x);
        setIsSelected(true);
    };
    return (
        (isStuck != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label} >Si ce que vous faites ne marche pas ?
                    </h3>

                </div>
            </div>
            : <div className={stl.cardLong}>
                <h3>Si ce que vous faites ne marche pas ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous cherchez à savoir pourquoi ?')}>
                        <p>Vous cherchez à savoir pourquoi ?</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous laissez tomber et passer à autre chose.')}>
                        <p>Vous laissez tomber et passer à autre chose.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous continuez jusqu’à ce que ça marche.')}>
                        <p>Vous continuez jusqu’à ce que ça marche.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous prenez conseils auprès des autres.')}>
                        <p>Vous prenez conseils auprès des autres.</p>
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
import philosopher from '../../../lotties/if_you_get_stuck.json';
import successAnimation from '../../../lotties/validated.json'
import UpdateIfYouGetStuckUtil from '../../../utils/updateIfYouGetStuck';


const IfYouFaille = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [isStuck, setIsStuck] = useState('');

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
                            IfYouGetStuck
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { mindSet } = data;
        const { IfYouGetStuck } = mindSet
        setIsStuck(IfYouGetStuck)
    }

    componentDidMount();

    const youthPower = {
        loop: true,
        autoplay: true,
        animationData: philosopher,
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
        UpdateIfYouGetStuckUtil(x);
        setIsSelected(true);
    };
    return (
        (isStuck != null) || (isSelected != false) ?
            <div className={stl.card}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <h3 className={stl.label} >Si ce que vous faites ne marche pas ?
                    </h3>

                </div>
            </div>
            : <div className={stl.cardLong}>
                <h3>Si ce que vous faites ne marche pas ?</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={youthPower} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous cherchez à savoir pourquoi ?')}>
                        <p>Vous cherchez à savoir pourquoi ?</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous laissez tomber et passer à autre chose.')}>
                        <p>Vous laissez tomber et passer à autre chose.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous continuez jusqu’à ce que ça marche.')}>
                        <p>Vous continuez jusqu’à ce que ça marche.</p>
                    </div>
                    <div className={stl.QbtnLong} onClick={() => OnclickHandler('Vous prenez conseils auprès des autres.')}>
                        <p>Vous prenez conseils auprès des autres.</p>
                    </div>
                </div>
            </div>
    );
}

>>>>>>> parent of 6b6dd8d... done with responsive
export default IfYouFaille;