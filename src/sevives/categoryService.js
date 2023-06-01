import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getCategory = createAsyncThunk(
    'category/getCategory',
    async ()=>{
        const res = await customAPI.get('category');
        return res.data;
    }
)