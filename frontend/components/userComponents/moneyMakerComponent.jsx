import moneyMakerIllustration from '../../lotties/moneyMaker.json';
import LottieSuperObj from '../buttons/lottieFingerprint';


const MoneyMaker = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: moneyMakerIllustration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <LottieSuperObj objectProps={obj} />
    );
}

export default MoneyMaker;