import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import stl from "../styles/form.module.scss";
import { motion } from "framer-motion";
import GobackBtn from '../components/buttons/go_back_btn'

export default function Home() {
  return (
    <div className={stl.container}>
      <motion.form
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className={stl.form}
      >
        <div>
          <label className={stl.label} htmlFor="name">
            Email
          </label>
          <input
            className={stl.input}
            type="text"
            name="email"
            placeholder="Email"
            id="email"
          />
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
          />
        </div>
        <div>
          <button className={stl.btn} type="submit">
            Connexion
          </button>
        </div>
        <div>
          <label className={stl.terms} className={stl.label} htmlFor="name">
            Terms
          </label>
          <input type="checkbox" name="terms" id="terms" />
        </div>
      </motion.form>
      <GobackBtn />
    </div>
  );
}
