import React from 'react'

function Wrapper({children, onClose}) {
  return (
    <div className='fixed inset-0 bg-black/25 grid place-content-center z-[500000000000000000000000000]' onClick={(event) => onClose(event, false)}>
        {children}
    </div>
  )
}

export default Wrapper