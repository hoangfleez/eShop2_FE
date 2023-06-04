import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";


export const billCart = createAsyncThunk(
    'bill/orderUser',
    async (id)=>{
        const res = await customAPI.get(`/order/bill/${id}`);
        return res.data;
    }
)