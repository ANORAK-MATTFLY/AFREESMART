import stl from '../../styles/landing-page.module.scss';
import Link from 'next/link'

const LoginBoutton = () => {
    return (
        <div>
            <Link href='/test_queries'>
                <a>
                    <div className={stl.loginButton}> Connexion</div>
                </a>
            </Link>
        </div>
    );
}

export default LoginBoutton;