'use client';
import React from 'react';
import {useSelector} from "react-redux";

const Page = () => {
    const item = useSelector((state) => state.counter.items);
    return (
        <div className='w-full h-full grid place-content-center font-iranYekan font-black text-3xl relative'>
            {item?.length === 0 ? <div className='w-full h-full flex justify-center items-center flex-col gap-4'><p>هیچ فاکتوری برای نمایش وجود ندارد</p><p>لطفا بر روی + کلیک کنید و فاکتور جدیدی
                    اضافه کنید</p></div> :
                <><p>لطفا برروی رسید مورد نظر کلیک کنید تا به صفحه فاکتور منتقل شوید</p></>}
        </div>
    );
};

export default Page;