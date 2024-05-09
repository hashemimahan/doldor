"use client";
import {createSlice} from "@reduxjs/toolkit";
import { FaTrashAlt } from "react-icons/fa";

/* 
const initialState = {
    items: [],
      totalAmount: 0,
      totalDiscount: 0,
      totalNumber: 0,
} */

const initialState = {
    customers: [
        {
            customerId: 1,
            products: [
                {
                    productsDetail: {
                    select: <input type={"checkbox"}/>,
                    code: 1234656,
                    barCode: 12345667,
                    product: "تخم مرغ",
                    number: 1,
                    price: 100000,
                    discount: 8000,
                    totalAmount: 92000,
                    stock: 20,
                    remove: <FaTrashAlt />,
                  },
                  id: 1
                }
            ]
        },
        {
            customerId: 2,
            products: [
                {
                    productsDetail: {
                    select: <input type={"checkbox"}/>,
                    code: 1234656,
                    barCode: 12345667,
                    product: "تخم مرغ",
                    number: 1,
                    price: 100000,
                    discount: 8000,
                    totalAmount: 92000,
                    stock: 20,
                    remove: <FaTrashAlt />,
                  },
                  id: 1
                }
            ]
        },
        {
            customerId: 3,
            products: [
                {
                    productsDetail: {
                    select: <input type={"checkbox"}/>,
                    code: 1234656,
                    barCode: 12345667,
                    product: "تخم مرغ",
                    number: 1,
                    price: 100000,
                    discount: 8000,
                    totalAmount: 92000,
                    stock: 20,
                    remove: <FaTrashAlt />,
                  },
                  id: 1
                }
            ]
        },
    ],
}
export const salesInvoice = createSlice({
    name: "salesInvoice",
    initialState,
    reducers: {
        addNewProduct: (state, action) => {
            // let res = state.find(item => item.customerId === action.payload.customerId);
            // state.totalAmount += action.payload.productsDetail.totalAmount;
            // state.totalDiscount += action.payload.productsDetail.discount;
            // state.totalNumber += action.payload.productsDetail.number;
        },
        addCustomers: (state, action) => {
            state.customers.push(action.payload);
        }
    }
})

export const { addNewProduct, addCustomers } = salesInvoice.actions;
export default salesInvoice.reducer;