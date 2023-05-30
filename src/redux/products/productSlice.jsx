import {createSlice} from "@reduxjs/toolkit";
import {addProduct, getProduct} from "../../sevives/productService.js";

const initialState = {
    list: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.list = action.payload;
        });

        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.products = action.payload

        });
    }
});

export default productSlice.reducer;