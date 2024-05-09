'use client'
import React, {useEffect, useState} from 'react';

let options = {
    // weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
};
const Calendar = () => {
    let date = new Date().toLocaleDateString('fa-IR', options);
    let dateEn = new Date().toLocaleDateString('en-US', options);
    const [time, setTime] = useState({
        timeFa: date,
        timeEn: dateEn
    });
    useEffect(() => {
        const updateTime = () => {
            setTime({
                timeFa: new Date().toLocaleDateString('fa-IR', options),
                timeEn: new Date().toLocaleDateString('fa-IR', options)
            })
        }
        const timer = setInterval(updateTime, 3600000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className={"font-iranYekan text-xl font-black grid content-center text-center gap-2"}>
            <p>{time.timeFa}</p>
            <p className={""}>{time.timeEn}</p>
        </div>
    );
};

export default Calendar;