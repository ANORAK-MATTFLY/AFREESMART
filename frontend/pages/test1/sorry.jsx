import stl from '../../styles/sorry.page.module.scss';
import sorryIllustration from '../../lotties/paths.json';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';

const SorryPage = () => {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: sorryIllustration,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className={stl.container}>
            <div className={stl.box}>
                <h1>Merci !</h1>
                <div className={stl.illustrationBox}>
                    <LottieSuperObj objectProps={obj} />
                </div>
                <p>Nous avons été ravis de votre passage et nous espérons que votre entreprise avance pour le mieux, mais malheureusement vous ne remplissez pas les critères requis pour pouvoir participer a notre programme, néanmoins AFREESMART souhaite prospérité a votre entreprise!</p>
            </div>
        </div>
    );
}

export default SorryPage;