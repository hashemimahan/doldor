'use client';
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavigationItems = ({ children, link }) => {
    const pathName = usePathname();
    return (
        <li className={`${pathName.startsWith(link) ? "text-doldor_text" : "text-white"} font-black font-iranYekan text-xl px-16 text-center content-center cursor-pointer active:text-doldor_text hover:text-doldor_text focus:text-doldor_text focus-within:text-doldor_text focus-visible:text-doldor_text`}>
            <Link href={link}>{children}</Link>
        </li>
    );
};

export default NavigationItems;