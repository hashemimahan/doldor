import React from "react";

const CheckBox = ({ name, id, value }) => {
  return (
    <div className="flex flex-row gap-8 justify-center items-center">
      <label
        htmlFor={id}
        className="flex flex-row justify-start items-center gap-2 font-iranYekan font-bold text-xl text-center min-w-fit"
      >
        {value}
      </label>

      <input type="radio" name={name} id={id} className="" />
    </div>
  );
};

export default CheckBox;
