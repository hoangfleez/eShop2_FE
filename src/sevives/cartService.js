import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const addCart = createAsyncThunk(
    'cart/addCart',
    async (data)=>{
        const res = await customAPI.post('order-detail/add-detail',data);
        return res.data;
    }
)