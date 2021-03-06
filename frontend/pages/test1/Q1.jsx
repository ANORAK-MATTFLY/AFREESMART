import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from "../../styles/questionForm.module.scss";
import addProjectName from '../../lib/addProjectName'
import MainLayout from '../../components/questionsLayout/layout';
import { motion } from "framer-motion";
import GobackBtn from "../../components/buttons/go_back_btn";


const Question1 = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setSubmitting(true);
        addProjectName(data.projectName)
        if (addProjectName) {
            router.push(`./company`)
        }
        setSubmitting(false);
    }
    return (
        <MainLayout>
            <div className={stl.progressBar}>
                <div className={stl.liquid1}></div>
            </div>
            <motion.form
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={stl.form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={stl.formLeftSide}>
                    <GobackBtn />
                </div>
                <div className={stl.formRightSide}>
                    <label className={stl.label} htmlFor="projectName">
                        Quel est le nom de votre projet ?
					</label>
                    <input
                        className={stl.input}
                        type="text"
                        name="projectName"
                        placeholder="Nom du projet"
                        id="projectName"
                        ref={register({ required: true })}
                    />
                    {errors.projectName && errors.projectName.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
                    {errors.projectName && errors.projectName.type == "pattern" && <p>Le format de l'adresse enter est invalide</p>}
                    <button type="submit" disabled={submitting} className={stl.btn}>Suivant</button>
                </div>
            </motion.form>
        </MainLayout>
    );
}

export default Question1;
