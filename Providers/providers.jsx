"use client";
import React from 'react';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "@/store/receipt-stor";
import { Toaster } from 'sonner';
import TokenProvider from './token-provider';

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <TokenProvider />
            {children}
            <Toaster />
        </Provider>
    );
};

export default Providers;