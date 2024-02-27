"use client"

import React, {useMemo} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

interface NavLinkProps {
    link: {
        label: string;
        url: string
    }
}

const NavLink = ({link}: NavLinkProps) => {

    const pathName = usePathname();

    const active = useMemo(() => {
        return pathName === link.url && "bg-black text-white"
    }, [link.url, pathName]);

    return (
        <Link className={`rounded p-1 ${active}`}
              href={link.url}>{link.label}</Link>
    );
};

export default NavLink;
