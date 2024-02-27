import React from 'react';
// Import "moment/locale/es"
import "moment/locale/es";
// Import moment
import moment from "moment";

export interface JobProps {
    title: string;
    description: string;
    dateInit: Date;
    dateFinish?: Date;
    company?: string;
}

const JobComponent = ({jobProps}: { jobProps: JobProps }) => {

    const {title, description, dateInit, dateFinish, company} = jobProps;

    const dateInfo = (): string => {
        if (dateFinish) {
            return `${getDuration(dateInit)} - ${getDuration(dateFinish)}`;
        }
        return `${getDuration(dateInit)} - Presente`;
    }

    const getDuration = (date: Date): string => {
        const dateMoment = moment(date);
        return dateMoment.format("MMM YYYY");
    }

    return (

        <div className="w-1/2 sm:w-1/3">
            {/*JOB TITLE*/}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                {title.toUpperCase()}
            </div>
            {/*JOB DESCRIPTION*/}
            <div className="p-3 text-sm italic">
                {description}
            </div>
            {/*JOB DATE*/}
            <div className="p-3 text-red-400 text-sm font-semibold">
                {dateInfo()}
            </div>
            {/*JOB COMPANY*/}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                {company}
            </div>
        </div>
    );
};

export default JobComponent;
