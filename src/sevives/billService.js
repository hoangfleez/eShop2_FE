import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";


export const billCart = createAsyncThunk(
    'bill/orderUser',
    async ()=>{
        const res = await customAPI.get(`/order/bill`);
        return res.data;
    }
)