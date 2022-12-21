import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../data/dataSlice'
import './table.css'
import { getDataColumnWise } from '../../utils/util_functions'

export const TableView = () => {

  const columns = useSelector((state)=>state.table.attributes)
  const rows = useSelector((state)=>state.data.data.data)
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(fetchData())
  },[])
  
  const newData = getDataColumnWise(columns,rows);

  return (
    <div>
        <table className='border-2 transition overflow-scroll w-fit'>
                {columns?.map((col)=>{
                    return <tr className='border-2'>
                              {col?.visible && <th className='transition border-2 border-slate-400 min-w-[120px] p-2 '>{col?.nameOfAttribute}</th>}
                              {col?.visible && newData[`${col?.nameOfAttribute}`]?.map((item)=>{
                                  return <td className='transition border-2 border-slate-400' >{item}</td>
                              })}
                            </tr>
                })}
        </table>
    </div>
  )
}
