'use client'
import React, {useState} from 'react';
import Image from "next/image";
import PhotoOne from "@/public/icons/icon-menu.svg"
import SearchIcon from "@/public/icons/search2.svg"
import BasketShopping from "@/public/icons/basket-shopping.svg"
import Link from "next/link";
import NavigationMenu from "@/components/Menu/navigation-menu";

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const onMenuToggleChangeHandler = () => {
        setToggleMenu(prevState => !prevState);
    }
    return (
        <header className={`${!!toggleMenu && "x"} w-full bg-amber-100 flex flex-row-reverse justify-between items-center h-[6.2rem] overflow-clip mt-[.7rem]`}>
            {toggleMenu && <NavigationMenu onClose={onMenuToggleChangeHandler}/>}
            <div className={"cursor-pointer"} onClick={onMenuToggleChangeHandler}>
                <Image src={PhotoOne} alt={"icon-menu"} width={30} height={30} priority/>
            </div>
            <div>
                <h1 className={"font-strenuous uppercase text-doldor_orange font-semibold text-3xl"}>Doldor</h1>
            </div>
            <div className={"flex flex-row-reverse items-center gap-2"}>
                <div className={"box"}>
                    <Image src={SearchIcon} alt={"searchIcon"} width={30} height={30} priority />
                </div>
                <div className={"p-4 flex flex-row-reverse gap-2 items-center bg-[#FBCFC4] rounded-3xl animation"}>
                    <Link href={"/signup"} className={"signUp font-iranYekan font-bold"}>ورود</Link>
                    <span>|</span>
                    <Link href={"/signup"} className={"signUp font-iranYekan font-bold"}>ثبت نام</Link>
                </div>
                <div className={"box relative"}>
                    <Image src={BasketShopping} alt={"basket-shopping"} width={30} height={30} priority/>
                    <div className={"absolute top-full right-1/2 translate-x-1/2 -translate-y-1/2 bg-green_light text-black w-10 aspect-square rounded-full text-center flex justify-center items-center font-strenuous text-lg"}>0</div>
                </div>
            </div>
        </header>
    );
};

export default Header;