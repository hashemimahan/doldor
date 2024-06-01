import Stock from "@/components/ProductsPageComponents/Stock/stock";

const { createSlice, current } = require("@reduxjs/toolkit");

const initialState = {
  allProducts: [
    {
      code: "1",
      row: "1",
      sign: true,
      productCode: 1,
      barcode: "1",
      productName: "ماست کاله",
      stock: <Stock />,
      unit: "number",
      buyPrice: "1",
      sellPrice: "1",
      discount: "1",
      sitePrice: "1",
      siteDiscount: "1",
    },
    {
      code: "1",
      row: "1",
      sign: true,
      productCode: 2,
      barcode: "1",
      productName: "پنیر پگاه",
      stock: <Stock />,
      unit: "number",
      buyPrice: "1",
      sellPrice: "1",
      discount: "1",
      sitePrice: "1",
      siteDiscount: "1",
    },
    {
      code: "1",
      row: "1",
      sign: true,
      productCode: 3,
      barcode: "1",
      productName: "پنیر کاله",
      stock: <Stock />,
      unit: "weight",
      buyPrice: "1",
      sellPrice: "1",
      discount: "1",
      sitePrice: "1",
      siteDiscount: "1",
    },
    {
      code: "1",
      row: "1",
      sign: true,
      productCode: 4,
      barcode: "1",
      productName: "دوغ محلی",
      stock: <Stock />,
      unit: "number",
      buyPrice: "1",
      sellPrice: "1",
      discount: "1",
      sitePrice: "1",
      siteDiscount: "1",
    },
  ],
  mainCategory: [],
  subCategory: [],
  subcategoryProducts: [],
  selectedProduct: null,
};
export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    updateProduct: (state, action) => {
      // let existedProduct = allProducts[updateData.index];
      let existedProduct = state.allProducts[action.payload.productIndex];

      let updatedProduct = {
        ...existedProduct,
        [action.payload.key]: action.payload.data,
      };

      state.allProducts[action.payload.productIndex] = updatedProduct;
      /* let updatedProduct = {
      ...existedProduct,
      [updateData.key]: newData,
    };
    setData((prev) => {
      let newData = [...prev];
      newData[updateData.index] = updatedProduct;
      return newData;
    }); */
      console.log(current(existedProduct));
      console.log(current(state.allProducts));
    },
    deleteProduct: (state, action) => {
      console.log(state.selectedProduct);
      if (state.selectedProduct === null) {
        return;
      }
      const findProduct = state.allProducts.find(
        (item) => item.productCode === +state.selectedProduct
      );
      const findProductIndex = state.allProducts.findIndex(
        (item) => item.productCode === +state.selectedProduct
      );
      state.allProducts.splice(findProductIndex, 1);
      console.log(current(state.allProducts));
    },
    onSelectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    changeUnit: (state, action) => {
      let findProductIndex = state.allProducts.findIndex(
        (item) => item.productCode === action.payload.id
      );
      let findProduct = state.allProducts.find(
        (item) => item.productCode === action.payload.id
      );
      state.allProducts[findProductIndex].unit = action.payload.unit;

      console.log(current(state.allProducts));
      /* let existedProductItemIndex = state.customers[
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
      } */
    },
  },
});

export const {
  addProducts,
  onSelectProduct,
  deleteProduct,
  updateProduct,
  changeUnit,
} = productsSlice.actions;

export default productsSlice.reducer;
