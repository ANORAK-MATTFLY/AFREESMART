import Link from "next/link";
import stl from '../../styles/form.module.scss'

const GobackBtn = () => {
    return (
        <>
            <Link href="/">
                <a>
                    <div className={stl.goBackBtn}>Retour</div>
                </a>
            </Link>
        </>
    );
}

export default GobackBtn;