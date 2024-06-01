"use client";
import React, { useEffect } from "react";
import Button from "./button";
import { useDispatch } from "react-redux";
import { deleteProduct } from "@/reducers/products-page-slice";

const ListItem = ({
  name,
  onToggle,
  toggleModalState,
  editedProduct,
  type,
}) => {
  const dispatch = useDispatch();

  const onDeleteProductHandler = () => {
    dispatch(deleteProduct());
  };

  const handleKeyDown = (event) => {
    if (event.key === "F4" && toggleModalState) {
      onToggle(event, true, true);
    }
  };

  useEffect(() => {
    // Attach the event listener
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (type && type === "delete") {
    return (
      <li className="font-iranYekan font-black text-xl text-center min-w-fit">
        <Button
          className={"text-center w-full h-full"}
          onClick={onDeleteProductHandler}
        >
          {name}
        </Button>
      </li>
    );
  }
  return (
    <li className="font-iranYekan font-black text-xl text-center min-w-fit">
      <Button
        className={"text-center w-full h-full"}
        onClick={(event) => {
          if (toggleModalState) {
            onToggle(event, true, editedProduct);
          }
        }}
      >
        {name}
      </Button>
    </li>
  );
};

export default ListItem;
