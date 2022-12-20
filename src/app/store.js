import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../features/table/tableSlice"
import { createLogger } from "redux-logger";
const reduxLogger = createLogger()

const store = configureStore({
    reducer:{
        table:tableReducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(reduxLogger)
    },
})

export default store