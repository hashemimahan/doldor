import React from "react";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <nav className="w-full h-full">
      <ul className="flex flex-row-reverse font-iranYekan font-bold text-2xl w-full h-full">
        <li className="flex flex-row-reverse bg-white justify-stretch items-center border-l-2 pl-1">
          <input type="text" className="bg-transparent border-none outline-none pl-1"/>
          <FiSearch size={"2rem"} />
        </li>
        <li className="flex flex-row-reverse bg-white justify-center items-center border-l-2 flex-grow">
          <p className="text-center">کیبورد</p>
        </li>
        <li className="flex flex-row-reverse bg-white justify-center items-center border-l-2 flex-grow">
          <p className="text-center">درصد تخفیف</p>
        </li>
        <li className="flex flex-row-reverse bg-white justify-center items-center border-l-2 flex-grow">
          <p className="text-center">تخفیف مبلغی</p>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
