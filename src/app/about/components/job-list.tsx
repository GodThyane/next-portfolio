"use client"

import React from 'react';
import JobComponent, {JobProps} from "@/app/about/components/job";
import JobLineComponent from "@/app/about/components/job-line";
import {motion} from 'framer-motion';

export interface JobListComponentProps {
    jobs: JobProps[],
    refInView: boolean
}

const JobListComponent = ({jobs, refInView}: JobListComponentProps) => {

    const isPar = (index: number) => {
        return index % 2 === 0;
    }

    return (
        <motion.div
            initial={{x: "-350px"}}
            animate={refInView ? {x: 0} : {}}
            className="">
            {jobs.map((job, index) => {
                return (
                    <div key={`${job.company}-${job.title}`} className="flex justify-between pb-14 sm:pb-0 sm:h-48">
                        {/*LEFT*/}
                        {isPar(index) ? (<JobComponent jobProps={job}/>) : (<div className="w-1/2 sm:w-1/3"/>)}
                        {/*CENTER*/}
                        <JobLineComponent/>
                        {/*RIGHT*/}
                        {!isPar(index) ? (<JobComponent jobProps={job}/>) : (<div className="w-1/2 sm:w-1/3" />)}
                    </div>
                )
            })}
        </motion.div>
    );
};

export default JobListComponent;
