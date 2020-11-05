import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import stl from "../../styles/questionForm.module.scss";
import updateToWebSiteLink from '../../lib/updateToWebSiteLink';
import MainLayout from '../../components/questionsLayout/layout';
import { motion } from "framer-motion";
import GobackBtn from "../../components/buttons/go_back_btn";


const Question3 = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setSubmitting(true);
        updateToWebSiteLink(data.website);
        router.push('./Q4')
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
                    <label className={stl.label} htmlFor="website">
                        Avez-vous un site internet ?
            </label>
                    <input
                        className={stl.input}
                        type="text"
                        name="website"
                        placeholder="Lien du site web"
                        id="website"
                        ref={register({ required: true })}
                    />
                    {errors.website && errors.website.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
                    {errors.website && errors.website.type == "pattern" && <p>Le format de l'adresse enter est invalide</p>}
                </div>
                <button type="submit" disabled={submitting} className={stl.btn}>Suivant</button>
            </motion.form>
        </MainLayout>
    );
}

export default Question3;
