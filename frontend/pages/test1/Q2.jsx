import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import stl from "../../styles/questionForm.module.scss";
import updateToProjectDescrption from '../../lib/updateToProjectDescrption'
import MainLayout from '../../components/questionsLayout/layout';
import { motion } from "framer-motion";
import GobackBtn from "../../components/buttons/go_back_btn";


const Question2 = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setSubmitting(true);
        updateToProjectDescrption(data.description);
        router.push('./Q3');
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
                    <label className={stl.label} htmlFor="description">
                        Décrivez votre projet en quelques mots
                    </label>
                    <input
                        className={stl.input}
                        type="text"
                        name="description"
                        placeholder="Décrivez votre projet"
                        id="description"
                        ref={register({ required: true })}
                    />
                    {errors.company && errors.company.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
                </div>
                <button type="submit" disabled={submitting} className={stl.btn}>Suivant</button>
            </motion.form>
        </MainLayout>
    );
}

export default Question2;
