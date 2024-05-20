"use client";
import React, { useState } from 'react';
import {createPortal} from 'react-dom'
import { IoCalculator } from "react-icons/io5";
import Wrapper from '../utilities/wrapper';
import Calculator from './calculator';

const CalculatorWrapper = () => {
    const [isShow, setIsShow] = useState(false);

    const onToggleModalHandler = (event, action) => {
        event.stopPropagation();
        setIsShow(action)
    }
    return (
        <div className={"grid place-content-center cursor-pointer group"} onClick={(event) => onToggleModalHandler(event, true)}>
            <IoCalculator size={"4rem"} className='pointer-events-none group-hover:text-doldor_orange'/>
            {isShow && createPortal(<Wrapper onClose={onToggleModalHandler}>
                <Calculator />
            </Wrapper>, document.body)}
        </div>
    );
};

export default CalculatorWrapper;