import React from 'react'
import {getInvisibleAttributeString,getLink} from './tableSlice'
import { useSelector,useDispatch } from 'react-redux'
import Button from '../../components/Button';

export const SharedLink = () => {

    const dispatch = useDispatch()
    let link = useSelector((state)=>state.table.sharedLink)
  return (
    <div>
        <Button text="Click to get share link" fill={true}  
        onClick={()=>{
            dispatch(getInvisibleAttributeString())
            dispatch(getLink())
            }} />
    </div>
  )
}
