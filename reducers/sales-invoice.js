"use client";
import {createSlice, current} from "@reduxjs/toolkit";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from 'sonner';


const initialState = {
    customers: [
        {
            customerId: 1,
            products: [
                {
                    select: <input type={"checkbox"}/>,
                    code: 1234656,
                    barCode: 12345667,
                    product: "فندک",
                    number: 1,
                    price: 12500,
                    discount: 2500,
                    totalAmount: 10000,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ],
            totalPrice: 10000,
            totalDiscount: 2500,
        },
        {
            customerId: 2,
            products: [
                {
                    select: <input type={"checkbox"}/>,
                    code: 1234656,
                    barCode: 12345667,
                    product: "سوجوق",
                    number: 1,
                    price: 17500,
                    discount: 2500,
                    totalAmount: 15000,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ],
            totalPrice: 15000,
            totalDiscount: 2500,
        },
        {
            customerId: 3,
            products: [
                {
                    select: <input type={"checkbox"}/>,
                    code: 1234656,
                    barCode: 12345667,
                    product: "تخم مرغ",
                    number: 1,
                    price: 100000,
                    discount: 10000,
                    totalAmount: 90000,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ],
            totalPrice: 90000,
            totalDiscount: 10000,
        },
    ],
}
export const salesInvoice = createSlice({
    name: "salesInvoice",
    initialState,
    reducers: {
        addNewProduct: (state, action) => {
            const customers = current(state.customers)
            let findCustomer = customers.findIndex(item => item.customerId === action.payload.customerId);
            let existedProductItemIndex = state.customers[findCustomer].products.findIndex(item => item.code === action.payload.productCode);
            let existedProductItem = state.customers[findCustomer].products[existedProductItemIndex];
            if (existedProductItem && existedProductItem?.stock === 0 ) {
                toast.error('کالا در انبار موجود نمی باشد')
                return
            }
            if (existedProductItem) {
                const updatedProductItem = {
                    ...existedProductItem,
                    number: existedProductItem.number + action.payload.productsDetail.number,
                    totalAmount: existedProductItem.totalAmount + action.payload.productsDetail.price,
                    discount: existedProductItem.discount + action.payload.productsDetail.discount,
                    stock: existedProductItem.stock - 1,
                }
                state.customers[findCustomer].products[existedProductItemIndex] = updatedProductItem;
                state.customers[findCustomer].totalPrice += state.customers[findCustomer].products[existedProductItemIndex].price;
            } else {
                state.customers[findCustomer].products.push(action.payload.productsDetail);
                state.customers[findCustomer].totalPrice += action.payload.productsDetail.price;
            }
        },
        increase: (state, action) => {
            const customers = current(state.customers)
            let findCustomer = customers.findIndex(item => item.customerId === action.payload.customerId);
            let existedProductItemIndex = state.customers[findCustomer].products.findIndex(item => item.code === action.payload.productCode);
            let existedProductItem = state.customers[findCustomer].products[existedProductItemIndex];
            if (existedProductItem.stock === 0 ) {
                toast.error('کالا در انبار موجود نمی باشد')
                return
            }
            const updatedProductItem = {
                ...existedProductItem,
                number: existedProductItem.number + 1,
                totalAmount: existedProductItem.totalAmount + existedProductItem.price,
                discount: existedProductItem.discount * 2,
                stock: existedProductItem.stock - 1,
            }
            state.customers[findCustomer].products[existedProductItemIndex] = updatedProductItem;
            state.customers[findCustomer].totalPrice += state.customers[findCustomer].products[existedProductItemIndex].price;
        },
        decrease: (state, action) => {
            const customers = current(state.customers)
            let findCustomer = customers.findIndex(item => item.customerId === action.payload.customerId);
            let existedProductItemIndex = state.customers[findCustomer].products.findIndex(item => item.code === action.payload.productCode);
            let existedProductItem = state.customers[findCustomer].products[existedProductItemIndex];
            if (existedProductItem.number === 1) {
                state.customers[findCustomer].products.splice(existedProductItemIndex, 1);
                return
            }
            const updatedProductItem = {
                ...existedProductItem,
                number: existedProductItem.number - 1,
                totalAmount: existedProductItem.totalAmount - existedProductItem.price,
                discount: existedProductItem.discount / 2,
                stock: existedProductItem.stock + 1,
            }
            state.customers[findCustomer].products[existedProductItemIndex] = updatedProductItem;
            state.customers[findCustomer].totalPrice -= state.customers[findCustomer].products[existedProductItemIndex].price;
        },
        removeProductItem: (state, action) => {
            const customers = current(state.customers)
            let findCustomer = customers.findIndex(item => item.customerId === action.payload.customerId);
            let existedProductItemIndex = state.customers[findCustomer].products.findIndex(item => item.code === action.payload.productCode);
            state.customers[findCustomer].totalPrice -= state.customers[findCustomer].products[existedProductItemIndex].totalAmount;
            state.customers[findCustomer].products.splice(existedProductItemIndex, 1);
        },
        removeProduct: (state, action) => {
            const customers = current(state.customers)
            let findCustomerIndex = customers.findIndex(item => item.customerId === +action.payload);
            let findCustomer = customers.find(item => item.customerId === +action.payload);
            state.customers.splice(findCustomerIndex, 1);
        },
        addCustomers: (state, action) => {
            state.customers.push(action.payload);
        }
    }
})

export const { addNewProduct, addCustomers, increase, decrease, removeProductItem, removeProduct } = salesInvoice.actions;
export default salesInvoice.reducer;