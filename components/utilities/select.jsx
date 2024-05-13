import React from 'react';
import classes from "./select.module.css";

const Select = ({options, onSelect}) => {
    const onChangeSelectedItemHandler = event => {
        onSelect(event.target.selectedIndex);
    }
    return (
        <>
            <label className={`w-full h-full ${classes.select} font-iranYekan font-black text-lg`} htmlFor="slct">
              <select id="slct" required="required" onChange={onChangeSelectedItemHandler}>
                <option value="" disabled="disabled" selected="selected">واحد</option>
                {options.map((item, index) => <option key={index} value={item.value}>{item.label}</option>)}
              </select>
            </label>
        </>
    );
};

export default Select;