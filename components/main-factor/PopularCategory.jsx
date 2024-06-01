"use client";
import React, { useEffect, useState } from "react";
import { getCookie } from 'cookies-next';
import PopularCategoryItem from "./PopularCategoryItem";
import classes from "./PopularCategory.module.css";
import { addNewProduct } from "@/reducers/sales-invoice";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { myHeaders, urlencoded } from "@/libs/utility";
import PopularCategorySubItem from "./PopularCategorySubItem";
import useLocalStorage from "@/hooks/useLocalStarage";
import {getData} from "@/libs/data";

const PopularCategory = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsDiscount, setProductsDiscount] = useState([]);
  const [categoryId, setCategoryId] = useState(null);

  const { receiptId } = useParams();

  const token = getCookie("token") ?? "";
  /*useEffect(() => {
    myHeaders.append("Authorization", "Bearer "+token);
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
  }, []);*/

  useEffect(() => {
    getData(token).then(res => {
      setCategories(res.categories.categories)
      setProducts(res.products.products)
      setProductsDiscount(res.productsDiscount.discounts)
    })
  }, [token]);

  const onSetCategoryFilterHandler = (id) => {
    setCategoryId(id)
  }

  return (
    <section
      className={`${classes.popularCategoryWrapper} font-iranYekan font-black text-doldor_text`}
      dir="rtl"
    >
      <div className={`${classes.mainCategory}`}>
        <header className="rounded-lg border-doldor_orange bg-gray-900 text-slate-100 grid place-content-center">
          دسته بندی اصلی
        </header>
        {categories?.length > 0 ? categories.map((item, i) => <PopularCategoryItem key={item?.id ?? crypto.randomUUID()} name={item?.name} onSet={onSetCategoryFilterHandler} id={item.id} />) : null}
      </div>
      <div className={`${classes.subCategory}`}>
        <header className="rounded-lg border-doldor_orange bg-rose-700 text-slate-100 grid place-content-center">
          زیر دسته بندی
        </header>
        {!categoryId ? products?.map(product => {
          return (
            <PopularCategorySubItem key={product.id+Math.random().toString(32)} receiptId={receiptId} {...product} discounts={productsDiscount} />
          )
        }) : products.filter(item => item.id === categoryId).map(product => {
          return (
            <PopularCategorySubItem key={product.id+Math.random().toString(32)} receiptId={receiptId} {...product} discounts={productsDiscount} />
          )
        })}
      </div>
    </section>
  );
};

export default PopularCategory;
