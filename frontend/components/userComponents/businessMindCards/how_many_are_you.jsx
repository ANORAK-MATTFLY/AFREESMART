import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/education.json';
import successAnimation from '../../../lotties/validated.json';
import updateHowManyUtil from '../../../utils/HowMany';

const HowManyAreYou = ({ projects }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [total, setTotal] = useState('');

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
                            howManyAreYou
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { businessMind } = data;
        const { howManyAreYou } = businessMind
        setTotal(howManyAreYou);
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
        updateHowManyUtil(x);
        setIsSelected(true);
    };
    return (
        (total != null) || (isSelected != false) ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">Combien de personne compose votre ménage en dehors de vous-même ?</div>
                </div>
            </div>
            :
            <div className={stl.cardLong}>
                <h3>Combien de personne compose votre ménage en dehors de vous-même ?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput} onClick={() => OnclickHandler('0')}>
                    <div className={stl.Qbtn}>
                        <p>0</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('1-3')}>
                        <p>1-3</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('3-6')}>
                        <p>3-6</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('6-9')}>
                        <p>6-9</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Plus de 9')}>
                        <p>Plus de 9</p>
                    </div>
                </div>
            </div>
    );
}
export async function getServerSideProps() {
    if (typeof window !== 'undefined') {
        var accessToken = localStorage.getItem('afreesmartAcessToken');
    }
    const req = await axios({
        url: 'https://afre-api.herokuapp.com/graphql',
        method: 'post',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
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
    const projects = await req.data;
    return {
        props: {
            projects,
        },
    }
}

export default HowManyAreYou;