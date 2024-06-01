import Categories from '@/components/ProductsPageComponents/Categories/categories';
import SubCategories from '@/components/ProductsPageComponents/Categories/sub-categories';
import Header from '@/components/ProductsPageComponents/Header/header';
import Search from '@/components/ProductsPageComponents/SearchBox/Search';
import React from 'react';

const ProductLayout = ({ children }) => {
    return (
        <section className='h-fit w-full grid grid-cols-12 grid-rows-[30px_30px_80px_auto] gap-[0.4rem] select-none'>
            <div className='col-start-1 col-end-[-1] row-start-1 row-span-1 grid items-stretch'>
                <Header />
            </div>
            <div className='col-start-4 col-end-10 row-start-2 row-span-1 grid place-content-stretch overflow-clip relative'>
                <Search />
            </div>
            <div className='col-start-1 col-end-[-1] row-start-3 row-span-1 flex flex-col gap-4 justify-center' dir='rtl'>
                <Categories />
                <SubCategories />
            </div>
            <div className={"col-start-1 col-end-[-1] row-start-4 row-span-1 py-2"}>{children}</div>
        </section>
    );
};

export default ProductLayout;