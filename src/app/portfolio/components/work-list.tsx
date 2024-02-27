"use client"

import React from 'react';
import {WorkProps} from '../page';
import Image from "next/image";
import Link from "next/link";
import {MotionValue, motion} from 'framer-motion';


interface WorkListComponentProps {
    works: WorkProps[],
    x: MotionValue<string>
}

const WorkListComponent = ({works, x}: WorkListComponentProps) => {
    return (
        <motion.div style={{x}} className="flex">
            <div
                className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300">
            </div>
            {works.map((work) => (
                <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${work.color}`}
                     key={work.id}>
                    <div className="flex flex-col gap-8 text-white">
                        <h1 className="text-cl font-bold md:text-4xl lg:text-6xl xl:text-8xl">{work.title}</h1>
                        <div
                            className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                            <Image src={work.img} alt={work.title} fill/>
                        </div>
                        <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">{work.description}</p>
                        <Link href={work.link} className="flex justify-end" target="_blank">
                            <button
                                className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                                {work.demo ? "Ver demo" : "Ver repositorio"}
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </motion.div>
    );
};

export default WorkListComponent;
