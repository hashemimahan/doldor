'use client';
import React, {useState} from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "@/reducers/sales-invoice-slice";
import {useParams, useRouter} from "next/navigation";
// import

const Receipt = () => {
    const [number, setNumber] = useState(1);
    const {receiptId} = useParams();
    const customers = useSelector((state) => state.salesInvoice.customers);
    let lastCustomerId = customers?.findLast(item => item.customerId > 0)?.customerId || 0;
    let firstCustomerId = customers?.find(item => item.customerId > 0)?.customerId || 0;

    let count = 1;
    if (receiptId !== undefined && receiptId >= 1) {
        count = Number(receiptId);
    } else {
        count = 0;
    }
    // const count = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const router = useRouter();

    const onChangeReceiptNumberHandler = (action) => {
        action === "plus" ? setNumber(prevState => prevState + 1) : number > 1 ? setNumber(prevState => prevState - 1) : setNumber(1);
    }
    return (
        <div className={"flex flex-row flex-nowrap gap-2 justify-center items-center font-iranYekan font-bold text-lg min-w-max"}>
            <button className={"hover:text-doldor_orange disabled:cursor-not-allowed disabled:text-doldor_text"} disabled={lastCustomerId === Number(receiptId)} onClick={() => {
                if (receiptId === undefined) return
                if (lastCustomerId === Number(receiptId)) return
                dispatch(increment())
                router.replace(`/receipt/${count+1}`)
            }}>
                <IoIosArrowForward size={"1.8rem"}/>
            </button>
            <p>
                فیش شماره <span className={"mr-1"}>{count}</span>
            </p>
            <button className={"hover:text-doldor_orange disabled:cursor-not-allowed disabled:text-doldor_text"} disabled={firstCustomerId === Number(receiptId)} onClick={() => {
                if (receiptId === undefined) return
                if (count === 1 || count < 1 ||  firstCustomerId === Number(receiptId)) return
                dispatch(decrement())
                router.replace(`/receipt/${count-1}`)
            }}>
                <IoIosArrowBack size={"1.8rem"}/>
            </button>
        </div>
    );
};

export default Receipt;