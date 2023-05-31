import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getCategory = createAsyncThunk(
    'category/getCategory',
    async ()=>{
        console.log(1)
        const res = await customAPI.get('category');
        return res.data;
    }
)