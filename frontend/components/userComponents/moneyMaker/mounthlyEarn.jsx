import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/education.json';
import successAnimation from '../../../lotties/validated.json';
import updateEducationUtil from '../../../utils/updateEducation';

const MonthlyEarningMoney = ({ projects }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        completionHandler();
    }, [isCompleted]);
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
        if (!education) {
            setIsCompleted(false)
        } else {
            setIsCompleted(true)
        }

    }
    const completionHandler = () => {
        componentDidMount();
    }
    const onSubmit = data => {
        if (data.education) {
            updateEducationUtil(data.education);
        }
    }

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
    return (
        isCompleted ?
            <div onSubmit={handleSubmit(onSubmit)} className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">Combien gagnez-vous par mois aujourd’hui en dehors de vos revenus passives?</div>
                </div>
            </div>
            :
            <div className={stl.cardSmallGrid}>
                <h3>Combien gagnez-vous par mois aujourd’hui en dehors de vos revenus passives?
                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn}>
                        <p>0-200 $</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>200-500 $</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>500-1000 $</p>
                    </div>
                    <div className={stl.Qbtn}>
                        <p>1000 à $</p>
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
        url: 'http://localhost:9100/graphql',
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





export default MonthlyEarningMoney;