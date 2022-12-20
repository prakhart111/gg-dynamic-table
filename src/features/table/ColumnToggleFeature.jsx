// Toggle visibilty of the column
// reorder it as well

import React from 'react'
import { changeVisibility } from './tableSlice'
import { useSelector,useDispatch } from 'react-redux'
import AttributeIcon from '../../components/AttributeIcon'

export const ColumnToggleFeature = () => {
    const dispatch = useDispatch()
    const columns = useSelector((state)=>state.table.attributes)
    console.log("DATA RECIEVED",columns)

  return (
    <div className='flex p-5 m-2 border-2 rounded transition'>
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
                }}/>
            })
        }
    </div>
  )
}
