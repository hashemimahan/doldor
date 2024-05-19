import React from 'react';

const PopularCategoryItem = ({name, onAdd}) => {
    return (
        <div className={'text-2xl font-bold font-iranYekanRegular bg-doldor_orange text-white rounded-lg border p-2 cursor-pointer'} onClick={() => onAdd()}>{name || "hi"}</div>
    );
};

export default PopularCategoryItem;