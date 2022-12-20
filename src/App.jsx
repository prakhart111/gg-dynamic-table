import { useState } from 'react'
import AttributeIcon from './components/AttributeIcon';
import IconComponent from './components/IconComponent';
import Button from './components/Button';
import { ColumnToggleFeature } from './features/table/ColumnToggleFeature';

function App() {

  return (
    <div className="w-full text-center">
      <div className="bg-white">
      <header className="w-full bg-blue-300 h-fit p-3 font-bold text-md sm:text-xl text-left">
        Analytics
      </header>
      <ColumnToggleFeature />

      <IconComponent text="TEST" onClick={()=>console.log("hello")}/>
      <AttributeIcon attributeName="TEST" isVisible={true} onClick={()=>console.log("hello")}/>
      <AttributeIcon attributeName="TEST" isVisible={false} onClick={()=>console.log("hello")}/>
      <Button text="Apply" fill={true}  onClick={()=>console.log("hello")} />
      <Button text="Apply" fill={false}  onClick={()=>console.log("hello")} />
    </div>
    </div>
  )
}

export default App
