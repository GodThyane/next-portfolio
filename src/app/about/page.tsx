"use client"

import React, {useRef} from "react";
import MainTransition from "@/components/transition/mainTransition";
import {motion, useInView, useScroll} from "framer-motion";
import {JobProps} from "@/app/about/components/job";
import JobListComponent from "@/app/about/components/job-list";
import Brain from "./components/brain";

const frontendSkills = [
    "Angular", "ReactJs", "NextJs", "TailwindCSS", "Bootstrap", "Material UI"
]

const backendSkills = [
    "NestJs", ".NET Core", "GraphQL", "SQL Server", "NUnit"
]

const learningSkills = [
    "Spring Boot", "Docker", "AWS"]

const tools = [
    "JetBrains", "Git", "Postman", "Azure DevOps"
]

const jobs: JobProps[] = [
    {
        company: "Sophos Solutions - Bancolombia",
        dateInit: new Date("2022-08-15"),
        description: "Soporte a aplicaciones de la entidad financiera",
        title: "Solution Consultant II"
    },
    {
        company: "Automatiza Soluciones - Argos",
        dateInit: new Date("2022-03-03"),
        dateFinish: new Date("2022-08-15"),
        description: "Desarrollo backend de Ingresos Online 2 (Argos)",
        title: "Desarrollador Backend"
    },
    {
        company: "Automatiza Soluciones - Nutresa",
        dateInit: new Date("2021-09-03"),
        dateFinish: new Date("2022-03-03"),
        description: "Desarrollo fullstack de Ingresos Online (Nutresa)",
        title: "Desarrollador Fullstack"
    }
]

const Skill = ({value, skills}: { value: string, skills: string[] }) => {
    return (
        <div>
            <Subtitle value={value}/>
            <div className="grid grid-cols-2 gap-2 2xl:grid-cols-3">
                {
                    skills.map((skill, index) => (
                        <div
                            key={`skill-${index}`}
                            className="text-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                            {skill}
                        </div>
                    ))
                }
                {/*SKILL SCROLL*/}
            </div>
        </div>
    )
}

const Title = ({value}: { value: string }) => {
    return <h1 className="font-bold text-2xl">{value.toUpperCase()}</h1>
}

const TitleAnimated = ({value, refInView}: { value: string, refInView: boolean }) => {
    return <motion.h1
        initial={{x: "-350px"}}
        animate={refInView ? {x: 0} : {}}
        transition={{delay: 0.2}}
        className="font-bold text-2xl"
    >
        {value.toUpperCase()}
    </motion.h1>

}

const Subtitle = ({value}: { value: string }) => {
    return <h2 className="font-bold text-lg text-center pb-2">{value.toUpperCase()}</h2>

}

const Container = ({children}: { children: React.ReactNode }) => {
    return <div className="flex flex-col gap-12 justify-center">
        {children}
    </div>
}

const Scroll = () => {
    return <motion.svg
        initial={{opacity: 0.2, y: 0}}
        animate={{opacity: 1, y: "10px"}}
        transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
    >
        <path
            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
            stroke="#000000"
            strokeWidth="1"
        ></path>
        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
        <path
            d="M15 11L12 14L9 11"
            stroke="#000000"
            strokeWidth="1"
        ></path>
    </motion.svg>
}

const AboutPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        container: containerRef
    });

    const skillRef = useRef<HTMLDivElement>(null);
    const isSkillRefInView = useInView(skillRef, {
        margin: "-100px"
    });

    const experienceRef = useRef<HTMLDivElement>(null);
    const isExperienceRefInView = useInView(experienceRef, {
        margin: "-100px"
    });

    return (
        <MainTransition>
            {/*CONTAINER*/}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/*TEXT CONTAINER*/}
                <div
                    className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
                    {/*BIOGRAPHY CONTAINER*/}
                    <Container>
                        {/*BIOGRAPHY TITLE*/}
                        <Title value="Biografía"></Title>
                        {/*BIOGRAPHY TEXT*/}
                        <p className="text-lg">
                            Soy José Daza Díaz, un apasionado ingeniero de sistemas y computación nacido en San Juan del
                            Cesar. Me gradué en la Universidad Pedagógica y Tecnológica de Colombia en el
                            año 2022. Desde entonces, he dedicado mi carrera a desarrollar soluciones tecnológicas
                            innovadoras y eficientes que impacten positivamente en el mundo. Mi pasión por la tecnología
                            me impulsa a estar en constante aprendizaje y actualización. Me entusiasma explorar nuevas
                            tendencias y herramientas que me permitan mejorar mis habilidades y ofrecer soluciones cada
                            vez más innovadoras. Mi objetivo principal es convertirme en un referente en el campo de la
                            ingeniería de sistemas y computación. Aspiro a utilizar mi conocimiento y experiencia para
                            contribuir al desarrollo de soluciones tecnológicas que beneficien a la sociedad.
                        </p>
                        {/*BIOGRAPHY QUOTE*/}
                        <span className="italic">El aprendizaje no es un destino, es un viaje. Un viaje que dura toda la vida y que nos enriquece con cada paso que damos. Nunca dejes de aprender, nunca dejes de crecer.</span>
                        {/*BIOGRAPHY SCROLL SVG*/}
                        <Scroll/>
                    </Container>
                    {/*SKILLS CONTAINER*/}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        <TitleAnimated value="habilidades" refInView={isSkillRefInView}/>
                        {/*SKILL GRID*/}
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 2xl:gap-12">
                            {/*SKIL FRONTEND*/}
                            <Skill value="Frontend" skills={frontendSkills}/>
                            {/*SKILL BACKEND*/}
                            <Skill value="Backend" skills={backendSkills}/>
                            {/*SKILL LEARNING*/}
                            <Skill value="Aprendiendo" skills={learningSkills}/>
                            {/*SKILL TOOLS*/}
                            <Skill value="Herramientas" skills={tools}/>
                        </div>
                        {/* <motion.div initial={{x: "-350px"}}
                                    animate={isSkillRefInView ? {x: 0} : {}}
                        >
                            <div className="flex gap-4 flex-wrap">
                                {
                                    skills.map((skill, index) => (
                                        <div
                                            key={`skill-${index}`}
                                            className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                            {skill}
                                        </div>
                                    ))
                                }
                                SKILL SCROLL
                            </div>
                        </motion.div>*/}
                        {/*SKILL SCROLL*/}
                        <Scroll/>
                    </div>
                    {/*EXPERIENCE CONTAINER*/}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                        {/*EXPERIENCIE TITLE*/}
                        <TitleAnimated value="experiencia" refInView={isExperienceRefInView}/>
                        {/*EXPERIENCE LIST ITEM*/}
                        <JobListComponent jobs={jobs} refInView={isExperienceRefInView}/>
                    </div>
                </div>
                {/*SVG CONTAINER*/}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
                    <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </MainTransition>
    )
        ;
};

export default AboutPage;
