import { useRouter } from 'next/router';
import stl from '../../styles/details.page.module.scss';
import GobackBtn from '../../components/buttons/go_back_btn';

const projectDetails = () => {
    const router = useRouter();
    const data = router.query;
    console.log(data)
    return (
        <div className={stl.container}>
            <div className={stl.detailBox}>
                <GobackBtn />
                <h1>
                    {data.projectsName}
                </h1>
                <p>{data.projectDescription}</p>
                <div className={stl.deadLine}>
                    Echeance: 12/7/2021
                </div>
                <div className={stl.btsSection}>
                    <div className={stl.btn}>Suprimer</div>
                </div>
            </div>
        </div>
    );
}

export default projectDetails;