import { useState } from "react";
import stl from "../styles/form.module.scss";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import GobackBtn from "../components/buttons/go_back_btn";




export default function Registration() {
    const [loginInfo, setLoginInfo] = useState();
    const [submitting, setSubmitting] = useState(false);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        setSubmitting(true);
        console.log(data);
        setSubmitting(false);

    }
    return (
        <div className={stl.container}>
            <motion.form
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className={stl.form}
                onSubmit={handleSubmit(onSubmit)}
            >

                <div>
                    <GobackBtn />
                    <h2>Veuillez prendre soins de remplire ce fomulair</h2>
                    <label className={stl.label} htmlFor="company">
                        Nom de l'entreprise
            </label>
                    <input
                        className={stl.input}
                        type="text"
                        name="company"
                        placeholder="Entreprise"
                        id="company"
                        ref={register({ required: true, pattern: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/ })}
                    />
                    {errors.company && errors.company.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
                    {errors.company && errors.company.type == "pattern" && <p>Veulliez verifier format de votre nom</p>}
                </div>
                <div>
                    <label className={stl.label} htmlFor="project">
                        Nom du projet
          </label>
                    <input
                        className={stl.input}
                        type="text"
                        name="project"
                        placeholder="Nom du projet"
                        id="projet"
                        ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                    />
                    {errors.project && errors.project.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
                    {errors.project && errors.project.type == "pattern" && <p>Le format de l'adresse enter est invalide</p>}
                </div>
                <div>
                    <label className={stl.label} htmlFor="password">
                        Decrivez votre projet en quelques mots
          </label>
                    <textarea className={stl.bigField} rows="10" cols="40"></textarea>
                    {errors.password && errors.password.type === "required" && <p>Ce champ ne peut pas etre vide</p>}
                    {errors.password && errors.password.type === "pattern" && <p>Votre mot de passe doit avoir au moins 8 charactaires une lettre et un nombre</p>}
                </div>
                <section>
                    <div>
                        <div>
                            <label className={stl.label} htmlFor="employeesNumber">
                                Est-vous enregistré au guichet unique ?
          </label>
                        </div>
                        <select className={stl.select}>
                            <option>1-15</option>
                            <option>15-30</option>
                            <option>30-50</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label className={stl.label} htmlFor="passwordConfirm">
                                votre equipes est-elle basé dans un ou plusieurs pays africain ?
          </label>
                        </div>
                        <select className={stl.select}>
                            <option>Oui</option>
                            <option>non</option>
                            <option>Pas-encore</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label className={stl.label} htmlFor="passwordConfirm">
                                Avez-vous des membres dans votre equipe aillant une nationalité africaine ?
          </label>
                        </div>
                        <select className={stl.select}>
                            <option>Oui</option>
                            <option>non</option>
                            <option>Peut-etre</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label className={stl.label} htmlFor="passwordConfirm">
                                La société est formellement enregistré au guichet unique
          </label>
                        </div>
                        <select className={stl.select}>
                            <option>Oui</option>
                            <option>non</option>
                            <option>Peut-etre</option>
                        </select>
                    </div>
                </section>



                <br />

                <br />
                <button type="submit" disabled={submitting} className={stl.btn}>submit</button>
            </motion.form>
        </div>
    );
}
