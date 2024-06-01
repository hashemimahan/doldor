import React from 'react';

const Stock = () => {
    return (
        <div className='w-full h-full grid grid-cols-3'>
            <p className='common flex flex-col justify-center items-center border-l-[0.1rem] border-l-black'>
                <span>انبار 1</span>
                <span>10</span>
            </p>
            <p className='common flex flex-col justify-center items-center border-l-[0.1rem] border-l-black'>
                <span>انبار 2</span>
                <span>10</span>
            </p>
            <p className='common flex flex-col justify-center items-center'>
                <span>مرکزی</span>
                <span>10</span>
            </p>
        </div>
    );
};

export default Stock;