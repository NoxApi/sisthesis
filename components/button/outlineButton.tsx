import React from 'react'

export const OutlineButton = (props: any) => {
  return (
    <div
      {...props}
      className={
        'bg-[color:var(--background)] border-[1px] border-[color:var(--secondary2)] rounded-sm py-2 flex items-center justify-center cursor-pointer text-white ' +
        props.className
      }
    >
      {props.children}
    </div>
  )
}
