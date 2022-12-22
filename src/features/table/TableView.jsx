import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../data/dataSlice'
import './table.css'
import { getDataColumnWise,checkValidDate } from '../../utils/util_functions'
import LoadingSpinner from '../../components/Loader'
import Button from '../../components/Button'

export const TableView = () => {

  const columns = useSelector((state)=>state.table.attributes)
  const rows = useSelector((state)=>state.data.data.data)
  let loadingAPI = useSelector((state)=>state.data.loading)
  const dispatch = useDispatch()

  const [dates,setDates] = React.useState({
    startDate:"2021-05-01",
    endDate:"2021-05-02"
  })

  const [loading,setLoading] = React.useState(false)
  if(loadingAPI && !loading){
    setLoading(loadingAPI)
  }
  if(!loadingAPI && loading){
    setLoading(loadingAPI)
  }

  React.useEffect(()=>{
    dispatch(fetchData(dates))
  },[])
  
  const newData = getDataColumnWise(columns,rows);

  return (
    <div className='w-full flex flex-col justify-center align-center items-center m-4 mt-1'>
      <div className='w-fit flex justify-center align-center items-center mb-2'>
        <Button fill={false} text={`${dates.startDate}`}/>
        <input type="date" className='w-[1.3rem] outline-none' id="start" value={dates.startDate}
        onChange={(e)=>{
          // if(checkValidDate({startDate:e.target.value,endDate:dates.endDate}))
                setDates({
              ...dates,
              startDate:e.target.value
            })
        }}/>

        <p className='px-4 text-lg'>to</p>

        <Button fill={false} text={`${dates.endDate}`}/>
        <input type="date" className='w-[1.3rem] outline-none' id="end" value={dates.endDate}
        onChange={(e)=>{
          // if(checkValidDate({startDate:dates.startDate,endDate:e.target.value})) 
              setDates({
                ...dates,
                endDate:e.target.value
              })
          }
      }/>

        <Button text="Apply" fill={true} onClick={()=>{
          if(checkValidDate(dates)){
            dispatch(fetchData(dates))
          }
          else alert("Start Date should be less than End Date")
          }} />
      </div>

     
        {!loading ? <table className='transition overflow-scroll w-fit rounded'>
                {columns?.map((col)=>{
                    return <tr className='border rounded'>
                              {col?.visible && <th className='transition border border-slate-400 min-w-[120px] p-2 '>{col?.nameOfAttribute}</th>}
                              {col?.visible && newData[`${col?.nameOfAttribute}`]?.map((item)=>{
                                  return <td className='transition border p-1'>{item}</td>
                              })}
                            </tr>
                })}
        </table> : <div className='w-full h-[60vh] flex flex-col justify-center align-center items-center'><LoadingSpinner /></div>}
    </div>
  )
}
