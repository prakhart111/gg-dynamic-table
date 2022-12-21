import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../data/dataSlice'
import './table.css'
import axios from 'axios'
import { getDate,formatNumbers,getGameName } from '../../utils/util_functions'

export const TableView = () => {

  const columns = useSelector((state)=>state.table.attributes)
  const rows = useSelector((state)=>state.data.data.data)
  const dispatch = useDispatch()

  React.useEffect(()=>{
    dispatch(fetchData())
  },[])

  // rearranging data based on columns
  const newData = {
    "Date":[],
    "App Name":[],
    "Ad Request":[],
    "Ad Response":[],
    "Impressions":[],
    "Click":[],
    "Fill Rate":[],
    "CTR":[],
  }
  console.log(newData["Date"]);
  
  columns?.forEach((col)=>{
    rows?.forEach((row)=>{
      switch(col?.nameOfAttribute){
        case "Date":
          newData["Date"].push(getDate(row?.date));
          break;
        case "App Name":
          newData["App Name"].push(getGameName(row?.app_id))
          break;
        case "Ad Request":
          newData["Ad Request"].push(formatNumbers(row?.requests));
          break;
        case "Ad Response":
          newData["Ad Response"].push(formatNumbers(row?.responses));
          break;
        case "Impressions":
          newData["Impressions"].push(formatNumbers(row?.impressions));
          break;
        case "Click":
          newData["Click"].push(formatNumbers(row?.clicks));
          break;
        case "Fill Rate":
          newData["Fill Rate"].push( `${(row?.requests / row?.responses).toFixed(4) *100}%` );
          break;
        case "CTR":
          newData["CTR"].push( `${(row?.clicks/row?.impressions).toFixed(3) *100}%`)
      }
    })
  })

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
