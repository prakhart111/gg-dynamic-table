import React from 'react'
import { useSelector,useDispatch } from 'react-redux'


export const TableView = () => {
  const columns = useSelector((state)=>state.table.attributes)
  return (
    <div>
        <table className='border-2 transition'>
            <tr className='border-2'>
                {columns.map((col)=>{
                    return col.visible && <th className='transition border-2 border-slate-400 min-w-[120px] p-2 '>{col.nameOfAttribute}</th>
                })}
            </tr>
        </table>
    </div>
  )
}
