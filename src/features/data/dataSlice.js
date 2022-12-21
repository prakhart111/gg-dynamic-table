import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const API = "http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-05-01&endDate=2021-05-03";

const initialState = {
    loading:false,
    data:[],
    error:"",
}

export const fetchData = createAsyncThunk('data/fetchData',()=>{
    return axios.get(API)
    .then((response)=>response.data)
})

const dataSlice = createSlice({
    name:"data",
    initialState,
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
