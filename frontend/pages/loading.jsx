import stl from '../styles/form.module.scss';
import LottieSuperObj from '../components/buttons/lottieFingerprint';

const loadingPage = () => {

    return (
        <div className={stl.loadingBox}>
            <LottieSuperObj objectProps={loading} />
        </div>
    );
}

export default loadingPage;