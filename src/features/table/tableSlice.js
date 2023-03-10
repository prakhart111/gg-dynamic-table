import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    sortBy:{
        attribute:null,
        type:"",
    },
    sharedLink:"",
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
                if(singleAttrib.nameOfAttribute === action.payload.nameOfAttribute ){
                    if(singleAttrib.nameOfAttribute === "Date" || singleAttrib.nameOfAttribute === "App Name"){
                        alert(`${singleAttrib.nameOfAttribute} can't be removed`)
                    }
                    else {singleAttrib.visible = action.payload.visible}
                }
            })
        },
        getInvisibleAttributeString:(state)=>{
            state.attributes.forEach((singleAttrib)=>{
                if(singleAttrib?.visible === false){
                    state.sharedLink = state.sharedLink + (state.sharedLink.length!==0 ? '&' : '?') +
                    `${(singleAttrib?.nameOfAttribute.split(" ").length === 1)? singleAttrib?.nameOfAttribute : singleAttrib?.nameOfAttribute.split(" ")[1]}=FALSE`
                }
            })
        },
        getLink:(state)=>{
            navigator.clipboard.writeText(`${window.location.origin}/${state.sharedLink}`)
            alert(`Copied to clipboard ! \n${window.location.origin}/${state.sharedLink}`)
        }
        
    }
})


export default tableSlice.reducer
export const {changeVisibility,getInvisibleAttributeString,getLink} = tableSlice.actions