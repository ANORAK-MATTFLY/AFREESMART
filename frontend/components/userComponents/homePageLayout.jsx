import Link from 'next/link';
import stl from '../../styles/client.homepage.module.scss';


const HomePageLayout = ({ children }) => {
    return (
        <div className={stl.container}>
            <div className={stl.sideBar}>
                <div className={stl.logoSection}></div>
                <div className={stl.homePageLinks}>
                    <div className={stl.linkWrapper}><p>Management</p></div>
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
                    <button className={stl.btn}>Deconexion</button>
                </div>
                {children}
            </div>
        </div>
    );
}

export default HomePageLayout;