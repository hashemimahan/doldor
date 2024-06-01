"use client";
import createProduct from "@/public/img/createProduct.png";
import editPic from "@/public/img/edit.png";
import Image from "next/image";
import { useState } from "react";
import CreateCategory from "./create-category";
import CreateProductForm from "./create-product-form";

const CreateProduct = ({ editedProduct }) => {
  const [toggleModalState, setToggleModalState] = useState(false);

  const onToggleModalHandler = () => {
    setToggleModalState(true);
  };
  if (editedProduct) {
    return (
      <section className="w-[40rem] bg-doldor_button_bg pt-2 pb-4 rounded-md">
        <CreateProductForm className={"border-none mt-0 pt-2"} />
        <div className="fixed inset-0 grid justify-start items-end pl-10 pb-10 pointer-events-none">
          <Image
            alt="checklist-background"
            src={editPic}
            width={300}
            height={300}
          />
        </div>
      </section>
    );
  }
  return (
    <section className="w-[40rem] bg-doldor_button_bg py-7 rounded-md">
      {!toggleModalState && (
        <div className="w-full flex justify-center items-center">
          <button
            className="common bg-doldor_orange text-white rounded-md px-4 py-2 colstart"
            onClick={onToggleModalHandler}
          >
            ایجاد دسته جدید
          </button>
        </div>
      )}
      {toggleModalState && <CreateCategory />}
      <CreateProductForm />
      <div className="fixed inset-0 grid justify-start items-end pl-32 pointer-events-none">
        <Image
          alt="checklist-background"
          src={createProduct}
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

export default CreateProduct;
