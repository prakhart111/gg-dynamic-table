import React from 'react'
const AttributeIcon = (props) => {
  return (
    <div 
    onClick={props.onClick}
    className={`transition hover:scale-[0.99] w-fit min-w-[70px] text-center h-fit p-1 m-1 bg-white rounded flex font-semibold text-sm items-center align-center justify-center gap-1
    ${props.isVisible ? "border border-l-8 border-blue-500" : "border border-slate-500"}
    `}>
        <span>{props?.attributeName}</span>
    </div>
  )
}

export default AttributeIcon