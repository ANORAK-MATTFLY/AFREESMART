import Link from 'next/link';
import { useRouter } from 'next/router';
import stl from '../../styles/client.homepage.module.scss';

const HomePageLayout = ({ children }) => {
    const router = useRouter();
    const handelSubmit = () => {
        router.push('/login')
    }
    return (
        <div className={stl.container}>
            <div className={stl.sideBar}>
                <div className={stl.logoSection}></div>
                <div className={stl.homePageLinks}>
                    <Link href={'/home'}>
                        <div className={stl.linkWrapper}><p>Management</p></div>
                    </Link>
                    <div className={stl.linkWrapper}>
                        <Link href={'/home/mindset'}>
                            <a>
                                <p>Mindset</p>
                            </a>
                        </Link>
                    </div>
                    <div className={stl.linkWrapper}>
                        <Link href={'/home/mindbusiness'}>
                            <a>
                                <p>Mind Business</p>
                            </a>
                        </Link>
                    </div>
                    <div className={stl.linkWrapper}>
                        <Link href={'/home/moneymaker'}>
                            <a>
                                <p>Money Maker</p>
                            </a>
                        </Link>
                    </div>
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