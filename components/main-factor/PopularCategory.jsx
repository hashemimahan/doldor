"use client";
import React from "react";
import PopularCategoryItem from "./PopularCategoryItem";
import classes from "./PopularCategory.module.css";
import { addNewProduct } from "@/reducers/sales-invoice";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";

const PopularCategory = () => {
  const { receiptId } = useParams();
  let dispatch = useDispatch();

  const addItem1 = () => {
    let newItem = {
      customerId: +receiptId,
      productCode: 9875463110,
      productsDetail: {
        code: 9875463110,
        barCode: 12345667,
        product: "سیروپیاز",
        number: 1,
        unit: "number",
        price: 100000,
        pricePerOne: 100000,
        discount: 15000,
        discountPerOne: 15000,
        totalAmount: 85000,
        stock: 5,
        tsw: 6,
      },
      // id: 1
    };
    dispatch(addNewProduct(newItem));
  };

  const addItem2 = () => {
    let newItem = {
      customerId: +receiptId,
      productCode: 1234656789,
      productsDetail: {
        code: 1234656789,
        barCode: 12345667,
        product: "خیار",
        number: 1,
        unit: "number",
        price: 50000,
        pricePerOne: 50000,
        discount: 5000,
        discountPerOne: 5000,
        totalAmount: 45000,
        stock: 5,
        tsw: 6,
      },
      // id: 1
    };
    dispatch(addNewProduct(newItem));
  };

  const addItem3 = () => {
    let newItem = {
      customerId: +receiptId,
      productCode: 789321000,
      productsDetail: {
        code: 789321000,
        barCode: 12345667,
        product: "ماست",
        number: 1,
        unit: "number",
        price: 90000,
        pricePerOne: 90000,
        discount: 10000,
        discountPerOne: 10000,
        totalAmount: 80000,
        stock: 7,
        tsw: 8,
      },
      // id: 1
    };
    dispatch(addNewProduct(newItem));
  };

  return (
    <section
      className={`${classes.popularCategoryWrapper} font-iranYekan font-black text-doldor_text`}
      dir="rtl"
    >
      <div className={`${classes.mainCategory}`}>
        <header className="border-[0.1rem] border-doldor_orange bg-white grid place-content-center">
          دسته بندی اصلی
        </header>
      </div>
      <div className={`${classes.subCategory}`}>
        <header className="border-[0.1rem] border-doldor_orange bg-white grid place-content-center">
          زیر دسته بندی
        </header>
        <PopularCategoryItem onAdd={addItem1} name={"سیر"} />
        <PopularCategoryItem onAdd={addItem2} name={"خیار"} />
        <PopularCategoryItem onAdd={addItem3} name={"ماست"} />
      </div>
    </section>
  );
};

export default PopularCategory;
