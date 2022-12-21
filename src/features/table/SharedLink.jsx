import React from 'react'
import {getInvisibleAttributeString} from './tableSlice'
import { useSelector,useDispatch } from 'react-redux'
import Button from '../../components/Button';

export const SharedLink = () => {

    const dispatch = useDispatch()
    const link = useSelector((state)=>state.table.SharedLink)

    React.useEffect(()=>{
      dispatch(getInvisibleAttributeString())
      console.log("55",link)
    },[])

  return (
    <div>
        <Button text="Click to get share link" fill={true}  
        onClick={()=>{
      dispatch(getInvisibleAttributeString())
      console.log("55",link)
      alert("Shareable link",link)
            }} />
    </div>
  )
}
