import {createSlice} from "@reduxjs/toolkit";
import {billCart} from "../../sevives/billService.js";



const initialState = {
    bill : [],
}

const billSlice =  createSlice({
    name:'bill',
    initialState,
    extraReducers: builder => {
        builder.addCase(billCart.fulfilled, (state, action) => {
            state.bill = action.payload
        });

        builder.addDefaultCase((state, action) => {

        });
    }
});

export default billSlice.reducer;