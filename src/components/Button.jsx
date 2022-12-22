import React from 'react'

const Button = (props) => {
  return (
    <div 
    onClick={props.onClick}
    className={`transition hover:scale-[0.99] w-fit min-w-[70px] ${props?.fill ? "bg-blue-500 text-white" : "bg-white text-blue-600 font-bold border border-blue-500"}
    p-2 m-1 rounded flex font-semibold text-sm items-center justify-center`}>
         <span>{props?.text}</span>
    </div>
  )
}

export default Button