"use client";
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from "./receipt-table.module.css"
import Select from "@/components/utilities/select";
import {
    changeUnit,
    decrease,
    increase,
    removeAllProducts,
    removeProductItem,
    toggleModal
} from "@/reducers/sales-invoice";
import {createPortal} from "react-dom";
import Modal from "@/components/utilities/modal";
import {PiPencilLight} from "react-icons/pi";
import {FaTrashAlt} from "react-icons/fa";
import useLocalStorage from '@/hooks/useLocalStarage';

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
    {value: "number", label: "عدد"},
    {value: "kilo", label: "کیلو"},
];

const ReceiptTable = ({factorId}) => {
    let existingFactor = useSelector((state) => state.salesInvoice.customers);
    let dispatch = useDispatch();
    const {setItem, getItem, removeItem} = useLocalStorage("customers");
    let savedProducts = getItem();

    let products = existingFactor[+factorId - 1]?.products ?? [];
    /* if (savedProducts[+factorId - 1]?.products !== undefined) {
        products = savedProducts[+factorId - 1]?.products;
    } else {
        products = existingFactor[+factorId - 1]?.products ?? []
    } */
// = savedProducts[+factorId - 1].products ?? existingFactor[+factorId - 1]?.products ?? [];
    /* functions */
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

    const onSelectChangeHandler = (event, productCode) => {
        let payload = {
            customerId: +factorId,
            productCode: productCode,
            unit: event.target.selectedIndex === 0 ? "number" : "kilo",
        };
        dispatch(changeUnit(payload));
    };

    const onToggleModalHandler = (isShow, code) => {
        let payload = {
            customerId: +factorId,
            productCode: code,
            isShow,
        };
        dispatch(toggleModal(payload));
    };

    return (
        <section className={`${classes.receiptTable} font-iranYekan font-black text-xl`} dir={"rtl"}>
            <div className={classes["receiptTable__row"]}>{headings.map((item, index) => (
                <p key={crypto.randomUUID()} className='bg-slate-300'>{item}</p>
            ))}</div>
            {products.map((item, index) => {
                return (
                    <div key={crypto.randomUUID()} className={classes["receiptTable__row"]}>
                        <div><input type={"checkbox"}/></div>
                        <div>{item.code}</div>
                        <div>{item.barCode}</div>
                        <div>{item.product}</div>
                        <div>
                            <Select
                                key={Math.random().toString(32)}
                                onSelect={onSelectChangeHandler}
                                options={options}
                                code={item.code}
                                unit={item.unit || "number"}
                            />
                        </div>
                        <div className={"gap-4 relative text-xl"}>
                            <button
                                type={"button"}
                                onClick={() =>
                                    onChangeProductHandler(item.code, "increase")
                                }
                                className='text-2xl relative top-[.4rem]'
                            >
                                +
                            </button>
                            {item.number || item.weight}
                            {item.modal &&
                                createPortal(
                                    <Modal
                                        customerId={+factorId}
                                        productCode={item.code}
                                        unit={item.number}
                                        maxValue={item.tsw}
                                        onClose={onToggleModalHandler}
                                    />,
                                    document.body
                                )}
                            <button
                                type={"button"}
                                onClick={() =>
                                    onChangeProductHandler(item.code, "decrease")
                                }
                                className='text-2xl'
                            >
                                -
                            </button>
                            <button
                                type="button"
                                onClick={() => onToggleModalHandler(true, item.code)}
                                className="absolute top-[1.4rem] right-[.65rem] -translate-y-[1.15rem] cursor-pointer"
                            >
                                <PiPencilLight size={"1.5rem"}/>
                            </button>
                        </div>
                        <div>
                            {new Intl.NumberFormat("fa-IR", {
                                style: "currency",
                                currency: "IRR",
                            }).format(item.price)}
                        </div>
                        <div>
                            {new Intl.NumberFormat("fa-IR", {
                                style: "currency",
                                currency: "IRR",
                            }).format(item.discount)}
                        </div>
                        <div>
                            {new Intl.NumberFormat("fa-IR", {
                                style: "currency",
                                currency: "IRR",
                            }).format(item.totalAmount)}
                        </div>
                        <div>
                            {item.stock}
                        </div>
                        <div onClick={() => onRemoveProductItemHandler(item.code)} className={"cursor-pointer"}>
                            <FaTrashAlt className='text-doldor_orange'/>
                        </div>
                    </div>
                )
            })}
            <div className={classes["receiptTable__row"]} style={{gridTemplateRows: "6rem"}}>
                <div></div>
                <div></div>
                <div></div>
                <div>

                </div>
                <div className={"flex-col"}>
                    <p className="font-iranYekan font-black text-xl">
                        وزنی: {existingFactor[+factorId - 1]?.totalWeight ?? 0}
                    </p>
                    <p className="font-iranYekan font-black text-xl">
                        عددی:{" "}
                        {existingFactor[+factorId - 1]?.totalNumber >= 0
                            ? existingFactor[+factorId - 1]?.totalNumber
                            : 0}
                    </p>
                </div>
                <div></div>
                <div>
                    {new Intl.NumberFormat("fa-IR", {
                        style: "currency",
                        currency: "IRR",
                    }).format(existingFactor[+factorId - 1]?.totalAmount)}
                </div>
                <div>
                    {new Intl.NumberFormat("fa-IR", {
                        style: "currency",
                        currency: "IRR",
                    }).format(existingFactor[+factorId - 1]?.totalDiscount)}
                </div>
                <div>
                    {new Intl.NumberFormat("fa-IR", {
                        style: "currency",
                        currency: "IRR",
                    }).format(existingFactor[+factorId - 1]?.totalPrice)}
                </div>
                <div></div>
                <div onClick={onRemoveAllProductHandler} className={"cursor-pointer"}>
                    <FaTrashAlt className='text-doldor_orange'/>
                </div>
            </div>
            <div className={classes["receiptTable__row"]}>
                <div style={{gridColumn: "1 /span 3"}}>انتقال به مانده مشتری</div>
                <div style={{gridColumn: "4 / 5"}}>
                    <p className={"w-full h-full flex justify-center items-center"}>مرجوعی</p>
                    <p className={"w-full h-full flex justify-center items-center border-r-[1px]"}>نقدی</p>
                </div>
                {/* <div style={{gridColumn: "5 / 6"}}></div> */}
                <div style={{gridColumn: "5 / span 2"}}></div>
                <div style={{gridColumn: "7 / span 2", justifyContent: "right"}} className={"pr-4"}>عوارض و مالیات :
                </div>
                <div style={{gridColumn: "9 / 10"}}></div>
                <div style={{gridColumn: "10 / 11"}}></div>
                <div style={{gridColumn: "11 / 12"}}></div>
            </div>
            <div className={classes["receiptTable__row"]}>
                <div style={{gridColumn: "1 /span 3"}}>انتقال به انبار</div>
                <div style={{gridColumn: "4 / 5"}}>
                    <p className={"w-full h-full flex justify-center items-center !cursor-pointer hover:text-doldor_orange"} onClick={onRemoveAllProductHandler}>حذف سفارش</p>
                    <p className={"w-full h-full flex justify-center items-center border-r-[1px]"}>کارت خوان</p>
                </div>
                <div style={{gridColumn: "5 / span 3"}}>
                    <p className={"w-full h-full flex justify-center items-center"}>0 ریال</p>
                    <p className={"w-full h-full flex justify-center items-center border-r-[1px]"}>ذخیره</p>
                </div>
                <div style={{gridColumn: "8 / -1", justifyContent: "right"}}
                     className={"pr-4 gap-6"}>تخفیف: <span>{existingFactor[+factorId - 1]?.totalDiscount} ریال</span></div>
            </div>
            <div className={classes["receiptTable__row"]}>
                <div style={{gridColumn: "1 /span 3"}}>انتقال به بیرون</div>
                <div style={{gridColumn: "4 / 5"}}>
                    <p className={"w-full h-full flex justify-center items-center"}>برگشت از فروش</p>
                    <p className={"w-full h-full flex justify-center items-center border-r-[1px]"}>مانده</p>
                </div>
                <div style={{gridColumn: "5 / span 3"}}>
                    <p className={"w-full h-full flex justify-center items-center"}>0 ریال</p>
                    <p className={"w-full h-full flex justify-center items-center border-r-[1px]"}>چاپ</p>
                </div>
                <div style={{gridColumn: "8 / -1", justifyContent: "right"}} className={"pr-4 gap-6"}>
                    قابل پرداخت: <span>{existingFactor[+factorId - 1]?.totalPrice} ریال</span>
                </div>

            </div>
            <div className={classes["receiptTable__row"]}>
                <div style={{gridColumn: "1 /span 3"}} className={"!justify-start pr-4"}>نام مشتری</div>
                <div style={{gridColumn: "4 / 5"}}>
                    <p className={"w-full h-full flex justify-start pr-4 items-center"}>شماره تماس</p>
                </div>
                <div style={{gridColumn: "5 / span 3"}}>
                    <p className={"w-full h-full flex justify-start pr-4 items-center"}>کد اشتراک</p>
                </div>
                <div style={{gridColumn: "8 / -1"}}>
                    <p className={"w-full h-full flex justify-start pr-4 items-center"}>لیست اشتراک</p>
                </div>
            </div>
            <div className={classes["receiptTable__row"]}>
                <div style={{gridColumn: "1 / -1"}} className={"!justify-start pr-4"}>توضیحات</div>
            </div>
            <div className={classes["receiptTable__row"]}>
                <div style={{gridColumn: "1 /-1"}} className={"!justify-start pr-4"}>آدرس</div>

            </div>
            <div className={classes["receiptTable__row"]}>
                <div style={{gridColumn: "1 /-1"}} className={"!justify-start pr-4"}>امتیاز مشتری</div>

            </div>
        </section>
    );
};

export default ReceiptTable;