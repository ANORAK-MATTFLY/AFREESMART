import { useState } from 'react';
import { useForm } from "react-hook-form";
import stl from "../../styles/questionForm.module.scss";
import { useRouter } from 'next/router';
import updateToHasAfricans from '../../lib/updateToHasAfricans';
import MainLayout from '../../components/questionsLayout/layout';
import { motion } from "framer-motion";
import GobackBtn from "../../components/buttons/go_back_btn";


const Question6 = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setSubmitting(true);
        updateToHasAfricans(data.nationality);
        router.push('./Q7');
        setSubmitting(false);
    }
    return (
        <MainLayout>
            <motion.form
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className={stl.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <GobackBtn />
                <div>
                    <div>
                        <label className={stl.label} htmlFor="nationality">
                            Avez-vous des membres dans votre équipe aillant une nationalité africaine ?
                </label>
                    </div>
                    <select name="nationality" ref={register({ required: true })} className={stl.select}>
                        <option value={false} selected disabled hidden>
                            Faites un choix
                            </option>
                        <option value={true}>Oui</option>
                        <option value={false}>non</option>
                        <option value={false}>Pas encore</option>
                    </select>
                </div>
                <button type="submit" disabled={submitting} className={stl.btn}>Suivant</button>
            </motion.form>
        </MainLayout>
    );
}

export default Question6;
