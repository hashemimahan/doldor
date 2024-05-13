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
                    pricePerOne: 12500,
                    discount: 2500,
                    discountPerOne: 10000,
                    totalAmount: 10000,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ],
            totalPrice: 10000,
            totalDiscount: 2500,
            totalAmount: 12500,
            totalNumber: 1,
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
                    pricePerOne: 17500,
                    discount: 2500,
                    discountPerOne: 10000,
                    totalAmount: 15000,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ],
            totalPrice: 15000,
            totalDiscount: 2500,
            totalAmount: 17500,
            totalNumber: 1,
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
                    pricePerOne: 100000,
                    discount: 10000,
                    discountPerOne: 10000,
                    totalAmount: 90000,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ],
            totalPrice: 90000,
            totalDiscount: 10000,
            totalAmount: 100000,
            totalNumber: 1,
        },
        {
            customerId: 4,
            products: [
                {
                    select: <input type={"checkbox"}/>,
                    code: 1234656,
                    barCode: 12345667,
                    product: "تخم مرغ",
                    number: 1,
                    weight: 1,
                    price: 100000,
                    pricePerOne: 100000,
                    discount: 10000,
                    discountPerOne: 10000,
                    totalAmount: 90000,
                    stock: 2,
                    remove: <FaTrashAlt />,
                }
            ],
            totalPrice: 90000,
            totalDiscount: 10000,
            totalAmount: 100000,
            totalNumber: 1,
            totalWeight: 1,
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
                toast.error('کالا در انبار موجود نمی باشد');
                return
            }
            if (existedProductItem) {
                const updatedProductItem = {
                    ...existedProductItem,
                    number: !!existedProductItem.number + action.payload.productsDetail.number && (existedProductItem.number + action.payload.productsDetail.number),
                    discount: existedProductItem.discount + existedProductItem.discountPerOne,
                    totalAmount: existedProductItem.totalAmount + (action.payload.productsDetail.price - action.payload.productsDetail.discount),
                    stock: existedProductItem.stock - 1,
                }
                state.customers[findCustomer].products[existedProductItemIndex] = updatedProductItem;
                state.customers[findCustomer].totalPrice += (action.payload.productsDetail.price - action.payload.productsDetail.discount);
                state.customers[findCustomer].totalDiscount += action.payload.productsDetail.discountPerOne;
                state.customers[findCustomer].totalAmount += action.payload.productsDetail.pricePerOne;
            } else {
                state.customers[findCustomer].products.push(action.payload.productsDetail);
                state.customers[findCustomer].totalPrice += (action.payload.productsDetail.price - action.payload.productsDetail.discount);
                state.customers[findCustomer].totalDiscount += action.payload.productsDetail.discountPerOne;
                state.customers[findCustomer].totalAmount += action.payload.productsDetail.pricePerOne;
            }
            state.customers[findCustomer].totalNumber++
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
                discount: existedProductItem.discount + existedProductItem.discountPerOne,
                totalAmount: existedProductItem.totalAmount + (existedProductItem.price - existedProductItem.discountPerOne),
                stock: existedProductItem.stock - 1,
            }
            state.customers[findCustomer].products[existedProductItemIndex] = updatedProductItem;
            state.customers[findCustomer].totalPrice += (existedProductItem.price - existedProductItem.discountPerOne);
            state.customers[findCustomer].totalDiscount += existedProductItem.discountPerOne;
            state.customers[findCustomer].totalAmount += existedProductItem.pricePerOne;
            state.customers[findCustomer].totalNumber++
        },
        decrease: (state, action) => {
            const customers = current(state.customers)
            let findCustomer = customers.findIndex(item => item.customerId === action.payload.customerId);
            let existedProductItemIndex = state.customers[findCustomer].products.findIndex(item => item.code === action.payload.productCode);
            let existedProductItem = state.customers[findCustomer].products[existedProductItemIndex];
            if (existedProductItem.number === 1) {
                state.customers[findCustomer].totalPrice -= existedProductItem.totalAmount;
                state.customers[findCustomer].totalDiscount -= existedProductItem.discount;
                state.customers[findCustomer].totalAmount -= existedProductItem.pricePerOne;
                state.customers[findCustomer].totalNumber--
                state.customers[findCustomer].products.splice(existedProductItemIndex, 1);
                return
            }
            const updatedProductItem = {
                ...existedProductItem,
                number: existedProductItem.number - 1,
                discount: existedProductItem.discount - existedProductItem.discountPerOne,
                totalAmount: existedProductItem.totalAmount - (existedProductItem.price - existedProductItem.discountPerOne),
                stock: existedProductItem.stock + 1,
            }
            state.customers[findCustomer].products[existedProductItemIndex] = updatedProductItem;
            // state.customers[findCustomer].totalPrice -= state.customers[findCustomer].products[existedProductItemIndex].price;
            state.customers[findCustomer].totalPrice -= (existedProductItem.price - existedProductItem.discountPerOne);
            state.customers[findCustomer].totalDiscount -= existedProductItem.discountPerOne;
            state.customers[findCustomer].totalAmount -= existedProductItem.pricePerOne;
            state.customers[findCustomer].totalNumber--

        },
        removeProductItem: (state, action) => {
            const customers = current(state.customers)
            let findCustomer = customers.findIndex(item => item.customerId === action.payload.customerId);
            let existedProductItemIndex = state.customers[findCustomer].products.findIndex(item => item.code === action.payload.productCode);
            state.customers[findCustomer].totalPrice -= state.customers[findCustomer].products[existedProductItemIndex].totalAmount;
            state.customers[findCustomer].totalDiscount -= state.customers[findCustomer].products[existedProductItemIndex].discount;
            state.customers[findCustomer].products.splice(existedProductItemIndex, 1);
        },
        removeProduct: (state, action) => {
            const customers = current(state.customers)
            let findCustomerIndex = customers.findIndex(item => item.customerId === +action.payload);
            let findCustomer = customers.find(item => item.customerId === +action.payload);
            state.customers.splice(findCustomerIndex, 1);
        },
        removeAllProducts: (state, action) => {
            const customers = current(state.customers)
            let findCustomerIndex = customers.findIndex(item => item.customerId === action.payload.customerId);
            let findCustomer = customers.find(item => item.customerId === action.payload.customerId);

            console.log(findCustomerIndex);
            console.log(findCustomer);

            if (state.customers[findCustomerIndex].products.length === 0) {
                toast.error("هیچ آیتمی وجود ندارد!");
                return
            }

            state.customers[findCustomerIndex].products = [];
            state.customers[findCustomerIndex].totalAmount = 0;
            state.customers[findCustomerIndex].totalDiscount = 0;
            state.customers[findCustomerIndex].totalPrice = 0;
        },
        addCustomers: (state, action) => {
            state.customers.push(action.payload);
        }
    }
})

export const { addNewProduct, addCustomers, increase, decrease, removeProductItem, removeProduct, removeAllProducts } = salesInvoice.actions;
export default salesInvoice.reducer;