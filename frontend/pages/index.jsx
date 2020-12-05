import stl from "../styles/landing-page.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBusinessTime,
    faEye,
    faHandsHelping,
    faMoneyBillWave,
    faRocket,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import LottieSuperObj from '../components/buttons/lottieSuperObj';
import ButtonReg from '../components/buttons/buttonReg';
import arrowDown from '../media/Cdown.json';
import LoginBoutton from '../components/buttons/LoginButton';
import RegisterButton from '../components/buttons/RegisterButton';


export default function Home() {
    const obj = {
        loop: true,
        autoplay: true,
        animationData: arrowDown,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className={stl.container}>
            <nav className={stl.headOfThePage}>
                <div className={stl.welcomeTextSection}>
                    <motion.h1 className={stl.WelcomeText} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>


                        Nous investissons,<br /> accompagnons et créons les entreprises
          </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}>
                        Nous créons un écosystème qui permet de briser les barrières à la réussite entrepreneuriale : l’accès au financement et à une équipe expérimentée.
            <br /> vous pouvez vous inscrire dès maintenant !
          </motion.p>
                    <RegisterButton />
                </div>

                <div className={stl.illustration}>
                    <LoginBoutton />
                </div>

                <div className={stl.clickToscroll}>
                    <Link
                        className={stl.TheLink}
                        to={stl.card3}
                        smooth={true}
                        duration={2000}
                    >
                        <div className={stl.scrolableButton}>
                            <LottieSuperObj objectProps={obj} />
                        </div>
                    </Link>
                </div>
            </nav>
            <main className={stl.mainContent}>
                <h1>Comment on s'y prend ?</h1>
                <div className={stl.cardContainer}>
                    <motion.div className={stl.card1} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <div className={stl.roundCircle}>
                            <FontAwesomeIcon icon={faHandsHelping} />
                        </div>
                        <h3>Notre but</h3>
                        <p>
                            AFREEMSART est une plateforme transformant les entrepreneurs en
                            leaders. En leur donnant une équipe, des connaissances et du cash.
            </p>
                    </motion.div>
                    <div className={stl.card2}>
                        <div className={stl.roundCircle}>
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                        <h3>Booster votre entreprise</h3>
                        <p>
                            Booster votre entreprise : grâce à une procédure en ligne nous sélectionnons les ventures les plus prometteuse qui recevront un financement et un accompagnement.
            </p>
                    </div>

                    <div className={stl.card3}>
                        <div className={stl.roundCircle}>
                            <FontAwesomeIcon icon={faEye} />
                        </div>
                        <h3>Notre vision</h3>
                        <p>
                            Nous croyons que l'inclusion de l’entreprenariat est la clé au développement économique africain.
            </p>
                    </div>

                    <div className={stl.card3}>
                        <div className={stl.roundCircle}>
                            <FontAwesomeIcon icon={faBusinessTime} />
                        </div>
                        <h3>Nous vous encadront</h3>
                        <p>
                            Faites-vous encadrer pour la présentation de votre projet. Nous
                            vous aidons à pitcher les investisseurs de la manière la plus
                            efficace possible.
            </p>
                    </div>

                    <div className={stl.card3}>
                        <div className={stl.roundCircle}>
                            <FontAwesomeIcon icon={faMoneyBillWave} />
                        </div>
                        <h3>Nous finanssont voter projet</h3>
                        <p>
                            Nous assuront votre lever de fond en vous donnant du cash pour
                            vous permetre de vous placer en avant de la concuransse.
            </p>
                    </div>

                    <div className={stl.card3}>
                        <div className={stl.roundCircle}>
                            <FontAwesomeIcon icon={faRocket} />
                        </div>
                        <h3>Bref</h3>
                        <p>
                            Nous vous aidont a realiser votre projet et faisont de vous un
                            leader a la hauteur des attentes en vous parenant jusqu'a maturite
                            de votre entreprise, donc a vous de jouer!
            </p>
                    </div>
                </div>

                <section className={stl.registerSection}>
                    <div className={stl.registerIllustration}></div>
                    <h3>Enregistrez-vous a notre programme !</h3>
                    {/* <div className={stl.registerButton}>
            Enregistrez-vous
          </div> */}
                    <ButtonReg />
                    <div className={stl.leftSideIllustration}></div>

                    <div className={stl.rightSideIllustration}></div>
                </section>
            </main>

            <div className={stl.About}>
                <h1>Qui sommes-nous ?</h1>
                <p>
                    AFREEMSART est une holding de gestion, d’investissement et création
                    d’entreprises de qualité. Encadrer par une équipe de serials
                    entrepreneurs, de chef d’entreprise et des spécialistes
                    multidisciplinaire en stratégie. Nous somme une usine de start-up
                    structurées, créatives et rentables. Grâce à une procédure
                    industrialisée AFREEMSART investit en capital et en humain dans ces
                    sociétés. La première étape est de sélectionner les ventures les plus
                    prometteuses pouvant également servir de tremplin à l’une de ses
                    filiales, la seconde est de les amener à un proof of business et la
                    dernière est d’amorcer la phase de croissance « scaler »
        </p>
            </div>
        </div>
    );
}
