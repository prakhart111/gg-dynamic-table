import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    sortBy:{
        attribute:null,
        type:"",
    },
    attributes:[
        {
            nameOfAttribute:"Date",
            visible:true,
        },
        {
            nameOfAttribute:"App Name",
            visible:true,
        },
        {
            nameOfAttribute:"Ad Request",
            visible:true,
        },
        {
            nameOfAttribute:"Ad Response",
            visible:true,
        },
        {
            nameOfAttribute:"Impressions",
            visible:true,
        },
        {
            nameOfAttribute:"Click",
            visible:true,
        },
        {
            nameOfAttribute:"Fill Rate",
            visible:true,
        },
        {
            nameOfAttribute:"CTR",
            visible:true,
        },
    ],
}

const tableSlice = createSlice({
    name:"table",
    initialState,
    reducers:{
        changeVisibility:(state,action)=>{
            state.attributes.forEach((singleAttrib)=>{
                if(singleAttrib.nameOfAttribute === action.payload.nameOfAttribute){
                    singleAttrib.visible = action.payload.visible
                }
            })
        }
    }
})


// const BASE_URL = process.env.BASE_URL
// const MAIN_URL = BASE_URL + "report?startDate=2021-05-01&endDate=2021-05-01"

export default tableSlice.reducer
export const {changeVisibility} = tableSlice.actions