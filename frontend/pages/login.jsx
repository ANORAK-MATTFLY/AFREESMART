import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import stl from "../styles/login.module.scss";
import { motion } from "framer-motion";
import btn from '../styles/questionForm.module.scss';
import loginRequest from '../lib/loginRequest';
import { useRouter } from 'next/router'
import Link from 'next/link';


export default function Home() {
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async userInfo => {
    await setSubmitting(true);
    await loginRequest(userInfo.email, userInfo.password);
    await setSubmitting(false);

    await loginRequest(userInfo.email, userInfo.password);
    await router.push('./loginrouter');

  }
  return (
    <div className={stl.container}>
      <motion.form
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className={stl.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Link href={'/'}>
            <div className={btn.goBackBtn}>Retour</div>
          </Link>

          <label className={stl.label} htmlFor="name">
            Email
          </label>
          <input
            className={stl.input}
            type="text"
            name="email"
            placeholder="email"
            id="email"
            ref={register({ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
          />
          {errors.email && errors.email.type == "required" && <p>Ce champ ne peut pas etre vide</p>}
          {errors.email && errors.email.type == "pattern" && <p>Le format de l'adresse enter est invalide</p>}
        </div>
        <div>
          <label className={stl.label} htmlFor="name">
            Password
          </label>
          <input
            className={stl.input}
            type="text"
            name="password"
            placeholder="Password"
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
          <button type="submit" disabled={submitting} className={stl.btn}>Conexion</button>
        </div>
      </motion.form>

    </div>
  );
}
