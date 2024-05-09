'use client';
import React, {useEffect, useState} from 'react';

const DClock = () => {
    let options = { hour: '2-digit', minute: '2-digit' };
    let time = new Date().toLocaleTimeString('fa-IR', options);
    let timeDay = new Date().toLocaleString('fa-IR', {
        weekday: 'long'
    });
    const [currentTime, setCurrentTime] = useState(time);
    const [currentDay, setCurrentDay] = useState(time);

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date().toLocaleTimeString('fa-IR', options));
        }
        let timeInterval = setInterval(updateTime, 1000)
        return () => clearInterval(timeInterval);
    }, [options]);
    return (
        <div className={"w-full h-full font-iranYekan text-xl font-black grid content-center text-center gap-2"}>
            <p className={"text-3xl tracking-widest font-black"}>{currentTime}</p>
            <p>{timeDay}</p>
        </div>
    );
};

export default DClock;