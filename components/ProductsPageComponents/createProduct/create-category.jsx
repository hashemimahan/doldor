import React from 'react';
import classes from './create-category.module.css'

const CreateCategory = () => {
    return (
        <from className={"w-full grid grid-cols-[2rem_1fr_1fr_1fr_1fr_1fr_1fr_2rem] gap-4"}>
            <div dir='rtl' className='col-start-2 col-end-[-2] grid grid-cols-[5.75rem_1fr] gap-4 h-[2.5rem] relative'>
                <label className={`justify-self-end self-center common ${classes.inp}`} htmlFor="categoryName">نام دسته</label>
                <input className={`${classes.inp} col-start-2 col-end-[-1]`} type="text" id='categoryName' required/>
            </div>
            <div dir='rtl' className='col-start-2 col-end-[-2] grid grid-cols-[5.75rem_1fr] gap-4 h-[2.5rem] relative'>
                <label className={`justify-self-end self-center common ${classes.inp}`} htmlFor="subCategoryName">نام زیردسته</label>
                <input className={`${classes.inp} col-start-2 col-end-[-1]`} type="text" id='subCategoryName' required/>
            </div>
            <div dir='rtl' className='col-start-2 col-end-[-2] grid grid-cols-[5.75rem_1fr] gap-4 h-[2.5rem]'>
                <label className='justify-self-end self-center common' htmlFor="brandName">نام برند</label>
                <input className={`${classes.inp} col-start-2 col-end-[-1]`} type="text" id='brandName'/>
            </div>
            <div className='flex mt-2 col-start-2 col-span-4'>
                <button className='border-[2px] border-[#DCDCDC] text-doldor_text rounded-lg p-4 basis-1/2 common hover:bg-[#DCDCDC]'>ثبت</button>
            </div>
        </from>
    );
};

export default CreateCategory;