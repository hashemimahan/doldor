import React, { useEffect } from "react";

const Select = ({ options, onSelect, code, unit }) => {
  return (
    <label
      className={`w-full h-full select font-iranYekan font-black text-xs text-black`}
      htmlFor="slct"
    >
      <select
        id="slct"
        required="required"
        onChange={(event) => onSelect(event, code)}
      >
        {/* <option value="" disabled="disabled" selected="selected">واحد</option> */}
        {options.map((option, index) => (
          <option key={index} value={option.value} selected={unit === "number" ? 0 : 1}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
