"use client"

import {motion} from 'framer-motion';
import React from 'react';

const MainTransition = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
            {children}
        </motion.div>
    );
};

export default MainTransition;
