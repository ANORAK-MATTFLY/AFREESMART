import stl from '../../styles/landing-page.module.scss';
import Link from 'next/link';

const ButtonReg = () => {
    return (
        <div>
            <Link href='/registration'>
                <a>
                    <div className={stl.registerButton}>
                        Enregistrez-vous
          </div>
                </a>
            </Link>
        </div>
    );
}

export default ButtonReg;