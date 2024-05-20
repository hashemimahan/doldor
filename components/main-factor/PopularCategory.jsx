"use client";
import React, { useEffect, useState } from "react";
import PopularCategoryItem from "./PopularCategoryItem";
import classes from "./PopularCategory.module.css";
import { addNewProduct } from "@/reducers/sales-invoice";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { myHeaders, urlencoded } from "@/libs/utility";
import PopularCategorySubItem from "./PopularCategorySubItem";

const PopularCategory = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsDiscount, setProductsDiscount] = useState([]);
  const { receiptId } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    fetch("https://doldor.com/api/v1/category/fetch/5", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      let cat = JSON.parse(result);
      setCategories(cat.categories);
    })
    .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("https://doldor.com/api/v1/product/fetch/10", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let pdt = JSON.parse(result);
        setProducts(pdt.products);
      })
      .catch((error) => console.error(error));

      fetch("https://doldor.com/api/v1/productDiscount/fetch/10", requestOptions)
        .then((response) => response.text())
        .then((result) => {
          let prDiscount = JSON.parse(result);
          setProductsDiscount(prDiscount.discounts);
        })
        .catch((error) => console.error(error));
  }, [])

  return (
    <section
      className={`${classes.popularCategoryWrapper} font-iranYekan font-black text-doldor_text`}
      dir="rtl"
    >
      <div className={`${classes.mainCategory}`}>
        <header className="border-[0.1rem] border-doldor_orange bg-white grid place-content-center">
          دسته بندی اصلی
        </header>
        {categories.map((item, i) => <PopularCategoryItem key={item?.id ?? crypto.randomUUID()} name={item?.name} />)}
      </div>
      <div className={`${classes.subCategory}`}>
        <header className="border-[0.1rem] border-doldor_orange bg-white grid place-content-center">
          زیر دسته بندی
        </header>
        {products.map(product => {
          return (
            <PopularCategorySubItem key={product.id+Math.random().toString(32)} receiptId={receiptId} {...product} discounts={productsDiscount} />
          )
        })}
      </div>
    </section>
  );
};

export default PopularCategory;
