import { configureStore } from "@reduxjs/toolkit";
import salesInvoiceReducer from "@/reducers/sales-invoice-slice";
import salesInvoiceRed from "@/reducers/sales-invoice";
import tokenReducer from "@/reducers/token-slice";
import productsReducer from '@/reducers/products-page-slice'

export const store = configureStore({
    reducer: {
        counter: salesInvoiceReducer,
        salesInvoice: salesInvoiceRed,
        token: tokenReducer,
        products: productsReducer,
    }
})
