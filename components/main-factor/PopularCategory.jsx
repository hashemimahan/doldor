import React from 'react';
import PopularCategoryItem from './PopularCategoryItem';

const PopularCategory = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return (
        <div className={"grid grid-cols-2 gap-2"}>
            {data.map(item => {
                return <PopularCategoryItem key={item.id} {...item}/>
            })}
        </div>
    );
};

export default PopularCategory;