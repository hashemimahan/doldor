"use client";
import React from 'react';
import {Provider} from "react-redux";
import {store} from "@/store/receipt-stor";
import { Toaster } from 'sonner';

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
            <Toaster />
        </Provider>
    );
};

export default Providers;