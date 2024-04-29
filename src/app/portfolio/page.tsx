"use client"

import MainTransition from '@/components/transition/mainTransition';
import React, {useRef} from 'react';
import {motion, useScroll, useTransform} from "framer-motion";
import WorkListComponent from "@/app/portfolio/components/work-list";
import Link from 'next/link';

export interface WorkProps {
    id: number,
    color: string,
    title: string,
    description: string,
    img: string,
    link: string,
    demo: boolean
    technologies?: string[]
    techBgColor?: string
}

const works: WorkProps[] = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        description: "Aplicación web para la gestión de tareas, con la posibilidad de crear tableros y tarjetas. Utiliza autenticación con Clerk y pagos con Stripe.",
        img: "/Trellis.png",
        link: "https://next14-trellis.vercel.app",
        title: "Trellis",
        demo: true,
        technologies: ['NextJs', 'Clerk', 'Tailwind', 'Stripe', 'Drag & Drop'],
        techBgColor: "bg-red-300/50"
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        description: "Aplicación web para el registro de entradas de plantas, con la posibilidad de ver las entradas de otros usuarios. Utiliza generación estática y SSR.",
        img: "/goma-entries.png",
        link: "https://goma-entries.vercel.app",
        title: "Goma Entries",
        demo: true,
        technologies: ['NextJs', 'ContentFul', 'Firestore'],
        techBgColor: "bg-blue-300/50"
    },
    {
        id: 3,
        color: "from-violet-300 to-blue-300",
        description: "Pokedex con generación estática, utilizando la API de Pokemon. Se puede ver la información de los primeros 150 pokemon y añadir a favoritos.",
        img: "/pokedex-static.png",
        link: "https://pokemon-static-ashy-nine.vercel.app",
        title: "Pokedex Static",
        demo: true,
        technologies: ['NextJs', 'Pokemon API'],
        techBgColor: "bg-violet-300/50"

    }, {
        id: 4,
        color: "from-blue-300 to-red-300",
        description: "Aplicación para gestionar fiestas y eventos, cuenta con un sistema de suscripción y pagos. Utiliza Angular.",
        img: "/FarrApp.png",
        link: "https://github.com/GodThyane/farrapp-front",
        title: "FarrApp",
        demo: false,
        technologies: ['Angular', 'Bootstrap'],
        techBgColor: "bg-blue-300/50"
    }
]

const PortfolioPage = () => {

    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({target: ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <MainTransition>
            <div className="h-[600vh] relative" ref={ref}>
                <div
                    className=" w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-4xl sm:text-6xl lg:text-8xl text-center">
                    Mi Trabajo
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <WorkListComponent works={works} x={x}/>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-4xl sm:text-6xl lg:text-8xl">¿Quieres trabajar conmigo?</h1>
                <div className="relative">
                    <motion.svg animate={{rotate: 360}} transition={{duration: 8, ease: "linear", repeat: Infinity}}
                                viewBox="0 0 300 300"
                                className="w-64 h-64 md:w-[500px] md:h-[500px]">
                        <defs>
                            <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">Desarrollador Frontend y Backend
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        className="w-20 h-20 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-xs md:text-lg"
                        href="/contact">Contrátame</Link>
                </div>
            </div>
        </MainTransition>
    );
};

export default PortfolioPage;
