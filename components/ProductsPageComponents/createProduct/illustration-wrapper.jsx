import Image from 'next/image';
import React from 'react';
import Pic from '@/public/img/todo.png'

const IllustrationWrapper = () => {
    return (
        <div className='grid place-items-center justify-end' dir='rtl'>
            <Image src={Pic} alt='Illustration' width={"100px"} height={"100px"} className='justify-self-start'/>
        </div>
    );
};

export default IllustrationWrapper;