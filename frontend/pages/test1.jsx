import {useEffect, useState, useMemo} from 'react';
import {useQuery} from 'react-query';
import {Link} from 'next/link';
import { useForm } from "react-hook-form";
import stl from "../styles/prjsub.module.scss";
import Q from '../lib/questionList.jsx';
import MainLayout from '../components/questionsLayout/layout.jsx';
import { motion } from "framer-motion";
import GobackBtn from "../components/buttons/go_back_btn";


const QuestionsIndex = ()=>{
	const [loginInfo, setLoginInfo] = useState();
	const [submitting, setSubmitting] = useState(false);
	const { register, handleSubmit, watch, errors } = useForm();
	const onSubmit = data => {
			setSubmitting(true);
			console.log(data);
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
					<button type="submit" disabled={submitting} className={stl.btn}>submit</button>
			</motion.form>
		</MainLayout>
	);
}

export default QuestionsIndex;
