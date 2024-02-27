"use client"

import React, {useRef, useState} from 'react';
import MainTransition from "@/components/transition/mainTransition";
import {motion} from 'framer-motion';
import emailjs from "@emailjs/browser"

const ContactPage = () => {

    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const text = "Contáctame"

    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError(false);
        setSuccess(false);

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || "", process.env.NEXT_PUBLIC_TEMPLATE_ID || "", form.current || "", process.env.NEXT_PUBLIC_PUBLIC_KEY || "")
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
                setError(false)
                form.current?.reset()
            })
            .catch((error) => {
                console.log(error.text);
                setError(true)
                setSuccess(false)
            })
        ;
    }

    return (
        <MainTransition>
            <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/*TEXT CONTAINER*/}
                <div className="h-1/3 sm:h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl">
                    <motion.div className="sm:flex">
                        {text.split("").map((letter, index) => (
                            <motion.span key={index}
                                         initial={{opacity: 1}}
                                         animate={{opacity: 0}}
                                         transition={{duration: 3, repeat: Infinity, delay: index * 0.1}}>
                                {letter}
                            </motion.span>
                        ))}
                        😊
                    </motion.div>
                </div>
                {/*FORM CONTAINER*/}
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="h-2/3 sm:h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-2xs sm:text-xl flex flex-col gap-4 sm:gap-6 md:gap-8 justify-center p-10 sm:p-15 lg:20 xl:p-22 2xl:p-24">
                    <span>José Daza Dev,</span>
                    <textarea rows={6}
                              name="user_message"
                              className="bg-transparent border-b-2 border-b-black outline-none resize-none"/>
                    <span>Mi correo electrónico es:</span>
                    <input type="text" className="bg-transparent border-b-2 border-b-black outline-none"
                           name="user_email"/>
                    <span>Saludos</span>
                    <button className="bg-purple-200 rounded font-semibold text-gray-600 p-2 sm:p-4">Enviar
                    </button>
                    {success &&
                        <span className="text-green-600 font-semibold">Tú mensaje ha sido enviado con éxito!</span>}
                    {error && <span className="text-red-600 font-semibold">Ha ocurrido un error!</span>}
                </form>
            </div>
        </MainTransition>
    );
};

export default ContactPage;
