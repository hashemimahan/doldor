"use client";
import { addDiscount } from "@/reducers/sales-invoice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function DiscountModal({ customerId, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();

  const gatherTotalDiscount = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const discountNum = formData.get('totalDiscount');

    let payload = {
      customerId,
      typeDiscount: selectedItem,
      discount: +discountNum
    }

    dispatch(addDiscount(payload))
    onClose(event, false)
  };
  return (
    <section className="flex flex-col justify-center items-center gap-8">
      {!selectedItem && (
        <p
          className="text-doldor_orange font-iranYekan font-black text-2xl"
          dir="rtl"
        >
          لطفاً یک گزینه را انتخاب کنید !
        </p>
      )}
      <div className="flex flex-row gap-8">
        <button
          className={`font-black font-iranYekan text-4xl px-16 py-4 rounded-lg hover:bg-doldor_header_bg hover:text-doldor_text border-[.01rem] border-zinc-100 ${selectedItem === "percent" ? "bg-doldor_orange text-doldor_text border-none" : "text-white"}`}
          onClick={() => setSelectedItem("percent")}
        >
          درصدی
        </button>
        <button
          className={`font-black font-iranYekan text-4xl px-16 py-4 rounded-lg hover:bg-doldor_header_bg hover:text-doldor_text border-[.01rem] border-zinc-100 ${selectedItem === "amount" ? "bg-doldor_orange text-doldor_text border-none" : "text-white"}`}
          onClick={() => setSelectedItem("amount")}
        >
          مبلغی
        </button>
      </div>
      <form onSubmit={gatherTotalDiscount}>
        <input
          type="number"
          className="disabled:cursor-not-allowed w-[30rem] h-[4rem] font-bold font-iranYekan text-xl px-2"
          required
          disabled={!selectedItem}
          max={selectedItem === "percent" ? 100 : undefined}
          name="totalDiscount"
        />
      </form>
    </section>
  );
}

export default DiscountModal;
