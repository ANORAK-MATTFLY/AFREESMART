import { useRouter } from 'next/router';
import stl from '../../styles/questionForm.module.scss'

const GobackBtn = () => {
    const router = useRouter();
    return (
        <div>
            <div onClick={() => { router.back() }} className={stl.goBackBtn}>Retour</div>
        </div>
    );
}

export default GobackBtn;