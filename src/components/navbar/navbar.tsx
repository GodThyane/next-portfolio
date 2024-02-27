"use client"

import React, {useState} from 'react';
import Link from "next/link";
import Menu from "@/components/navbar/menu";
import Image from "next/image";
import Navlink from "@/components/navbar/navlink";

const links = [
    {url: "/", label: "Inicio"},
    {url: "/about", label: "Sobre mi"},
    {url: "/portfolio", label: "Portafolio"},
    {url: "/contact", label: "Contacto"},
]

const socialNetworks = [
    {url: "/github.png", label: "Github", link: "https://github.com/GodThyane"},
    {
        url: "/linkedin.png",
        label: "Linkedin",
        link: "https://www.linkedin.com/in/jos%C3%A9-ismael-daza-d%C3%ADaz-5b8257215"
    },
    {url: "/facebook.png", label: "Facebook", link: "https://www.facebook.com/josedaza.diaz14"},
    {url: "/instagram.png", label: "Instagram", link: "https://www.instagram.com/_isma__el_"}]


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const changeOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
            {/*LINK*/}
            <div className="hidden md:flex gap-4">
                {links.map(link => (
                    <Navlink key={link.label} link={link}/>
                ))}
            </div>
            {/*LOGO*/}
            <div className="md:hidden lg:flex">
                <Link href="/"
                      className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">José</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.dev</span>
                </Link>
            </div>
            {/*SOCIAL NETWORKS*/}
            <div className="hidden md:flex gap-4">
                {socialNetworks.map((social) => (
                    <Link href={social.link} key={social.label} target="_blank">
                        <Image src={social.url} alt={social.label} width={24} height={24}/>
                    </Link>))
                }
            </div>
            {/*RESPONSIVE MENU*/}
            <Menu links={links} open={open} changeOpen={changeOpen}/>
        </div>
    );
};

export default Navbar;
