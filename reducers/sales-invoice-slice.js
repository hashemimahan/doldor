'use client';
import {createSlice} from "@reduxjs/toolkit";
import { items as receiptItem } from "@/components/ReceiptTabs/receipt-tabs";

const initialState = {
    number: 1,
    items: [...receiptItem],
}
export const salesInvoiceSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.number += 1;
        },
        decrement: (state) => {
            state.number > 1 ? state.number -= 1 : state.number;
        },
        addReceiptItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeReceiptItem: (state, action) => {
            const result = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(result, 1);
        }
    }
})

export const { increment, decrement, addReceiptItem, removeReceiptItem } = salesInvoiceSlice.actions;

export default salesInvoiceSlice.reducer;