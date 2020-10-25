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
          <label className={stl.label} htmlFor="name">
            Votre nom
          </label>
          <input
            className={stl.input}
            type="text"
            name="name"
            placeholder="Nom"
            id="name"
            ref={register({ required: true, pattern: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/ })}
          />
          {errors.name && errors.name.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
          {errors.name && errors.name.type == "pattern" && <p>Veulliez verifier format de votre nom</p>}
        </div>
        <div>
          <label className={stl.label} htmlFor="email">
            Email
          </label>
          <input
            className={stl.input}
            type="text"
            name="Email"
            placeholder="Email"
            id="Email"
            ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
          />
          {errors.Email && errors.Email.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
          {errors.Email && errors.Email.type == "pattern" && <p>Le format de l'adresse enter est invalide</p>}
        </div>
        <div>
          <label className={stl.label} htmlFor="password">
            Mot de passe
          </label>
          <input
            className={stl.input}
            type="text"
            name="password"
            placeholder="Mot de passe"
            id="password"
            ref={register({
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            })}
          />
          {errors.password && errors.password.type === "required" && <p>Ce champ ne peut pas etre vide</p>}
          {errors.password && errors.password.type === "pattern" && <p>Votre mot de passe doit avoir au moins 8 charactaires une lettre et un nombre</p>}
        </div>
        <div>
          <label className={stl.label} htmlFor="passwordConfirm">
            Confirmer votre mot de passe
          </label>
          <input
            className={stl.input}
            type="text"
            name="passwordConfirm"
            placeholder="password confirmation"
            id="passwordConfirm"
            ref={register({ required: true, validate: (value) => value === watch('password') })}
          />
          {errors.passwordConfirm && errors.passwordConfirm.type === "pattern" && <p>Votre mot de passe doit avoir au moins 8 charactaires une lettre et un nombre</p>}
          {errors.passwordConfirm && errors.passwordConfirm.type === "validate" && <p>Le mot de passe ne corespond pas</p>}
        </div>
        <button type="submit" disabled={submitting} className={stl.btn}>submit</button>
        {/* <div>
          <div>
            <label className={stl.label} htmlFor="passwordConfirm">
              Question 1
          </label>
          </div>
          <select className={stl.select}>
            <option>Oui</option>
            <option>non</option>
            <option>Peut-etre</option>
          </select>
        </div> */}
        {/* <div>
          <div>
            <label className={stl.label} htmlFor="passwordConfirm">
              Question 2
          </label>
          </div>
          <select className={stl.select}>
            <option>Oui</option>
            <option>non</option>
            <option>Peut-etre</option>
          </select>
        </div> */}
        {/* <div>
          <div>
            <label className={stl.label} htmlFor="passwordConfirm">
              Question 3
          </label>
          </div>
          <select className={stl.select}>
            <option>Oui</option>
            <option>non</option>
            <option>Peut-etre</option>
          </select>
        </div> */}
        {/* <div>
          <div>
            <label className={stl.label} htmlFor="passwordConfirm">
              Question 4
          </label>
          </div>
          <select className={stl.select}>
            <option>Oui</option>
            <option>non</option>
            <option>Peut-etre</option>
          </select>
        </div> */}
      </motion.form>
    </div>
  );
}
