import React from 'react'

export const GoldButton = (props: any) => {
  return (
    <div
      {...props}
      className={
        'button-gold py-2 flex items-center justify-center font-semibold text-black cursor-pointer ' +
        props.className
      }
    >
      {props.children}
    </div>
  )
}
