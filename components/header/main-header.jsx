import React from 'react';
import Profile from "@/components/profile-pic/profile";
import SalesStatus from "@/components/Sales status/sales-status";
import DClock from "@/components/clock/d-clock";
import Calendar from "@/components/calendar/calendar";

const MainHeader = () => {
    return (
        <section className={"w-full h-[6rem] bg-teal-300 grid grid-cols-6"} dir={"rtl"}>
            <Profile post={"مدیر"} name={"سیامک پاداش"}/>
            <h1 className={"font-black text-4xl col-span-2 text-left self-center pl-8"}>Doldor</h1>
            <SalesStatus />
            <DClock />
            <Calendar />
        </section>
    );
};

export default MainHeader;