import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getProduct = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await customAPI.get('products');
        return res.data;
    }
)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (data)=>{
        await customAPI.post('products',data);
        const res = await customAPI.get('products');
        return res.data;
    }
)

