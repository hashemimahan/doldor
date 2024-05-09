"use client";
import Form from "@/components/form/form";
import { delay } from "@/libs/utility";
import { notFound, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from './page.module.css';

const Page = ({ params }) => {
  const { receiptId } = params;
  const items = useSelector((state) => state.counter.items);
  const router = useRouter();

  let content;

  if (+receiptId > items.length) {
    /*   */
    delay(500).then(() => {
      router.push(`/receipt/${items.length.toString()}`);
    });
    content = <p>صفحه مورد نظر یافت نشد در حال انتقال به فاکتور قبلی هستید لطفا منتظر بمانید</p>
  } else {
    content = <Form factorId={receiptId} />;
  }
  return <div className={`${classes.formWrapper}`}>{content}</div>;
};

export default Page;
