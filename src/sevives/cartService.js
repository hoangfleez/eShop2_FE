import {createAsyncThunk} from "@reduxjs/toolkit";
import customAPI from "./customAPI";

export const addCart = createAsyncThunk(
    'cart/addCart',
    async (data) => {
        const res = await customAPI.post('order-detail/add/detail/new', data);
        return res.data;
    }
)


export const getCart = createAsyncThunk(
    'cart/getCart',
    async () => {
        const res = await customAPI.get('/order-detail/order-details');
        return res.data;
    }
)


export const deleteCart = createAsyncThunk(
    'cart/deleteCart',
    async (id) => {
        const res = await customAPI.delete(`/order-detail/delete-detail/${id}`);
        return id;
    }
)

export const increaseCart = createAsyncThunk(
    'cart/increaseCart',
    async (data) => {
        const res = await customAPI.post('/order-detail/plus/detail',data);
        return res.data;
    }
)

export const reduceCart = createAsyncThunk(
    'cart/reduceCart',
    async (data)=>{
        const res = await customAPI.post('/order-detail/minus/detail',data);
        return res.data;
    }
)


export const paymentCart = createAsyncThunk(
    'cart/paymentCart',
    async (data)=>{
        const res = await customAPI.get('/order-detail/payment/detail',data);
        return res.data;
    }
)

export const historyCart = createAsyncThunk(
    'cart/historyCart',
    async ()=>{
        const res = await customAPI.get('/order-detail/history/detail');
        return res.data;
    }
)

