"use client";
import { createSlice, current } from "@reduxjs/toolkit";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "sonner";

const initialState = {
  customers: [
    {
      customerId: 1,
      products: [
        {
          select: <input type={"checkbox"} />,
          code: 1234656,
          barCode: 12345667,
          product: "فندک",
          number: 1,
          unit: "number",
          price: 12500,
          pricePerOne: 12500,
          discount: 2500,
          discountPerOne: 10000,
          totalAmount: 10000,
          stock: 500,
          tsw: 501,
          remove: <FaTrashAlt />,
        },
      ],
      totalPrice: 10000,
      totalDiscount: 2500,
      totalAmount: 12500,
      totalNumber: 1,
      totalWeight: 0,
    },
    {
      customerId: 2,
      products: [
        {
          select: <input type={"checkbox"} />,
          code: 10254586795,
          barCode: 12345667,
          product: "سوجوق",
          number: 1,
          unit: "number",
          price: 17500,
          pricePerOne: 17500,
          discount: 2500,
          discountPerOne: 10000,
          totalAmount: 15000,
          stock: 2,
          tsw: 3,
          remove: <FaTrashAlt />,
        },
      ],
      totalPrice: 15000,
      totalDiscount: 2500,
      totalAmount: 17500,
      totalNumber: 1,
      totalWeight: 0,
    },
    {
      customerId: 3,
      products: [
        {
          select: <input type={"checkbox"} />,
          code: 7546954213000,
          barCode: 12345667,
          product: "تخم مرغ",
          number: 1,
          unit: "number",
          price: 100000,
          pricePerOne: 100000,
          discount: 10000,
          discountPerOne: 10000,
          totalAmount: 90000,
          stock: 50,
          tsw: 51,
          remove: <FaTrashAlt />,
        },
      ],
      totalPrice: 90000,
      totalDiscount: 10000,
      totalAmount: 100000,
      totalNumber: 1,
      totalWeight: 0,
    },
    {
      customerId: 4,
      products: [
        {
          select: <input type={"checkbox"} />,
          code: 909054682144,
          barCode: 12345667,
          product: "سیب زمینی",
          // number: 1,
          weight: 1,
          unit: "kilo",
          price: 25000,
          pricePerOne: 25000,
          discount: 0,
          discountPerOne: 0,
          totalAmount: 25000,
          stock: 10,
          tsw: 11,
          remove: <FaTrashAlt />,
        },
      ],
      totalPrice: 25000,
      totalDiscount: 0,
      totalAmount: 25000,
      totalNumber: 0,
      totalWeight: 1,
    },
  ],
};
export const salesInvoice = createSlice({
  name: "salesInvoice",
  initialState,
  reducers: {
    addNewProduct: (state, action) => {
      const customers = current(state.customers);
      let findCustomer = customers.findIndex(
        (item) => item.customerId === action.payload.customerId
      );
      let existedProductItemIndex = state.customers[
        findCustomer
      ].products.findIndex((item) => item.code === action.payload.productCode);
      let existedProductItem =
        state.customers[findCustomer].products[existedProductItemIndex];
      if (existedProductItem && existedProductItem?.stock === 0) {
        toast.error("کالا در انبار موجود نمی باشد");
        return;
      }
      if (existedProductItem) {
          let status = existedProductItem.unit === "number" ? "number" : "weight";
        const updatedProductItem = {
          ...existedProductItem,
        //   number:
        //     !!existedProductItem.number &&
        //     existedProductItem.number + action.payload.productsDetail.number,
        //   weight:
        //     !!existedProductItem.weight &&
        //     existedProductItem.weight + action.payload.productsDetail.weight,
        [status]: existedProductItem[status] + action.payload.productsDetail[status],
          discount:
            existedProductItem.discount + existedProductItem.discountPerOne,
          totalAmount:
            existedProductItem.totalAmount +
            (action.payload.productsDetail.price -
              action.payload.productsDetail.discount),
          stock: existedProductItem.stock - 1,
        };
        state.customers[findCustomer].products[existedProductItemIndex] =
          updatedProductItem;
        state.customers[findCustomer].totalPrice +=
          action.payload.productsDetail.price -
          action.payload.productsDetail.discount;
        state.customers[findCustomer].totalDiscount +=
          action.payload.productsDetail.discountPerOne;
        state.customers[findCustomer].totalAmount +=
          action.payload.productsDetail.pricePerOne;
        !!existedProductItem?.number &&
          state.customers[findCustomer].totalNumber++;
        !!existedProductItem?.weight &&
          state.customers[findCustomer].totalWeight++;
      } else {
        state.customers[findCustomer].products.push(
          action.payload.productsDetail
        );
        state.customers[findCustomer].totalPrice +=
          action.payload.productsDetail.price -
          action.payload.productsDetail.discount;
        state.customers[findCustomer].totalDiscount +=
          action.payload.productsDetail.discountPerOne;
        state.customers[findCustomer].totalAmount +=
          action.payload.productsDetail.pricePerOne;
        !!action.payload.productsDetail?.number &&
          state.customers[findCustomer].totalNumber++;
        !!action.payload.productsDetail?.weight &&
          state.customers[findCustomer].totalWeight++;
      }
      console.log(existedProductItem);
      console.log(customers);
    },
    increase: (state, action) => {
      const customers = current(state.customers);
      let findCustomer = customers.findIndex(
        (item) => item.customerId === action.payload.customerId
      );
      let existedProductItemIndex = state.customers[
        findCustomer
      ].products.findIndex((item) => item.code === action.payload.productCode);
      let existedProductItem =
        state.customers[findCustomer].products[existedProductItemIndex];
      if (existedProductItem.stock === 0) {
        toast.error("کالا در انبار موجود نمی باشد");
        return;
      }
        let status = existedProductItem.unit === "number" ? "number" : "weight";
      const updatedProductItem = {
        ...existedProductItem,
        // number: !!existedProductItem.number && existedProductItem.number + 1,
        // weight: !!existedProductItem.weight && existedProductItem.weight + 1,
        [status]: existedProductItem[status] + 1,
        discount:
          existedProductItem.discount + existedProductItem.discountPerOne,
        totalAmount:
          existedProductItem.totalAmount +
          (existedProductItem.price - existedProductItem.discountPerOne),
        stock: existedProductItem.stock - 1,
      };
      console.log(current(existedProductItem));
      state.customers[findCustomer].products[existedProductItemIndex] =
        updatedProductItem;
      state.customers[findCustomer].totalPrice +=
        existedProductItem.price - existedProductItem.discountPerOne;
      state.customers[findCustomer].totalDiscount +=
        existedProductItem.discountPerOne;
      state.customers[findCustomer].totalAmount +=
        existedProductItem.pricePerOne;
      !!existedProductItem.number &&
        state.customers[findCustomer].totalNumber++;
      !!existedProductItem.weight &&
        state.customers[findCustomer].totalWeight++;
    },
    decrease: (state, action) => {
      const customers = current(state.customers);
      let findCustomer = customers.findIndex(
        (item) => item.customerId === action.payload.customerId
      );
      let existedProductItemIndex = state.customers[
        findCustomer
      ].products.findIndex((item) => item.code === action.payload.productCode);
      let existedProductItem =
        state.customers[findCustomer].products[existedProductItemIndex];
      if (
        (!!existedProductItem.number && existedProductItem.number === 1) ||
        (!!existedProductItem.weight && existedProductItem.weight === 1)
      ) {
        state.customers[findCustomer].totalPrice -=
          existedProductItem.totalAmount;
        state.customers[findCustomer].totalDiscount -=
          existedProductItem.discount;
        state.customers[findCustomer].totalAmount -=
          existedProductItem.pricePerOne;
        !!existedProductItem.number &&
          state.customers[findCustomer].totalNumber--;
        !!existedProductItem.weight &&
          state.customers[findCustomer].totalWeight--;
        state.customers[findCustomer].products.splice(
          existedProductItemIndex,
          1
        );
        return;
      }
      let status = existedProductItem.unit === "number" ? "number" : "weight";
      const updatedProductItem = {
        ...existedProductItem,
        // number: !!existedProductItem.number && existedProductItem.number - 1,
        // weight: !!existedProductItem.weight && existedProductItem.weight - 1,
        [status]: existedProductItem[status] - 1,
        discount:
          existedProductItem.discount - existedProductItem.discountPerOne,
        totalAmount:
          existedProductItem.totalAmount -
          (existedProductItem.price - existedProductItem.discountPerOne),
        stock: existedProductItem.stock + 1,
      };
      /* if (existedProductItem.unit === "number") {
        delete existedProductItem.weight
      } else if (existedProductItem.unit === "weight") {
        delete existedProductItem.number
      } */
      console.log(current(existedProductItem));
      state.customers[findCustomer].products[existedProductItemIndex] =
        updatedProductItem;
      // state.customers[findCustomer].totalPrice -= state.customers[findCustomer].products[existedProductItemIndex].price;
      state.customers[findCustomer].totalPrice -=
        existedProductItem.price - existedProductItem.discountPerOne;
      state.customers[findCustomer].totalDiscount -=
        existedProductItem.discountPerOne;
      state.customers[findCustomer].totalAmount -=
        existedProductItem.pricePerOne;
      !!existedProductItem.number &&
        state.customers[findCustomer].totalNumber--;
      !!existedProductItem.weight &&
        state.customers[findCustomer].totalWeight--;
    },
    removeProductItem: (state, action) => {
      const customers = current(state.customers);
      let findCustomer = customers.findIndex(
        (item) => item.customerId === action.payload.customerId
      );
      let existedProductItemIndex = state.customers[
        findCustomer
      ].products.findIndex((item) => item.code === action.payload.productCode);
      state.customers[findCustomer].totalPrice -=
        state.customers[findCustomer].products[
          existedProductItemIndex
        ].totalAmount;
      state.customers[findCustomer].totalDiscount -=
        state.customers[findCustomer].products[
          existedProductItemIndex
        ].discount;
      state.customers[findCustomer].totalAmount -=
        state.customers[findCustomer].products[existedProductItemIndex].pricePerOne * (state.customers[findCustomer].products[existedProductItemIndex].number || state.customers[findCustomer].products[existedProductItemIndex].weight);
      state.customers[findCustomer].totalNumber -=
        state.customers[findCustomer].products[existedProductItemIndex]
          ?.number || 0;
      state.customers[findCustomer].totalWeight -=
        state.customers[findCustomer].products[existedProductItemIndex]
          ?.weight || 0;
      state.customers[findCustomer].products.splice(existedProductItemIndex, 1);
    },
    removeProduct: (state, action) => {
      const customers = current(state.customers);
      let findCustomerIndex = customers.findIndex(
        (item) => item.customerId === +action.payload
      );
      let findCustomer = customers.find(
        (item) => item.customerId === +action.payload
      );
      state.customers.splice(findCustomerIndex, 1);
    },
    removeAllProducts: (state, action) => {
      const customers = current(state.customers);
      let findCustomerIndex = customers.findIndex(
        (item) => item.customerId === action.payload.customerId
      );
      let findCustomer = customers.find(
        (item) => item.customerId === action.payload.customerId
      );

      if (state.customers[findCustomerIndex].products.length === 0) {
        toast.error("هیچ آیتمی وجود ندارد!");
        return;
      }

      state.customers[findCustomerIndex].products = [];
      state.customers[findCustomerIndex].totalAmount = 0;
      state.customers[findCustomerIndex].totalDiscount = 0;
      state.customers[findCustomerIndex].totalPrice = 0;
      state.customers[findCustomerIndex].totalNumber = 0;
      state.customers[findCustomerIndex].totalWeight = 0;
    },
    addCustomers: (state, action) => {
      state.customers.push(action.payload);
    },
    changeUnit: (state, action) => {
      const customers = current(state.customers);
      let findCustomerIndex = customers.findIndex(
        (item) => item.customerId === action.payload.customerId
      );
      let findCustomer = customers.find(
        (item) => item.customerId === action.payload.customerId
      );
      let existedProductItemIndex = state.customers[
        findCustomerIndex
      ].products.findIndex((item) => item.code === action.payload.productCode);
      let existedProductItem =
        state.customers[findCustomerIndex].products[existedProductItemIndex];

      state.customers[findCustomerIndex].products[
        existedProductItemIndex
      ].unit = action.payload.unit;

      if (action.payload.unit === "number") {
        state.customers[findCustomerIndex].products[
          existedProductItemIndex
        ].number = existedProductItem.weight;
        state.customers[findCustomerIndex].totalWeight -=
          existedProductItem.weight;
        state.customers[findCustomerIndex].totalNumber +=
          existedProductItem.weight;
        delete state.customers[findCustomerIndex].products[
          existedProductItemIndex
        ].weight;
      } else {
        state.customers[findCustomerIndex].products[
          existedProductItemIndex
        ].weight = existedProductItem.number;
        state.customers[findCustomerIndex].totalWeight +=
          existedProductItem.number;
        state.customers[findCustomerIndex].totalNumber -=
          existedProductItem.number;
        delete state.customers[findCustomerIndex].products[
          existedProductItemIndex
        ].number;
      }
    },
    addBatchProduct: (state, action) => {
      const customers = current(state.customers);
      let findCustomerIndex = customers.findIndex(
        (item) => item.customerId === action.payload.customerId
      );
      let existedProductItemIndex = state.customers[
        findCustomerIndex
      ].products.findIndex((item) => item.code === action.payload.productCode);
      let existedProductItem =
        state.customers[findCustomerIndex].products[existedProductItemIndex];
      let existedCustomer = state.customers[findCustomerIndex];
      console.log(action.payload);
      console.log(current(existedCustomer));
      console.log(current(existedProductItem));

      let enteredNumber = action.payload.number || action.payload.weight;

      if (existedProductItem.tsw < enteredNumber) {
        toast("jjjjjjموجودی کل انبار: " + existedProductItem.tsw);
        return;
      }
      if (!!action.payload.weight) {
        if (
          existedProductItem.stock + existedProductItem.weight >=
          action.payload.weight
        ) {
          existedProductItem.stock =
            existedProductItem.stock +
            existedProductItem.weight -
            action.payload.weight;
          existedProductItem.weight = action.payload.weight;
          existedProductItem.discount =
            existedProductItem.discountPerOne * existedProductItem.weight;
          existedProductItem.totalAmount =
            existedProductItem.pricePerOne * action.payload.weight -
            existedProductItem.discount;

          
            // existedCustomer.totalWeight = existedCustomer.products.reduce((sum, product) => sum + product.weight, 0);
            // existedCustomer.totalAmount = existedCustomer.products.reduce((sum, product) => sum + (product.pricePerOne * product.weight), 0);
            // existedCustomer.totalDiscount = existedCustomer.products.reduce((sum, product) => sum + (product.discountPerOne * product.weight), 0);
            // existedCustomer.totalPrice = existedCustomer.products.reduce((sum, product) => sum + product.totalAmount, 0);
  
            console.log("weight");
        } else {
            console.log(existedCustomer);
            console.log(existedProductItem);
          toast(
            "aaaaaaموجودی انبار: " +
              (existedProductItem.stock + existedProductItem.weight)
          );
        }
      } else if (!!action.payload.number) {
        if (
          existedProductItem.stock + existedProductItem.number >=
          action.payload.number
        ) {
          existedProductItem.stock =
            existedProductItem.stock +
            existedProductItem.number -
            action.payload.number;
          existedProductItem.number = action.payload.number;
          existedProductItem.discount =
            existedProductItem.discountPerOne * existedProductItem.number;
          existedProductItem.totalAmount =
            existedProductItem.pricePerOne * action.payload.number -
            existedProductItem.discount;

            // existedCustomer.totalNumber = existedCustomer.products.reduce((sum, product) => sum + product.number, 0);
        //   existedCustomer.totalAmount = existedCustomer.products.reduce((sum, product) => sum + (product.pricePerOne * product.number), 0);
        //   existedCustomer.totalDiscount = existedCustomer.products.reduce((sum, product) => sum + (product.discountPerOne * product.number), 0);
            // existedCustomer.totalPrice = existedCustomer.products.reduce((sum, product) => sum + product.totalAmount, 0);

            console.log("number");
        } else {
            console.log(existedCustomer);
            console.log(existedProductItem);
          toast(
            "bbbbbbbbموجودی انبار: " +
              (existedProductItem.stock + existedProductItem.number)
          );
        }
      }
      existedCustomer.totalAmount = existedCustomer.products.reduce((sum, product) => sum + (product.pricePerOne * (product.number || product.weight)), 0);
      existedCustomer.totalDiscount = existedCustomer.products.reduce((sum, product) => sum + (product.discountPerOne * (product.number || product.weight)), 0);
    existedCustomer.totalPrice = existedCustomer.products.reduce((sum, product) => sum + product.totalAmount, 0);

    existedCustomer.totalWeight = existedCustomer.products.reduce((sum, product) => sum + (product.weight || 0), 0)
    existedCustomer.totalNumber = existedCustomer.products.reduce((sum, product) => sum + (product.number || 0), 0)


    },
    toggleModal: (state, action) => {
      const customers = current(state.customers);
      let findCustomerIndex = customers.findIndex(
        (item) => item.customerId === action.payload.customerId
      );
      let existedProductItemIndex = state.customers[
        findCustomerIndex
      ].products.findIndex((item) => item.code === action.payload.productCode);
      let existedProductItem =
        state.customers[findCustomerIndex].products[existedProductItemIndex];
      let existedCustomer = state.customers[findCustomerIndex];

      state.customers[findCustomerIndex].products[
        existedProductItemIndex
      ].modal = action.payload.isShow;
    },
  },
});

export const {
  addBatchProduct,
  addNewProduct,
  addCustomers,
  increase,
  decrease,
  removeProductItem,
  removeProduct,
  removeAllProducts,
  changeUnit,
  toggleModal,
} = salesInvoice.actions;
export default salesInvoice.reducer;
