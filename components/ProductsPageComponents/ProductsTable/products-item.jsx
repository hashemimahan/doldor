"use client";
import React, { useRef, useState } from "react";
import classes from "./products-item.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeUnit, onSelectProduct, updateProduct } from "@/reducers/products-page-slice";
import { cn } from "@/libs/utils";
import { options } from "@/components/form/form";
import Select from "@/components/utilities/select";

const ProductsItem = () => {
  /* redux state management */
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const selectedId = useSelector((state) => state.products.selectedProduct);

  const [inputModalShow, setInputModalShow] = useState(false);
  const [inputPos, setInputPos] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [updateData, setUpdateData] = useState(null);

  const dbClickHandler = (event, key, value, index) => {
    if (key === "buyPrice" || key === "sellPrice" || key === "sitePrice") {
      const pos = {
        x: event.target.offsetLeft,
        y: event.target.offsetTop,
        width: event.target.offsetWidth,
        height: event.target.offsetHeight,
      };
      setInputPos(pos);
      setInputModalShow(true);
      setUpdateData({
        key,
        value,
        index,
      });
    }
  };

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    const fData = new FormData(event.target);

    let newData = fData.get("inp");
    if (!newData || newData === "0") {
      return;
    }
    console.log(newData);

    const payload = {
      productIndex: updateData.index,
      data: newData,
      key: updateData.key,
    };

    dispatch(updateProduct(payload));
    /*
    let existedProduct = allProducts[updateData.index];
    let updatedProduct = {
      ...existedProduct,
      [updateData.key]: newData,
    };
    setData((prev) => {
      let newData = [...prev];
      newData[updateData.index] = updatedProduct;
      return newData;
    });
    */
    setInputModalShow(false);
    setInputPos({});
  };

  const removeModalHandler = (event) => {
    event.stopPropagation();
    if (event.target.tagName !== "FORM") return;
    setInputModalShow(false);
    setInputPos({});
  };

  const onSelectProductHandler = (event) => {
    const id = event.target.value;
    dispatch(onSelectProduct(id));
  };

  const onChangeUnitHandler = (event, id) => {
    const payload = {
      id,
      unit: event.target.selectedIndex === 0 ? "number" : "weight",
    }
    dispatch(changeUnit(payload));
  }
  return (
    <>
      {allProducts.map((item, index) => (
        <div
          key={crypto.randomUUID()}
          className={`${cn("common", item.productCode === +selectedId ? "bg-gray-300" : "")} ${classes.table}`}
          dir="rtl"
        >
          {Object.entries(item).map(([key, value]) => (
            <div
              key={crypto.randomUUID()}
              onDoubleClick={(event) =>
                dbClickHandler(event, key, value, index)
              }
            >
              {key === "sign" ? (
                <input
                  type="radio"
                  name="productRadioBtn"
                  checked={+selectedId === item.productCode}
                  value={item.productCode}
                  onChange={onSelectProductHandler}
                />
              ) : key === "unit" ? (
                <Select
                  key={Math.random().toString(32)}
                  onSelect={onChangeUnitHandler}
                  options={options}
                  code={item.productCode}
                  unit={item.unit || "number"}
                />
              ) : (
                value
              )}
            </div>
          ))}
        </div>
      ))}
      {inputModalShow && (
        <form
          onSubmit={onSubmitFormHandler}
          className="fixed inset-0 z-[1000] bg-black/75"
          onClick={removeModalHandler}
        >
          <input
            autoFocus
            name="inp"
            type="number"
            className="absolute px-2 common"
            style={{
              top: inputPos.y + 3,
              left: inputPos.x + 3,
              width: inputPos.width - 6,
              height: inputPos.height - 6,
            }}
          />
        </form>
      )}
    </>
  );
};

export default ProductsItem;
