'use client'
import React, {useEffect, useState} from 'react';

const Clock = () => {
    let options = { hour: '2-digit', minute: '2-digit' };
    const options2 = {
        // weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    };
    let date = new Date().toLocaleDateString('fa-IR', options2);
    let date2 = new Date().toLocaleDateString('en-US', options2);
    let time = new Date().toLocaleTimeString('fa-IR', options);
    const [currentTime, setCurrentTime] = useState(time);
    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date().toLocaleTimeString('fa-IR', options));
        }
        let timeInterval = setInterval(updateTime, 1000)
        return () => clearInterval(timeInterval);
    }, [options]);
    return (
        <>
            <h1 className={"text-4xl font-iranYekan"}>{currentTime}</h1>
            <h2 className={"text-4xl font-iranYekan"}>{date}</h2>
            <h2 className={"text-4xl font-iranYekan"}>{date2}</h2>
        </>
    );
};

export default Clock;