import React, {useMemo} from 'react';
import Link from "next/link";
import {motion, Variants} from 'framer-motion';

const Menu = (
    {
        links,
        open,
        changeOpen
    }: Readonly<{
        links: { label: string; url: string }[],
        open: boolean,
        changeOpen: () => void
    }>
) => {

    const topVariants: Variants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }

    const centerVariants: Variants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        }
    }

    const bottomVariants: Variants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255, 255, 255)",
        }
    }

    const listVariants: Variants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
    }

    const listItemVariants: Variants = {
        closed: {
            x: -10,
            opacity: 0
        },
        opened: {
            x: 0,
            opacity: 1
        }
    }

    return (
        <div className="md:hidden">
            {/*MENU BUTTON*/}
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => changeOpen()}>
                <motion.div variants={topVariants} animate={open ? "opened" : "closed"}
                            className="bg-black w-10 h-1 rounded origin-left"></motion.div>
                <motion.div variants={centerVariants} animate={open ? "opened" : "closed"}
                            className="bg-black w-10 h-1 rounded"></motion.div>
                <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"}
                            className="bg-black w-10 h-1 rounded origin-left"></motion.div>
            </button>
            {/*MENU LIST*/}
            {open &&
                <motion.div variants={listVariants} initial="closed" animate="opened"
                            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">

                    {links.map((link) => (
                        <motion.div variants={listItemVariants} key={link.label}>
                            <Link href={link.url}>
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}

                </motion.div>
            }
        </div>
    );
};

export default Menu;
