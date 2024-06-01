import React from 'react';
import classes from "./product-table.module.css";
import ProductsItem from './products-item';

let tableHeader = [
    "کد کالا",
    "ردیف",
    "علامت",
    "کد",
    "بارکد",
    "نام محصول",
    "موجودی",
    "واحد",
    "قیمت خرید",
    "قیمت فروش",
    "تخفیف",
    "قیمت سایت",
    "تخفیف",
];
const ProductsTable = () => {
    return (
        <section>
            <div className={`${classes.table}`} dir='rtl'>
                {tableHeader.map((item, index) => {
                    return (
                        <div className='common' key={crypto.randomUUID()}>
                            {item}
                        </div>
                    )
                })}
            </div>
            <ProductsItem />
        </section>
    );
};

export default ProductsTable;