import React from 'react';
import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
    return (
        <>
            <input type="text" placeholder='کد، نام، بارکد' dir='rtl' className='rounded-lg px-4 focus:outline-none font-iranYekan font-black text-lg border-[0.1rem] border-black/25 focus:border-black/75 transition-all focus:shadow-[0px_0px_105px_45px_rgba(215,216,242,0.9)]'/>
            <BiSearchAlt className='absolute top-1/2 left-4 -translate-y-1/2 pointer-events-none' size={"2rem"}/>
        </>
    );
};

export default Search;