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

const TabItems = ({title, cast, onRemove, id}) => {
    const {receiptId} = useParams();
    const item = useSelector(state => state.counter.items);
    const router = useRouter();
    const dispatch = useDispatch();
    return (
        <li className={`${Number(receiptId) === id ? classes.active : undefined}`}>
            <Link href={`/receipt/${id}`} className={"flex flex-row-reverse flex-nowrap gap-2 border px-2 py-1 font-iranYekan font-bold text-lg"}>
                <p className={"flex flex-col px-2"}>
                    <span>{title}</span>
                    <span className={"-tracking-normal"}>{cast} ريال</span>
                </p>
                <button className={"rotate-45 text-center content-center px-2 hover:text-doldor_orange"}
                        onClick={async () => {
                            dispatch(removeReceiptItem(id));
                            dispatch(removeProduct(receiptId))
                            let x = item.length-1;
                            router.push(`/receipt/${x.toString()}`);
                        }}>
                    <FaPlus/>
                </button>
            </Link>
        </li>
    );
};

export default TabItems;