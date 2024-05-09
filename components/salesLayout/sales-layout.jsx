import React from 'react';
import { TbLayout2 } from "react-icons/tb";
import Receipt from "@/components/ReceiptPagination/receipt";
import ReceiptTabs from "@/components/ReceiptTabs/receipt-tabs";

const SalesLayout = () => {
    return (
        <section className={"w-full h-auto bg-teal-800 flex items-center overflow-x-auto overflow-y-clip pr-4"} dir={"rtl"}>
            <div><TbLayout2 size={"2rem"}/></div>
            <Receipt />
            <ReceiptTabs />
        </section>
    );
};

export default SalesLayout;