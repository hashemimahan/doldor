import React from 'react'

function Wrapper({children}) {
  return (
    <div className='fixed inset-0 bg-black/25'>
        {children}
    </div>
  )
}

export default Wrapper