import { useState } from "react";
import stl from "../../styles/prjsub.module.scss";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";


export default function MainLayout({children}) {
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
            {children}
        </div>
    );
}
