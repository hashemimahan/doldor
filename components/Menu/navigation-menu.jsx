import React from 'react';
import Menu from "@/components/Menu/menu";

const NavigationMenu = (props) => {
    return (
        <>
            <div className={"fixed inset-0 bg-black/50 z-[10000]"} onClick={props.onClose}/>
            <Menu />
        </>
    );
};

export default NavigationMenu;