import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import MainReducer from "./indexReducer";

const store=configureStore({
    reducer:MainReducer,
    middleware:((getDefaultMiddleware:any)=>getDefaultMiddleware([thunk]))


},)
export default store