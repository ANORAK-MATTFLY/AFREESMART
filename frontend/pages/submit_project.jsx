import { useState } from "react";
import stl from "../styles/prjsub.module.scss";
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
                        ref={register({ required: true })}
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
                        id="project"
                        ref={register({ required: true })}
                    />
                    {errors.project && errors.project.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
                    {errors.project && errors.project.type == "pattern" && <p>Le format de l'adresse enter est invalide</p>}
                </div>
                <div>
                    <label className={stl.label} htmlFor="website">
                        Le lien de votre site web
          </label>
                    <input
                        className={stl.input}
                        type="text"
                        name="website"
                        placeholder="Votre site web"
                        id="website"
                        ref={register({ required: true })}
                    />
                    {errors.website && errors.website.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
                    {errors.website && errors.website.type == "pattern" && <p>Le format de l'adresse enter est invalide</p>}
                </div>
                <div>
                    <label className={stl.label} htmlFor="password">
                        Décrivez votre projet en quelques mots
          </label>
                    <textarea className={stl.bigField} name="description" rows="10" cols="40" ref={register({ required: true })}>

                    </textarea>
                    {errors.description && errors.description.type === "required" && <p>Ce champ ne peut pas etre vide</p>}
                    {errors.description && errors.description.type === "pattern" && <p>Votre mot de passe doit avoir au moins 8 charactaires une lettre et un nombre</p>}

                </div>
                <section>
                    <div>
                        <div>
                            <label className={stl.label} htmlFor="employeesNumber">
                                Êtes-vous enregistré au guichet unique ?
          </label>
                        </div>
                        <select name="employeesNumber" ref={register({ required: true })} name="select" className={stl.select}>
                            <option value="none" selected disabled hidden>
                                Faites un choix
                            </option>
                            <option>Oui</option>
                            <option>Nom</option>
                            <option>Pas encore</option>
                        </select>
                        {errors.select && errors.select.type === "required" && <p>Ce champ ne peut pas etre vide</p>}
                        {errors.select && errors.select.type === "pattern" && <p>Votre mot de passe doit avoir au moins 8 charactaires une lettre et un nombre</p>}
                    </div>
                    <div>
                        <div>
                            <label className={stl.label} htmlFor="how_many_africans">
                                Votre entreprise est-elle basée dans un ou plusieurs pays africains ?
          </label>
                        </div>
                        <select name="select_how_many_africans" ref={register({ required: true })} className={stl.select}>
                            <option value="none" selected disabled hidden>
                                Faites un choix
                            </option>
                            <option>Oui</option>
                            <option>non</option>
                            <option>Pas encore</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label className={stl.label} htmlFor="nationality">
                                Avez-vous des membres dans votre équipe aillant une nationalité africaine ?
          </label>
                        </div>
                        <select name="select_nationality" ref={register({ required: true })} className={stl.select}>
                            <option value="none" selected disabled hidden>
                                Faites un choix
                            </option>
                            <option>Oui</option>
                            <option>non</option>
                            <option>Pas encore</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label className={stl.label} htmlFor="profit">
                                Le but de l’entreprise est-il de faire du profit ?
          </label>
                        </div>
                        <select name="select_profit" ref={register({ required: true })} className={stl.select}>
                            <option value="none" selected disabled hidden>
                                Faites un choix
                            </option>
                            <option>Oui</option>
                            <option>non</option>
                            <option>Pas encore</option>
                        </select>
                    </div>
                    <div>
                        <div>
                            <label className={stl.label} htmlFor="simplified">
                                Êtes-vous une société par actions simplifiée ?
          </label>
                        </div>
                        <select name="select_simplified" ref={register({ required: true })} className={stl.select}>
                            <option value="none" selected disabled hidden>
                                Faites un choix
                            </option>
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
