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

export const deleteProduct = createAsyncThunk(
    'products/deleteProducts',
    async (id) => {

       let abc = await customAPI.delete(`products/${id}`);
        console.log(abc)
        return id;
    }
)

export const findProductById = createAsyncThunk(
    'products/findProducts',
    async (id) => {
        const res = await customAPI.get(`products/${id}`);
        return res.data;
    }
)
export const editProduct = createAsyncThunk(
    'products/editProduct',
    async (arg, thunkAPI) => {
        await customAPI.put(`products/${arg.id}`,arg)
    }
)

