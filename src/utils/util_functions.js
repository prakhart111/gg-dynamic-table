export const getDate = (date)=>{
    return `${date.slice(0,4)}/${date.slice(5,7)}/${date.slice(8,10)}`
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