import React from 'react';
import NavigationItems from "@/components/navbar/navigation-items";

const items = [
    {
        name: "مدیریت"
    },
    {
        name: "دریافت و انتقال"
    },
    {
        name: "کالاها"
    },
    {
        name: "آنلاین"
    },
    {
        name: "صندوق"
    },
    {
        name: "پیک"
    },
]
const NavigationMenu = () => {
    return (
        <nav className={"w-full h-[6rem] bg-amber-300 flex justify-end font-iranYekan font-bold"}>
            <ul className={"w-auto h-full flex flex-nowrap gap-8"}>
                {items.reverse().map((item, index) => {
                    return <NavigationItems key={index}>{item.name}</NavigationItems>
                })}
            </ul>
        </nav>
    );
};

export default NavigationMenu;