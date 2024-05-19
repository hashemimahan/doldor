import React from 'react';
import { IoReceiptOutline } from "react-icons/io5";
import Receipt from "@/components/ReceiptPagination/receipt";
import ReceiptTabs from "@/components/ReceiptTabs/receipt-tabs";

const SalesLayout = () => {
    return (
        <section className={"w-full h-auto bg-white flex items-center overflow-x-auto overflow-y-clip pr-4"} dir={"rtl"}>
            <div><IoReceiptOutline size={"2rem"}/></div>
            <Receipt />
            <ReceiptTabs />
        </section>
    );
};

export default SalesLayout;