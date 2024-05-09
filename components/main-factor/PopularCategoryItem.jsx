import React from 'react';

const PopularCategoryItem = ({name}) => {
    return (
        <div className='text-2xl font-bold font-iranYekanRegular text-rose-700 border p-2'>{name}</div>
    );
};

export default PopularCategoryItem;