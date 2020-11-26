import stl from '../../styles/choice.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import LottieSuperObj from '../../components/buttons/lottieFingerprint';
import work from '../../lotties/validated.json';
import startUp from '../../lotties/start-up.json';
import EG from '../../lotties/35684-business-team-discusses-project.json';
import updateCompanyType from '../../lib/updateCompanyType';

const Choice = () => {
    const [choice, setChoice] = useState(null);
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = x => {
        setIsClicked(true);
        if (isClicked) {
            setChoice(x)
            if (choice == 1 || choice == 3) {
                updateCompanyType(choice);
                router.push('../test2/quiz1')
            }
        }
    }
    useEffect(() => {
        onClickHandler()
    }, [choice])
    const router = useRouter();
    const obj1 = {
        loop: true,
        autoplay: true,
        animationData: work,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const obj2 = {
        loop: true,
        autoplay: true,
        animationData: startUp,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const obj3 = {
        loop: true,
        autoplay: true,
        animationData: EG,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className={stl.container}>
            <div className={stl.box}> <div className={stl.cardAnim}>
                <LottieSuperObj objectProps={obj1} />
            </div>
                <h1>Felicitation! vous-avez passer la premier etape!</h1>
                <p>Veillez faire un choix sur le type de parcour que vous desirez suivre </p>
                <div className={stl.cardsSection}>
                    <div className={stl.card} onClick={() => onClickHandler(1)}>
                        <h2>Start-Up</h2>

                        <div className={stl.cardIllustration}>
                            <LottieSuperObj objectProps={obj2} />
                        </div>
                    </div>

                    <div className={stl.card} onClick={() => onClickHandler(3)}>
                        <h2>Early Growth</h2>
                        <div className={stl.cardIllustration}>
                            <LottieSuperObj objectProps={obj3} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Choice;