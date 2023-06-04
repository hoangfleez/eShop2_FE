import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";



export const getProduct = createAsyncThunk(
    'products/getProducts',
    async (page) => {
        const res = await customAPI.get(`products?page=${page}`);
        return res.data;
    }
)

export const addProduct = createAsyncThunk(
    'products/addProduct',
    async (data)=>{
        await customAPI.post('products',data);
        const res = await customAPI.get('products');
        console.log(res)
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

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ pageNumber, pageSize }) => {
        const response = await customAPI.get('products', {
            params: {
                _page: pageNumber,
                _limit: pageSize
            }
        })
        return response.data;
    }
);

export const searchProduct = createAsyncThunk(
    'products/searchProduct',
    async (name) => {
        const response = await customAPI.get(`products/name/?name=${name}`);
        return response.data;
    }
);

export const searchCategoryProduct = createAsyncThunk(
    'products/searchCategoryProduct',
    async (id) => {
        const response = await customAPI.get(`products/categories/${id}`);
        return response.data;
    }
);
