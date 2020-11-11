import stl from '../../styles/landing-page.module.scss';
import Link from 'next/link'

const LoginBoutton = () => {
    return (
        <div>
            <Link href='/'>
                <a>
                    <div className={stl.loginButton}> Deconnexion</div>
                </a>
            </Link>
        </div>
    );
}

export default LoginBoutton;