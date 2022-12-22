// Toggle visibilty of the column
// reorder it as well

import React from 'react'
import { changeVisibility,getInvisibleAttributeString } from './tableSlice'
import { useSelector,useDispatch } from 'react-redux'
import AttributeIcon from '../../components/AttributeIcon'
import Button from '../../components/Button'

export const ColumnToggleFeature = () => {
    const dispatch = useDispatch()
    const columns = useSelector((state)=>state.table.attributes)

const getDataFromURL = ()=>{
  let params = new URLSearchParams(location.search);
  const listNames = []
console.log("TTTT",params.getAll("Request"))
  columns.forEach((col)=>{
    let attribName = col?.nameOfAttribute.split(" ").length === 1 ? col?.nameOfAttribute : col?.nameOfAttribute.split(' ')[1];
    let visibiltyFromURL = params.getAll(attribName)[0] === 'FALSE' ? false:true;
    if(!visibiltyFromURL && attribName !== "Date" && attribName!== "Name"){
        listNames.push(col?.nameOfAttribute)
    }
  })

  console.log("TESTTT",listNames);

  listNames.forEach((item)=>{
    dispatch(changeVisibility({
        nameOfAttribute:item,
        visible:false
    }))
  })
}
let onlyOnce = 0;
  return (
    <div className='flex flex-col rounded transition'>
        <div className='flex p-5 m-2 border-2 rounded transition'>
        {(onlyOnce === 0)?
            getDataFromURL()
            :onlyOnce=1
        }
        {
            columns.map((col)=>{
                return <AttributeIcon 
                attributeName={col.nameOfAttribute} 
                isVisible={col.visible} 
                onClick={()=>{
                    dispatch(changeVisibility({
                        nameOfAttribute:col.nameOfAttribute,
                        visible:!col.visible,
                    }))
                    // dispatch(getInvisibleAttributeString())
                }}/>
            })
        }
        </div>

        <Button text="Remove shared filter" fill={true} 
        onClick={()=>{
            const base_url = window.location.origin;
            window.location = base_url;
        }} />
    </div>
  )
}
