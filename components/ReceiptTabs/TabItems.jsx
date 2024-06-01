'use client';
import React, { useReducer } from 'react';
import {FaPlus} from "react-icons/fa";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {removeReceiptItem} from "@/reducers/sales-invoice-slice";
import {useParams, usePathname, useRouter} from "next/navigation";
import { delay } from '@/libs/utility';
import classes from "./TabItem.module.css";
import {removeProduct, removeTabItem} from "@/reducers/sales-invoice";
import { FaMoneyBillWave } from "react-icons/fa";
import useLocalStorage from '@/hooks/useLocalStarage';
import { FaCashRegister } from "react-icons/fa6";

const TabItems = ({title, id}) => {
    let existingFactor = useSelector((state) => state.salesInvoice.customers);

    const {receiptId} = useParams();
    const {setItem, getItem, removeItem} = useLocalStorage("tabs-items");
    const {getItem: getCast} = useLocalStorage("customers");
    let savedItems = getItem();
    // const item = useSelector(state => state.counter.items);
    const customers = useSelector(state => state.salesInvoice.customers);
    const tabs = useSelector(state => state.salesInvoice.tabItems);
    const router = useRouter();
    const dispatch = useDispatch();
    
    // let cast = existingFactor[id-1]?.totalAmountPayable || existingFactor[id-1]?.totalPrice || 0;
    let cast = customers.find(item => item.customerId === id);

    console.log(tabs);
    console.log(id);

    // let firstCustomerId = customers.find(item => item.customerId > 0);
    // console.log(customers);
    // console.log(lastCustomerId);
    // console.log(firstCustomerId);
    // console.log(id);
    // console.log(+receiptId);
    return (
        <li className={`${Number(receiptId) === id ? classes.active : classes.tabItem} group px-4 rounded-t-lg relative  transition-all`}>
            <Link href={`/receipt/${id}`} className={"flex flex-row-reverse flex-nowrap gap-8 px-6 py-1 font-iranYekan font-bold text-lg"}>
                <p className={"flex flex-col px-2"}>
                    <span>{"مشتری عمومی"}</span>
                    <span className={"-tracking-normal"}>{cast?.totalAmountPayable || cast?.totalPrice || 0} ريال</span>
                </p>
                <button className={"rotate-45 text-center content-center px-2 hover:text-doldor_orange border-none outline-none"}
                        onClick={() => {
                            let lastCustomerId = customers.findLast(item => item.customerId > id)?.customerId.toString() || "";
                            console.log(lastCustomerId);
                            // dispatch(removeReceiptItem(id));
                            dispatch(removeProduct(id))
                            dispatch(removeTabItem(id))
                            router.push(`/receipt/${lastCustomerId}`);
                        }}>
                    <FaPlus/>
                </button>
            </Link>
        </li>
    );
};

export default TabItems;