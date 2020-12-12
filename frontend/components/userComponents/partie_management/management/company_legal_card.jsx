import stl from '../../../../styles/client.homepage.module.scss';
import Card from '../../card';
import LottieSuperObj from '../../../buttons/lottieFingerprint';
import doc from '../../../../lotties/drop zone';


const UploadProjectLegalAuthorizationsCard = () => {
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
            <h3>Legibilite du projet et autorisations accorde</h3>
            <div className={stl.cardIllustration1}>
                <LottieSuperObj objectProps={obj} />
            </div>
            <div className={stl.cardInput}>
                <h3 className={stl.label} htmlFor="education">Posez votre document ici </h3>
            </div>
        </Card>
    );
}

export default UploadProjectLegalAuthorizationsCard;