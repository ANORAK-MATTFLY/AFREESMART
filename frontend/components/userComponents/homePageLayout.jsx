import Link from 'next/link';
import { useRouter } from 'next/router';
import stl from '../../styles/client.homepage.module.scss';

const HomePageLayout = ({ children }) => {
    const router = useRouter();
    const handelSubmit = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('afreesmartAcessToken');
        }
        router.push('/login')
    }
    return (
        <div className={stl.container}>
            <div className={stl.sideBar}>
                <div className={stl.logoSection}></div>

                <div className={stl.homePageLinks}>
                    <Link href={'/home'}>
                        <div className={stl.linkWrapper}><p>Gouvernance</p></div>
                    </Link>
                    <Link href={'/home/mindset'}>
                        <div className={stl.linkWrapper}>
                            <a>
                                <p>Mindset</p>
                            </a>
                        </div>
                    </Link>
                    <Link href={'/home/mindbusiness'}>
                        <div className={stl.linkWrapper}>
                            <a>
                                <p>Mind Business</p>
                            </a>
                        </div>
                    </Link>
                    <Link href={'/home/moneymaker'}>
                        <div className={stl.linkWrapper}>

                            <a>
                                <p>Money Maker</p>
                            </a>

                        </div>
                    </Link>
                </div>
            </div>
            <div className={stl.mainContent}>
                <div className={stl.navBar}>
                    <button className={stl.btn} onClick={() => handelSubmit()}>Deconexion</button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default HomePageLayout;