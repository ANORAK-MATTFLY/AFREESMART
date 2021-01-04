import { useState } from 'react';
import axios from 'axios';
import stl from '../../../styles/client.homepage.module.scss';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import education from '../../../lotties/company_fails.json';
import successAnimation from '../../../lotties/validated.json';
import updateCompFailedUtil from '../../../utils/updateCompanyFailed';

const CompanyFailures = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [failures, setFailures] = useState(null);
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
                            companyFailures
                        }
                    }
                `
            }
        })
        let res = await req.data;
        const { data } = res;
        const { businessMind } = data;
        const { companyFailures } = businessMind
        setFailures(companyFailures)
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
        updateCompFailedUtil(x);
        setIsSelected(true);
    };
    return (
        (failures != null) || (isSelected != false) ?
            <div className={stl.cardLong}>
                <h3>Completed</h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={completedAnimation} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.label} htmlFor="education">Combien de faillites avez-vous connu ?</div>
                </div>
            </div>
            :
            <div className={stl.cardLong}>
                <h3>Combien de faillites avez-vous connu ?

                </h3>
                <div className={stl.cardIllustration}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <div className={stl.cardInput}>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('1')}>
                        <p>1 </p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('2')}>
                        <p>2</p>
                    </div>
                    <div className={stl.Qbtn} onClick={() => OnclickHandler('Plus que ca')}>
                        <p>Plus que ca</p>
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





export default CompanyFailures;