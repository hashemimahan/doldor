import React from 'react';
import { FaPlus } from "react-icons/fa";

const SalesStatus = () => {
    return (
        <div className={"bg-doldor_orange flex flex-col justify-center text-center gap-2 font-iranYekan font-bold text-lg"}>
            <p>وضعیت فروش آنلاین</p>
            <hr />
            <p className={"flex flex-row-reverse justify-center items-center gap-2"}>
                <span>قطع</span>
                <FaPlus className={"rotate-45"}/>
            </p>
        </div>
    );
};

export default SalesStatus;