import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import stl from "../../styles/questionForm.module.scss";
import updateToIsRegistredCompany from '../../lib/updateToIsRegistredCompany'
import MainLayout from '../../components/questionsLayout/layout';
import { motion } from "framer-motion";
import GobackBtn from "../../components/buttons/go_back_btn";


const Question4 = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        setSubmitting(true);
        updateToIsRegistredCompany(data.select1);
        router.push('./Q5');
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
                        <label className={stl.label} htmlFor="select1">
                            Êtes-vous enregistré au guichet unique ?
                </label>
                    </div>
                    <select ref={register({ required: "Faites un choix" })} name="select1" className={stl.select}>
                        <option value={false} selected disabled hidden>
                            Faites un choix
                    </option>
                        <option value={true}>Oui</option>
                        <option value={false}>Nom</option>
                        <option value={false}>Pas encore</option>
                    </select>
                    {errors.select1 && errors.select1.type === "required" && <p>Ce champ ne peut pas etre vide</p>}
                </div>
                <button type="submit" disabled={submitting} className={stl.btn}>Suivant</button>
            </motion.form>
        </MainLayout>
    );
}

export default Question4;
