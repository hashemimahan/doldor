'use client';
import useLocalStorage from "@/hooks/useLocalStarage";
import {createSlice} from "@reduxjs/toolkit";


const {setItem : setNumber, getItem : getNumber, removeItem: removeNumber} = useLocalStorage('tabs-counter');
const {setItem : setItems, getItem : getItems, removeItem: removeItems} = useLocalStorage('tabs-items');

let number = getNumber()
let items = getItems()
const initialState = {
    number: number ?? 0,
    items: items ?? [],
}
export const salesInvoiceSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            removeNumber()
            
            state.number += 1;

            setNumber(state.number);
        },
        decrement: (state) => {
            removeNumber()
            state.number > 1 ? state.number -= 1 : state.number;
            setNumber(state.number);
        },
        addReceiptItem: (state, action) => {
            removeItems()
            state.items.push(action.payload);
            setItems(state.items)
        },
        removeReceiptItem: (state, action) => {
            removeItems()
            const result = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(result, 1);
            setItems(state.items)
        }
    }
})

export const { increment, decrement, addReceiptItem, removeReceiptItem } = salesInvoiceSlice.actions;

export default salesInvoiceSlice.reducer;