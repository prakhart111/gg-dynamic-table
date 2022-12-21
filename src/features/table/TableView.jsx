import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../data/dataSlice'
import './table.css'

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
  
  // React.useEffect(()=>{
  //   newData["Ad Request"]?.forEach((item,index)=>{
  //     newData["Fill Rate"].push( (item*100)/newData["Ad Response"][index] )
  //   })
  // },[])


  columns?.forEach((col)=>{
    rows?.forEach((row)=>{
      switch(col?.nameOfAttribute){
        case "Date":
          newData["Date"].push(row?.date);
          break;
        case "App Name":
          newData["App Name"].push(row?.app_id);
          break;
        case "Ad Request":
          newData["Ad Request"].push(row?.requests);
          break;
        case "Ad Response":
          newData["Ad Response"].push(row?.responses);
          break;
        case "Impressions":
          newData["Impressions"].push(row?.impressions);
          break;
        case "Click":
          newData["Click"].push(row?.clicks);
          break;
        case "Fill Rate":
          newData["Fill Rate"].push( (row?.requests / row?.responses).toFixed(4) *100 );
          break;
        case "CTR":
          newData["CTR"].push( (row?.clicks/row?.impressions).toFixed(3) *100)
      }
    })
  })
  console.log("@",newData)

  return (
    <div>
        <table className='border-2 transition'>
                {columns?.map((col)=>{
                    return <tr className='border-2'>
                              {col?.visible && <th className='transition border-2 border-slate-400 min-w-[120px] p-2 '>{col?.nameOfAttribute}</th>}
                              {col?.visible && newData[`${col?.nameOfAttribute}`]?.map((item)=>{
                                  return <td className='transition border-2 border-slate-400' >{item}</td>
                              })}
                            </tr>
                })}
        </table>

        {/* <table>
          <tr>
              <td>

                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>col1row1</td>
                    </tr>
                    <tr>
                      <td>col1row2</td>
                    </tr>
                  </tbody>

                </table>
              </td>
              
          </tr>
        </table> */}


        {/* <table>
          <tr className='border-2'>
                {columns?.map((col)=>{
                    <td>
                      <table>
                        <thead>
                          <tr>
                          <th className='transition border-2 border-slate-400 min-w-[120px] p-2 '>{col?.nameOfAttribute}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            newData[`${col?.nameOfAttribute}`]?.map((item)=>{
                              return <tr>
                                <td>{item}</td>
                              </tr>
                            })
                          }
                        </tbody>
                      </table>
                    </td>
                })}
          </tr>
        </table> */}
    </div>
  )
}
