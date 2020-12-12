import stl from '../../../../styles/client.homepage.module.scss';
import Card from '../../../userComponents/card';
import LottieSuperObj from '../../../buttons/lottieFingerprint';
import doc from '../../../../lotties/drop zone';
import Link from 'next/link';




const UploadCompanyCard = () => {
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
            <h3>Entreprise</h3>
            <div className={stl.cardIllustration1}>
                <LottieSuperObj objectProps={obj} />
            </div>
            <div className={stl.cardInput}>
                <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>

                <div className={stl.btn1}>Telechargez le theme</div>

            </div>
        </Card>
    );
}

export default UploadCompanyCard;