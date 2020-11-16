import businessMindIllustration from '../../lotties/businessMind';
import LottieSuperObj from '../buttons/lottieFingerprint';


const BusinessComponent = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: businessMindIllustration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <LottieSuperObj objectProps={obj} />
    );
}

export default BusinessComponent;