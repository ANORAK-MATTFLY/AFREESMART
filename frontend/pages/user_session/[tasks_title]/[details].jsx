import { useRouter } from 'next/router';
import stl from '../../../styles/details.page.module.scss';
import GobackBtn from '../../../components/buttons/go_back_btn';


const Details = () => {
    const router = useRouter();
    const data = router.query;
    console.log(data)
    return (
        <div className={stl.container}>
            <div className={stl.detailBox}>
                <GobackBtn />
                <h1>
                    {data.tasks_title}
                </h1>
                <p>{data.details}</p>
                <div className={stl.deadLine}>
                    Echeance: 12/7/2021
                </div>
                <div className={stl.btsSection}>
                    <button className={stl.btn}><a href={`mailto:benmatanda354@gmail.com?subject=Documents de l'entreprise`}>Envoyer</a></button>
                    <div className={stl.btn}>Valider</div>
                </div>


            </div>
        </div >
    );
}

export default Details;