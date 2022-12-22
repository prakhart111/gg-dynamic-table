export const getDate = (date)=>{
    return `${date.slice(0,4)}-${date.slice(5,7)}-${date.slice(8,10)}`
  }
export const formatNumbers = (number)=>{
    const NumberFormatter = new Intl.NumberFormat("en-IN");
    return NumberFormatter.format(number)
}

export const getGameName = (app_id)=>{
    switch(app_id){
        case "123456":
          return "Panda Draw"
        case "789652":
          return "Number Ninja"
        case "741553":
          return "Word Crush"
        case "986321":
          return "Brain Quiz"
        case "320248":
          return "Age Calculator"
        default:
          return app_id;
      }
}

export const getDataColumnWise = (columns,rows)=>{

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

      return newData;
}

export const checkValidDate = (dates)=>{
  let startDate = new Date(
    dates.startDate.slice(0,4),
    dates.startDate.slice(5,7),
    dates.startDate.slice(8,10),
  )

  let endDate = new Date(
    dates.endDate.slice(0,4),
    dates.endDate.slice(5,7),
    dates.endDate.slice(8,10),
  )
    return startDate <= endDate
}