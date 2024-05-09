import React from 'react';

const NavigationItems = ({ children }) => {
    return (
        <li className={"px-16 text-center content-center cursor-pointer active:text-doldor_orange hover:text-doldor_orange focus:text-doldor_orange focus-within:text-doldor_orange focus-visible:text-doldor_orange"}>
            {children}
        </li>
    );
};

export default NavigationItems;