'use client';
import React, {useState} from 'react';
import { FaPlus } from "react-icons/fa";
import TabItems from "@/components/ReceiptTabs/TabItems";
import {useParams, useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {addReceiptItem} from "@/reducers/sales-invoice-slice";
import {addCustomers, removeProduct} from "@/reducers/sales-invoice";
import useLocalStorage from '@/hooks/useLocalStarage';


const ReceiptTabs = () => {
    const dispatch = useDispatch();
    const {receiptId} = useParams();
    const router = useRouter();
    const {setItem, getItem, removeItem} = useLocalStorage("tabs-items");
    let savedItems = getItem();
    const items = useSelector(state => state.counter.items);

    let existedItems = savedItems ?? items;

    const onRemoveReceiptItemHandler = (id) => {
        const newReceiptItems = receiptItems.filter(item => item.id !== id);
        setReceiptItems(newReceiptItems);
    }
    return (
        <div className={"flex flex-row flex-nowrap gap-2 py-4"}>
            <ul className={"flex flex-row flex-nowrap gap-4 w-max"}>
                {(existedItems && existedItems.length > 0) ? existedItems.map((item, index) => {
                    return <TabItems key={item.id} title={item.title} cast={item.cast} id={item.id} onRemove={onRemoveReceiptItemHandler}/>
                }) : undefined}
            </ul>
            <button className={"hover:text-doldor_orange"} onClick={() => {
                let newItem = {
                    title: "مشتری جدید",
                    cast: 1,
                    id: items.length + 1,
                };
                let newCustomer = {
                    customerId: newItem.id,
                    products: [],
                    totalPrice: 0,
                    totalDiscount: 0,
                    totalAmount: 0,
                    totalNumber: 0,
                    totalWeight: 0,
                  };
                dispatch(addReceiptItem(newItem))
                dispatch(addCustomers(newCustomer))
                router.push(`/receipt/${newItem.id}`);
            }}>
                <FaPlus size={"1.6rem"}/>
            </button>
        </div>
    );
};

export default ReceiptTabs;