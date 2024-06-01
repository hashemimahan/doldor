import { cn } from '@/libs/utils'
import React from 'react'

function Wrapper({children, onClose, className}) {
  return (
    <section className='absolute inset-0 grid place-content-center'>
      <div className={cn('fixed inset-0 bg-black/75 grid place-content-center z-[20]', className)} onClick={(event) => onClose(event, false)} />
      <div className='relative z-40'>{children}</div>
    </section>
  )
}

export default Wrapper