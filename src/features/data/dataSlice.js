import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const API = "https://go-dev.greedygame.com/v3/dummy/report?";

const initialState = {
    loading:false,
    data:[],
    error:"",
}

export const fetchData = createAsyncThunk('data/fetchData',(dates)=>{
    console.log("DATES",dates?.startDate,dates?.endDate);
    return axios.get(API + `startDate=${dates?.startDate || "2021-05-01"}&endDate=${dates?.endDate || "2021-05-03"}`)
    .then((response)=>response.data)
})


const dataSlice = createSlice({
    name:"data",
    initialState,
    reducer:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchData.rejected,(state)=>{
            state.loading = false
            state.error = "Some error occured"
        })
    }
})

export default dataSlice.reducer
