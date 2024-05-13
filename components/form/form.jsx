"use client";
import {
  addNewProduct,
  decrease,
  increase,
  removeAllProducts,
  removeProductItem,
} from "@/reducers/sales-invoice";
import React, { Fragment, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const headings = [
  "انتخاب",
  "کد",
  "بارکد",
  "کالا",
  "واحد",
  "مقدار",
  "قیمت",
  "تخفیف",
  "مبلغ کل",
  "موجودی",
  "حذف",
];

const options = [
  { value: "number", label: "عدد", color: "#f00" },
  { value: "kilo", label: "کیلو", color: "#0f0" },
];

const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "#ffffff99" }),
    /* option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    }, */
  };

const animatedComponents = makeAnimated();

const Form = ({ factorId }) => {
  const [selectedValue, setSelectedValue] = useState("");
  let existingFactor = useSelector((state) => state.salesInvoice.customers);
  let dispatch = useDispatch();
  let products = existingFactor[+factorId - 1].products;

  const onChangeProductHandler = (code, action) => {
    let payload = {
      customerId: +factorId,
      productCode: code,
    };
    if (action === "increase") {
      dispatch(increase(payload));
      return;
    }
    dispatch(decrease(payload));
  };

  const onRemoveProductItemHandler = (code) => {
    let payload = {
      customerId: +factorId,
      productCode: code,
    };
    dispatch(removeProductItem(payload));
  };

  const onRemoveAllProductHandler = () => {
    let payload = {
      customerId: +factorId,
    };
    dispatch(removeAllProducts(payload));
  };

  const handleChange = (selectedOption, actionMeta) => {
    // console.log("handleChange", selectedOption, actionMeta);
	setSelectedValue(selectedOption.value);
  };

  return (
    <>
      <form className="w-full h-auto" dir={"rtl"}>
        <table dir="rtl" style={{ margin: "15px auto", width: "96%" }}>
          <thead>
            <tr>
              {headings.map((item, index) => (
                <th key={crypto.randomUUID()}>{item}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {products.map((item) => {
              return (
                <tr key={"123456789"}>
                  <td className={"tableRows"}>{item.select}</td>
                  <td className={"tableRows"}>{item.code}</td>
                  <td className={"tableRows"}>{item.barCode}</td>
                  <td className={"tableRows"}>
                    <p className={"w-[20rem]"}>{item.product}</p>
                  </td>
                  <td>
                    <Select
                      options={options}
                      className="w-[8rem] font-iranYekan font-bold"
                      isRtl
                      onChange={handleChange}
                      components={animatedComponents}
					  styles={colorStyles}
                    />
                  </td>
                  <td
                    className={
                      "flex border-none gap-4 text-4xl font-iranYekan justify-center items-center"
                    }
                  >
                    <button
                      type={"button"}
                      onClick={() =>
                        onChangeProductHandler(item.code, "increase")
                      }
                    >
                      +
                    </button>
                    {item.number}
                    <button
                      type={"button"}
                      onClick={() =>
                        onChangeProductHandler(item.code, "decrease")
                      }
                    >
                      -
                    </button>
                  </td>
                  <td className={"tableRows"}>{item.price}</td>
                  <td className={"tableRows"}>{item.discount}</td>
                  <td className={"tableRows"}>{item.totalAmount}</td>
                  <td className={"tableRows"}>{item.stock}</td>
                  <td
                    className={"tableRows cursor-pointer"}
                    onClick={() => onRemoveProductItemHandler(item.code)}
                  >
                    {item.remove}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3} className="p-0">
                
              </td>
              <td>{false}</td>
              <td>1235</td>
              <td>
                <p className="font-iranYekan font-black text-xl">وزنی: {100}</p>
                <p className="font-iranYekan font-black text-xl">عددی: {50}</p>
              </td>
              <td className="text-2xl font-iranYekanRegular font-black">
                {existingFactor[+factorId - 1].totalAmount}
              </td>
              <td className="text-2xl font-iranYekanRegular font-black">
                {existingFactor[+factorId - 1].totalDiscount}
              </td>
              <td className="text-2xl font-iranYekanRegular font-black">
                {existingFactor[+factorId - 1].totalPrice}
              </td>
              <td>{false}</td>
              <td
                className="tableRows cursor-pointer"
                onClick={onRemoveAllProductHandler}
              >
                <FaTrashAlt />
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="p-0">
			  <button type={"button"} className="w-full h-full tableRows">
                  انتقال به مانده مشتری
                </button>
              </td>
              <td className="grid grid-cols-2 border-none outline-none !p-0 place-content-center">
                <button type={"button"} className="h-full tableRows py-[1.4rem] first-of-type:border-l-2 border-black border-b-2">
                  مرجوعی
                </button>
                <button type={"button"} className="h-full tableRows py-[1.4rem] first-of-type:border-l-2 border-black border-b-2">
                  نقدی
                </button>
              </td>
              <td>1235</td>
              <td>{false}</td>
              <td colSpan={3}>
                <p className="w-full h-full tableRows !text-right">
                  عوارض و مالیات :
                </p>
              </td>
              <td colSpan={2}>123456789</td>
            </tr>
            <tr>
              <td colSpan={3} className="p-0">
			  <button type={"button"} className="w-full h-full tableRows">
                  انتقال به انبار
                </button>
              </td>
              <td className="grid grid-cols-2 border-none outline-none !p-0 place-content-center">
                <button type={"button"} onClick={onRemoveAllProductHandler} className="h-full tableRows py-[10px] first-of-type:border-l-2 border-black border-b-2">
                  حذف سفارش
                </button>
                <button type={"button"} className="h-full tableRows py-[10px] first-of-type:border-l-2 border-black border-b-2">
                  کارت خوان
                </button>
              </td>
              <td>1235</td>

              <td>123456789</td>
              <td colSpan={3}>
                <p className="w-full h-full tableRows !text-right">
                  تخفیف :{" "}
                  <span className="text-rose-500">
                    {existingFactor[+factorId - 1].totalDiscount}
                  </span>
                </p>
              </td>
              <td colSpan={2}>123456789</td>
            </tr>
            <tr>
              <td colSpan={3} className="p-0">
			  <button type={"button"} className="w-full h-full tableRows">
                  انتقال به بیرون
                </button>
              </td>
              <td className="grid grid-cols-2 border-none outline-none !p-0 place-content-center">
                <button type={"button"} className="h-full tableRows py-[10px] first-of-type:border-l-2 border-black">
                  برگشت از فروش
                </button>
                <button type={"button"} className="h-full tableRows py-[10px] first-of-type:border-l-2 border-black">
                  مانده
                </button>
              </td>
              <td>1235</td>

              <td>123456789</td>
              <td colSpan={3}>
                <p className="w-full h-full tableRows !text-right">
                  قابل پرداخت :{" "}
                  <span className="text-rose-500">
                    {existingFactor[+factorId - 1].totalPrice}
                  </span>
                </p>
              </td>
              <td colSpan={2}>123456789</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <p className="w-full h-full">نام مشتری</p>
              </td>
              <td colSpan={1} className="p-0">
                <p className="w-full h-full">شماره تماس</p>
              </td>
              <td>1235</td>

              <td>
                <p className="w-full h-full">کد اشتراک</p>
              </td>
              <td>123456789</td>
              <td colSpan={2}>123456789</td>
              <td colSpan={2}>123456789</td>
            </tr>
            <tr>
              <td colSpan={2} className="p-0">
                <p className="w-full h-full">آدرس</p>
              </td>
              <td colSpan={2}>
                <p className="w-full h-full">توضیحات</p>
              </td>
              <td>1235</td>

              <td colSpan={2}>123456789</td>
              <td colSpan={2}>123456789</td>
              <td colSpan={2}>123456789</td>
            </tr>
            <tr>
              <td colSpan={4} className="p-0">
                <p className="w-full h-full">امتیاز مشتری</p>
              </td>
              <td colSpan={7}>123456789</td>
            </tr>
          </tfoot>
        </table>
        <button
          type={"button"}
          className={"text-4xl font-bold border p-4"}
          onClick={() => {
            let newItem = {
              customerId: +factorId,
              productCode: 9875463110,
              productsDetail: {
                select: <input type={"checkbox"} />,
                code: 9875463110,
                barCode: 12345667,
                product: "سیروپیاز",
                number: 1,
                price: 100000,
                pricePerOne: 100000,
                discount: 15000,
                discountPerOne: 15000,
                totalAmount: 85000,
                stock: 5,
                remove: <FaTrashAlt />,
              },
              // id: 1
            };
            dispatch(addNewProduct(newItem));
          }}
        >
          addNewItem
        </button>
        <button
          type={"button"}
          className={"text-4xl font-bold border p-4"}
          onClick={() => {
            let newItem = {
              customerId: +factorId,
              productCode: 1234656789,
              productsDetail: {
                select: <input type={"checkbox"} />,
                code: 1234656789,
                barCode: 12345667,
                product: "خیار",
                number: 1,
                price: 50000,
                pricePerOne: 50000,
                discount: 5000,
                discountPerOne: 5000,
                totalAmount: 45000,
                stock: 5,
                remove: <FaTrashAlt />,
              },
              // id: 1
            };
            dispatch(addNewProduct(newItem));
          }}
        >
          addNewItem2
        </button>
        <button
          type={"button"}
          className={"text-4xl font-bold border p-4"}
          onClick={() => {
            let newItem = {
              customerId: +factorId,
              productCode: 789321000,
              productsDetail: {
                select: <input type={"checkbox"} />,
                code: 789321000,
                barCode: 12345667,
                product: "ماست",
                number: 1,
                price: 90000,
                pricePerOne: 90000,
                discount: 10000,
                discountPerOne: 10000,
                totalAmount: 80000,
                stock: 7,
                remove: <FaTrashAlt />,
              },
              // id: 1
            };
            dispatch(addNewProduct(newItem));
          }}
        >
          addNewItem3
        </button>
      </form>
    </>
  );
};

export default Form;
