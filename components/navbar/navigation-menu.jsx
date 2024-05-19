import React from 'react';
import NavigationItems from "@/components/navbar/navigation-items";

const items = [
    {
        name: "مدیریت",
        link: "/admin"
    },
    {
        name: "دریافت و انتقال",
        link: "/import"
    },
    {
        name: "کالاها",
        link: "/products"
    },
    {
        name: "آنلاین",
        link: "/online"
    },
    {
        name: "صندوق",
        link: "/receipt"
    },
    {
        name: "پیک",
        link: "/peike"
    },
]
const NavigationMenu = () => {
    return (
        <nav className={"w-full h-[6rem] bg-doldor_orange flex justify-end font-iranYekan font-bold"}>
            <ul className={"w-auto h-full flex flex-row-reverse flex-nowrap gap-8"}>
                {items.map((item, index) => {
                    return <NavigationItems key={index} link={item.link}>{item.name}</NavigationItems>
                })}
            </ul>
        </nav>
    );
};

export default NavigationMenu;