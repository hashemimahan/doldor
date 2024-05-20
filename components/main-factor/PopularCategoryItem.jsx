"use client"
import React from 'react';

const PopularCategoryItem = ({name}) => {
    return (
        <div className={'text-2xl font-bold font-iranYekanRegular bg-slate-700 text-white rounded-lg border p-2 cursor-pointer'}>{name || "hi"}</div>
    );
};

export default PopularCategoryItem;