import { getData } from "@/libs/data";
import React from "react";
import Button from "../Header/button";

const Category = async ({ token }) => {
  const { categories } = await getData(token);
  return (
    <>
      {categories?.categories?.map((category) => (
        <Button
          key={crypto.randomUUID()}
          className={
            "rounded-lg bg-transparent text-gray-900 border-b-2 cursor-pointer border-b-rose-700 shadow-[0px_2px_5px_0px_#00000050] grid place-content-center px-4 py-2 common"
          }
        >
          {category.name}
        </Button>
      ))}
    </>
  );
};

export default React.memo(Category);
