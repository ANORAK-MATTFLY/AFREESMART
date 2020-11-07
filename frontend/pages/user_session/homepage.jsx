import stl from "../../styles/client.homepage.module.scss"
import MainLayout from '../../components/questionsLayout/layout';

const HomePage = () => {
    return (
        <div className={stl.container}>
            <div className={stl.leftSection}>
                <div className={stl.leftHead}>
                    <div className={stl.badge}></div>
                    <div className={stl.badge}></div>
                </div>
                <div className={stl.dropZone}></div>

            </div>
        </div>
    )
}

export default HomePage;