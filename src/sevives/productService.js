import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const getProduct = createAsyncThunk(
    'products/getProducts',
    async () => {
        const res = await customAPI.get('products');
        return res.data;
    }
)

