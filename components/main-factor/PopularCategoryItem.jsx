import React from "react";

const PopularCategoryItem = ({ name, onSet, id }) => {
  return (
    <div
      className={
        "text-lg font-bold font-iranYekanRegular bg-white text-neutral-500 rounded-lg border border-b-[0.3rem] border-b-slate-900 p-2 cursor-pointer"
      }
      onClick={() => onSet(id)}
    >
      {name || "hi"}
    </div>
  );
};

export default PopularCategoryItem;
