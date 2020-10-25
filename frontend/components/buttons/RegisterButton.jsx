import stl from '../../styles/landing-page.module.scss';
import Link from 'next/link'
import { motion } from "framer-motion";

const RegisterButton = () => {
    return (
        <div>
            <Link href='/registration'>
                <a>
                    <motion.div className={stl.loginButton} initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>Enregistrez-vous !</motion.div>
                </a>
            </Link>
        </div>
    );
}

export default RegisterButton;