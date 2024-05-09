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
    const num = useSelector((state) => state.counter.number);
    const item = useSelector((state) => state.counter.items);

    let count = 1;
    if (receiptId && receiptId >= 1) {
        count = Number(receiptId);
    } else {
        count = num;
    }
    // const count = useSelector((state) => state.counter.number);
    const dispatch = useDispatch();
    const router = useRouter();

    const onChangeReceiptNumberHandler = (action) => {
        action === "plus" ? setNumber(prevState => prevState + 1) : number > 1 ? setNumber(prevState => prevState - 1) : setNumber(1);
    }
    return (
        <div className={"flex flex-row flex-nowrap gap-2 justify-center items-center font-iranYekan font-bold text-lg min-w-max"}>
            <button className={"hover:text-doldor_orange"} onClick={() => {
                dispatch(increment())
                if (item.length === Number(receiptId)) return
                router.replace(`/receipt/${count+1}`)
            }}>
                <IoIosArrowForward size={"1.8rem"}/>
            </button>
            <p>
                فیش شماره <span className={"mr-1"}>{count}</span>
            </p>
            <button className={"hover:text-doldor_orange"} onClick={() => {
                dispatch(decrement())
                if (count === 1) return
                router.replace(`/receipt/${count-1}`)
            }}>
                <IoIosArrowBack size={"1.8rem"}/>
            </button>
        </div>
    );
};

export default Receipt;