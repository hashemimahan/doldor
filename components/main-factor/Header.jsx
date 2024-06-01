import React from "react";
import { FiSearch } from "react-icons/fi";
import { CiBarcode } from "react-icons/ci";

const Header = () => {
  return (
    <nav className="w-full h-[3rem]">
      <ul className="flex flex-row-reverse font-iranYekan font-bold text-2xl w-full h-full">
        <li className="relative flex flex-row-reverse bg-white justify-stretch items-center border-l-2 pl-1 border-t-[0.1rem] border-t-slate-300">
          <input type="text" className="bg-transparent border-none outline-none pl-1 w-[40rem]"/>
          <FiSearch size={"2rem"} />
        <CiBarcode size={"2rem"} className={"absolute right-0 mr-2"}/>
        </li>
        {/*<li className="flex flex-row-reverse bg-white justify-center items-center border-l-2 flex-grow">
          <p className="text-center">کیبورد</p>
        </li>
        <li className="flex flex-row-reverse bg-white justify-center items-center border-l-2 flex-grow">
          <p className="text-center">درصد تخفیف</p>
        </li>
        <li className="flex flex-row-reverse bg-white justify-center items-center flex-grow">
          <p className="text-center">تخفیف مبلغی</p>
        </li>*/}
      </ul>
    </nav>
  );
};

export default Header;
