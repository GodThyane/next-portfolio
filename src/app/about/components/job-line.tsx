import React from 'react';

const JobLineComponent = () => {
    return (
        <div className="hidden sm:w-1/9 sm:flex">
            {/*LICE*/}
            <div className="w-1 h-full bg-gray-600 rounded relative">
                {/*LICE CIRCLE*/}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
        </div>
    );
};

export default JobLineComponent;
