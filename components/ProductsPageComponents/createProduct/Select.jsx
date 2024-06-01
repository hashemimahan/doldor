'use client'
import { IoIosArrowDown } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/libs/utils";
import { ACTIONS } from "./create-product-form";

const Select = ({ options, selectName, className, onSelect, selectedItem, name, required }) => {
    const [toggleSelectOptions, setToggleSelectOptions] = useState(false);
    const [bgColor, setBgColor] = useState(null)
    const spanRef = useRef(null)

    const onToggleSelectHandler = () => {
        setToggleSelectOptions(prevState => !prevState)
    }

    useEffect(() => {
        const el = spanRef.current.closest("section");
        const bg = window.getComputedStyle(el).backgroundColor;
        setBgColor(bg);
    }, [])
  return (
    <div className={`w-full bg-transparent border-[1px] border-slate-200 h-12 rounded-md relative common text-slate-200 cursor-pointer ${className} ${required ? "before:content-['_*'] before:absolute before:top-1/2 before:-translate-y-1/3 before:-left-6 before:text-red-900 before:text-4xl" : ""}`} onClick={onToggleSelectHandler}>
        <span ref={spanRef} className={cn("absolute top-1/2 right-4 -translate-y-1/2 transition-all text-xl px-4 text-gray-100 duration-[100ms] pointer-events-none", (toggleSelectOptions || selectedItem) && "top-0 text-sm text-gray-900")} 
         style={{
            backgroundColor: bgColor
         }}
        >{selectName || "Select"}</span>
          <IoIosArrowDown className={cn("absolute top-1/2 left-1 -translate-y-1/2 transition-all", toggleSelectOptions && "rotate-180")} size={"2rem"}/>
          <span className="absolute top-1/2 right-4 -translate-y-1/2 transition-all text-xl px-4 text-gray-100 duration-[100ms] pointer-events-none">{selectedItem || null}</span>
          {toggleSelectOptions && <ul className="bg-white absolute top-full left-0 right-0 mt-4 text-slate-900 flex flex-col gap-1 rounded-md z-50 max-h-52 overflow-y-auto overflow-x-clip">
            {options.map((option, index) => {
                return (
                    <li key={crypto.randomUUID()} className="cursor-pointer p-4 hover:bg-doldor_orange" onClick={(event) => {
                        event.stopPropagation();
                        onSelect({ type: name, payload: event.target.textContent})
                        setToggleSelectOptions(prevState => !prevState)
                    }}>{option.name}</li>
                )
            })}
          </ul>}
    </div>
  );
};

export default Select;
