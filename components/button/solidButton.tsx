export const SolidButton = (props: any) => {
  return (
    <div
      {...props}
      className={
        'button-solid py-2 flex items-center justify-center font-semibold cursor-pointer ' +
        props.className
      }
    >
      {props.children}
    </div>
  )
}
