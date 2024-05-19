'use client';
import React, { useReducer } from 'react';
import {FaPlus} from "react-icons/fa";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {removeReceiptItem} from "@/reducers/sales-invoice-slice";
import {useParams, usePathname, useRouter} from "next/navigation";
import { delay } from '@/libs/utility';
import classes from "./TabItem.module.css";
import {removeProduct} from "@/reducers/sales-invoice";
import { FaMoneyBillWave } from "react-icons/fa";
import useLocalStorage from '@/hooks/useLocalStarage';
import { FaCashRegister } from "react-icons/fa6";

const TabItems = ({title, onRemove, id}) => {
    let existingFactor = useSelector((state) => state.salesInvoice.customers);

    const {receiptId} = useParams();
    const {setItem, getItem, removeItem} = useLocalStorage("tabs-items");
    const {getItem: getCast} = useLocalStorage("customers");
    let savedItems = getItem();
    const item = useSelector(state => state.counter.items);
    const router = useRouter();
    const dispatch = useDispatch();
    
    let cast = existingFactor[id-1].totalPrice;

    return (
        <li className={`${Number(receiptId) === id ? classes.active : classes.tabItem} group px-4 py-1 rounded-lg relative overflow-clip`}>
            <Link href={`/receipt/${id}`} className={"flex flex-row-reverse flex-nowrap gap-8 px-6 py-2 font-iranYekan font-bold text-lg"}>
                <p className={"flex flex-col px-2"}>
                    <span>{title}</span>
                    <span className={"-tracking-normal"}>{cast} ريال</span>
                </p>
                <button className={"rotate-45 text-center content-center px-2 hover:text-doldor_orange border-none outline-none"}
                        onClick={() => {
                            dispatch(removeReceiptItem(id));
                            dispatch(removeProduct(receiptId))
                            let x = item.length-1;
                            router.push(`/receipt/${x.toString()}`);
                        }}>
                    <FaPlus/>
                </button>
            </Link>
            <p className={"absolute -bottom-[1.5rem] left-[0.25rem] -rotate-45 group-hover:rotate-0 pointer-events-none group-hover:-translate-y-[.5rem] transition-all group-hover:scale-110"}>
                <FaCashRegister size={"3rem"} className={"text-white"}/>
            </p>
        </li>
    );
};

export default TabItems;