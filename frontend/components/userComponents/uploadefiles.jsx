import filesUpload from '../../lotties/38287-scanning-searching-for-data.json';
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