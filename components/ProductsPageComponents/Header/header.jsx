'use client'
import { useState } from "react";
import Button from "./button";
import ListItem from "./listItem";
import { createPortal } from "react-dom";
import Wrapper from "@/components/utilities/wrapper";
import CreateProduct from "../createProduct/createProduct";

const items = [
    {
        name: "ایجاد محصول",
        toggleModalState: true,
        editedProduct: false,
    },
    {
        name: "ویرایش محصول",
        toggleModalState: true,
        editedProduct: true,
    },
    {
        name: "حذف محصول",
        type: "delete",
    },
    {
        name: "تنظیمات"
    },
];

const Header = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const [editedProduct, setEditedProduct] = useState(false)

    const onToggleModalHandler = (event, state, action) => {
        event.stopPropagation()
        setToggleModal(state)
        setEditedProduct(action)
    }
    return (
        <div className="w-full flex flex-row-reverse justify-between px-4 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
            <ul className="w-fit h-full flex flex-row-reverse gap-12 px-2">
                {items.map(item => {
                    return(
                        <ListItem {...item} onToggle={onToggleModalHandler} key={crypto.randomUUID()}/>
                    )
                })}
            </ul>
            <Button className={"common"}>
                چاپ کلیه محصولات
            </Button>
            {
                toggleModal && createPortal(
                    <Wrapper onClose={onToggleModalHandler} className={"bg-white/80"}>
                        <CreateProduct editedProduct={editedProduct}/>
                    </Wrapper>
                , document.body)
            }
        </div>
    );
};

export default Header;