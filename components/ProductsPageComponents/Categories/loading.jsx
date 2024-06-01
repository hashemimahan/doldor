import React from 'react';
import Button from '../Header/button';
import { TbLoaderQuarter } from 'react-icons/tb';

const Loading = () => {
    return (

          <>
                {[...Array(5).keys()].map(item => (
                    <Button key={crypto.randomUUID()} className={"rounded-lg bg-transparent text-gray-900 border-b-2 cursor-pointer border-b-rose-700 shadow-[0px_2px_5px_0px_#00000050] grid place-content-center px-4 py-2 common"}>
                    <TbLoaderQuarter className='animate-spin' style={{
                        animationDelay: item * (-0.25) + "s",
                    }} size={"2rem"}/>
                    </Button>
                ))}
          </>
    );
};

export default Loading;