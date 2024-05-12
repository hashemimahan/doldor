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
                    price: 2500,
                    discount: 8000,
                    totalAmount: 0,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ],
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
                    discount: 8000,
                    totalAmount: 0,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ]
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
                    price: 75000,
                    discount: 8000,
                    totalAmount: 0,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ],
            totalPrice: 0,
            totalDiscount: 0,
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
                /* از اینجا موند*/
                /* ******************** */
                // state.customers[findCustomer]
            } else {
                state.customers[findCustomer].products.push(action.payload.productsDetail);
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
        },
        removeProductItem: (state, action) => {
            const customers = current(state.customers)
            let findCustomer = customers.findIndex(item => item.customerId === action.payload.customerId);
            let existedProductItemIndex = state.customers[findCustomer].products.findIndex(item => item.code === action.payload.productCode);
            state.customers[findCustomer].products.splice(existedProductItemIndex, 1);
        },
        removeProduct: (state, action) => {
            const customers = current(state.customers)
            let findCustomerIndex = customers.findIndex(item => item.customerId === +action.payload);
            let findCustomer = customers.find(item => item.customerId === +action.payload);
            state.customers.splice(findCustomerIndex, 1)
        },
        addCustomers: (state, action) => {
            state.customers.push(action.payload);
        }
    }
})

export const { addNewProduct, addCustomers, increase, decrease, removeProductItem, removeProduct } = salesInvoice.actions;
export default salesInvoice.reducer;