import React from 'react';
import { FaPlus } from "react-icons/fa";

const SalesStatus = () => {
    return (
        <div className={"bg-white text-doldor_text my-4 flex flex-col justify-center text-center gap-2 font-iranYekan font-bold text-lg"}>
            <p>وضعیت فروش آنلاین</p>
            <hr />
            <p className={"flex flex-row-reverse justify-center items-center gap-2 text-doldor_orange"}>
                <span>قطع</span>
                <FaPlus className={"rotate-45"}/>
            </p>
        </div>
    );
};

export default SalesStatus;