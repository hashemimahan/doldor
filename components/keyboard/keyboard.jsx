'use client'
import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import { GiKeyboard } from "react-icons/gi";
import KeyboardReact from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";
import Wrapper from '../utilities/wrapper';

function Keyboard() {
  const [isShow, setIsShow] = useState(false);

  const onCloseModalHandler = (event, state) => {
    event.stopPropagation();
    setIsShow(state)
  }
  return (
    <div className='grid place-content-center cursor-pointer group' onClick={(event) => onCloseModalHandler(event, true)}>
        <GiKeyboard size={"4.5rem"} className='group-hover:text-doldor_orange'/>
        {isShow && createPortal(<Wrapper onClose={onCloseModalHandler}>
          <KeyboardReact />
        </Wrapper>, document.body)}
    </div>
  )
}

export default Keyboard