"use client";
import { addBatchProduct } from "@/reducers/sales-invoice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Modal({ unit, maxValue, onClose, customerId, productCode }) {
  const [number, setNumber] = useState(null);
  let dispatch = useDispatch();
  const onSubmitFormHandler = (event) => {
    event.preventDefault();
    let status = unit !== undefined ? "number" : "weight";
    let payload = {
        customerId,
        productCode,
        [status]: +number,
    };
    dispatch(addBatchProduct(payload));

    setNumber(null);
    onClose(false, productCode)
  };

  return (
    <div className="fixed inset-0 grid place-content-center z-[100000000000000] isolate">
      <div className="fixed inset-0 bg-black/10 -z-10" onClick={onClose.bind(null, false, productCode)} />
      <form onSubmit={onSubmitFormHandler} className="flex flex-col gap-2">
        <input
          type="number"
          step={unit !== undefined ? "1" : "0.1"}
          dir="rtl"
          className="pr-2 py-4 w-96 h-16 font-iranYekan font-black text-2xl"
          required
          onChange={(event) => setNumber(event.target.value)}
          value={number}
        />
        <button
          type="submit"
          className="self-center bg-white font-iranYekan font-black text-xl py-4 px-12 rounded-md"
        >
          ثبت
        </button>
      </form>
    </div>
  );
}

export default Modal;
