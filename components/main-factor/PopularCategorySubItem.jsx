"use client"
import { addNewProduct } from '@/reducers/sales-invoice';
import React from 'react';
import { useDispatch } from 'react-redux';

function PopularCategorySubItem({name, receiptId, sellPrice, unit, id, discounts}) {
    let dispatch = useDispatch();
    let discountDetail = discounts.find(item => item.product_id === id);

    const onAddProductHandler = () => {
        let newItem = {
            customerId: +receiptId,
            productCode: id,
            productsDetail: {
              code: id,
              barCode: 12345667,
              product: name,
              number: 1,
              unit: unit,
              price: sellPrice,
              pricePerOne: sellPrice,
              discount: discountDetail.discount,
              discountPerOne: discountDetail.discount,
              totalAmount: sellPrice - discountDetail.discount,
              stock: 5,
              tsw: 6,
            },
          };
        dispatch(addNewProduct(newItem));
    }

  return (
    <div className={'text-2xl font-bold font-iranYekanRegular bg-emerald-900 text-white rounded-lg border p-2 cursor-pointer'} onClick={onAddProductHandler}>{name || "hi"}</div>
  )
}

export default PopularCategorySubItem;