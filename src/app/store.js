import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../features/table/tableSlice"
import dataReducer from "../features/data/dataSlice"
import { createLogger } from "redux-logger";
const reduxLogger = createLogger()

const store = configureStore({
    reducer:{
        table:tableReducer,
        data:dataReducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(reduxLogger)
    },
})

export default store