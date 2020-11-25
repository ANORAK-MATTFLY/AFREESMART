import filesUpload from '../../lotties/23803-projectmanagement.json';
import LottieSuperObj from '../buttons/lottieFingerprint';


const FilesUpload = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: filesUpload,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <LottieSuperObj objectProps={obj} />
    );
}

export default FilesUpload;