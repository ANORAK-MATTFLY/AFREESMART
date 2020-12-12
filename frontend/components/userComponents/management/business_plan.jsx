import axios from 'axios';
import { useState } from 'react';
import stl from '../../../styles//client.homepage.module.scss';
import Card from '../../userComponents/card';
import LottieSuperObj from '../../buttons/lottieFingerprint';
import doc from '../../../lotties/drop zone.json';
import Link from 'next/link';


const UploadBusinessPlanCard = ({ businessPlanLink }) => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: doc,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Card>
            <h3>Business Plan</h3>
            <div className={stl.cardIllustration1}>
                <LottieSuperObj objectProps={obj} />
            </div>
            <div className={stl.cardInput}>
                <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
                <Link href={businessPlanLink}>
                    <a>
                        <div className={stl.btn1}>Telechargez le theme</div>
                    </a>
                </Link>
            </div>
        </Card>
    );
}

export default UploadBusinessPlanCard;