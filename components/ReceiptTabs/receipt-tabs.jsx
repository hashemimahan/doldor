'use client';
import React, {useState} from 'react';
import { FaPlus } from "react-icons/fa";
import TabItems from "@/components/ReceiptTabs/TabItems";
import {useParams, useRouter} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {addReceiptItem} from "@/reducers/sales-invoice-slice";
import {addCustomers, removeProduct} from "@/reducers/sales-invoice";

export const items = [
    {
        title: "مشتری عمومی",
        cast: 800000,
        id: 1,
    },
    {
        title: "مشتری عمومی",
        cast: 1750000,
        id: 2,
    },
    {
        title: "مشتری عمومی",
        cast: 7500000,
        id: 3,
    },
]
const ReceiptTabs = () => {
    // const [receiptItems, setReceiptItems] = useState(items);
    const dispatch = useDispatch();
    const {receiptId} = useParams();
    const router = useRouter();
    const items = useSelector(state => state.counter.items);

    const onAddReceiptItemHandler = () => {
        const newItem = {
            title: "مشتری جدید",
            cast: 1,
            id: items.length + 1,
        }
        // setReceiptItems(prevState => [...prevState, newItem]);
        router.replace(`/receipt/${newItem.id}`);
    }
    const onRemoveReceiptItemHandler = (id) => {
        const newReceiptItems = receiptItems.filter(item => item.id !== id);
        setReceiptItems(newReceiptItems);
    }
    return (
        <div className={"flex flex-row flex-nowrap gap-2 py-4"}>
            <ul className={"flex flex-row flex-nowrap gap-4 w-max"}>
                {items.length > 0 ? items.map((item, index) => {
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