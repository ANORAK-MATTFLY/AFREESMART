import TitleSection from './titleSection';
import MindSetIllustration from '../../lotties/MindSet.json';
import LottieSuperObj from '../buttons/lottieFingerprint';


const MindSet = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: MindSetIllustration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <LottieSuperObj objectProps={obj} />
    );
}

export default MindSet;