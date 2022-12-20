import React from 'react'
import settings from "../assets/settings.gif"
const IconComponent = (props) => {
  return (
    <div 
    onClick={props.onClick}
    className='border-2 border-blue-300 transition hover:scale-[0.99] w-fit h-fit p-1 m-1 bg-white rounded flex font-semibold text-sm items-center align-center gap-1'>
        <img src={settings} width="20px"/>
        <span>{props.text}</span>
    </div>
  )
}

export default IconComponent