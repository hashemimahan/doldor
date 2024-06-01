'use client';
import React, {useState} from 'react';
import { FaPlus } from "react-icons/fa";
import TabItems from "@/components/ReceiptTabs/TabItems";
import {useParams, useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {addReceiptItem} from "@/reducers/sales-invoice-slice";
import {addCustomers, addTabItems, removeProduct} from "@/reducers/sales-invoice";
import useLocalStorage from '@/hooks/useLocalStarage';


const ReceiptTabs = () => {
    const dispatch = useDispatch();
    const {receiptId} = useParams();
    const router = useRouter();
    const {getItem} = useLocalStorage("tabs");
    let savedItems = getItem();
    const items = useSelector(state => state.counter.items);
    const customers = useSelector((state) => state.salesInvoice.customers);
    const tabs = useSelector((state) => state.salesInvoice.tabItems);
    let findLastCustomerId = customers?.findLast(item => item.customerId > 0)?.customerId || 0;

    let existedItems = savedItems ?? tabs;

    return (
        <div className={"flex flex-row flex-nowrap gap-2 py-2"}>
            <ul className={"flex flex-row flex-nowrap gap-8 w-max"}>
                {(existedItems && existedItems.length > 0) ? existedItems.map((item, index) => {
                    return <TabItems key={item.id} title={item.title} cast={item.cast} id={item.id}/>
                }) : undefined}
                {/* {tabs?.map(item => <TabItems key={item.id} title={item.title} cast={item.cast} id={item.id} onRemove={onRemoveReceiptItemHandler}/>)} */}
            </ul>
            <button className={"hover:text-doldor_orange relative z-[10000000]"} onClick={() => {
                let newItem = {
                    title: "مشتری جدید",
                    cast: 1,
                    id: findLastCustomerId + 1,
                };
                let newCustomer = {
                    customerId: findLastCustomerId + 1,
                    products: [],
                    totalPrice: 0,
                    totalDiscount: 0,
                    totalAmount: 0,
                    totalNumber: 0,
                    totalWeight: 0,
                    totalAmountPayable: 0,
                  };
                // dispatch(addReceiptItem(newItem))
                dispatch(addTabItems(newItem))
                dispatch(addCustomers(newCustomer))
                router.push(`/receipt/${newCustomer.customerId}`);
            }}>
                <FaPlus size={"1.6rem"} className={"text-doldor_text hover:text-doldor_orange"}/>
            </button>
        </div>
    );
};

export default ReceiptTabs;