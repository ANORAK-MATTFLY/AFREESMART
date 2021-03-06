import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import stl from "../../styles/questionForm.module.scss";
import updateToCompanyName from '../../lib/updateToCompanyName';
import MainLayout from '../../components/questionsLayout/layout';
import { motion } from "framer-motion";
import GobackBtn from "../../components/buttons/go_back_btn";


const Question2 = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setSubmitting(true);
        updateToCompanyName(data.company);
        router.push('./Q2');
        setSubmitting(false);
    }
    return (
        <MainLayout>
            <div className={stl.progressBar}>
                <div className={stl.liquid2}></div>
            </div>
            <motion.form
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className={stl.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={stl.formLeftSide}>
                    <GobackBtn />
                </div>
                <div className={stl.formRightSide}>
                    <label className={stl.label} htmlFor="company">
                        Que est le nom de votre entreprise ?
                    </label>
                    <input
                        className={stl.input}
                        type="text"
                        name="company"
                        placeholder="Décrivez votre projet"
                        id="company"
                        ref={register({ required: true })}
                    />
                    {errors.company && errors.company.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
                    <button type="submit" disabled={submitting} className={stl.btn}>Suivant</button>
                </div>
            </motion.form>
        </MainLayout>
    );
}

export default Question2;
