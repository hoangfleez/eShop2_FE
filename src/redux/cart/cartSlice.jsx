import {createSlice} from "@reduxjs/toolkit";
import {addCart} from "../../sevives/cartService.js";


const initialState = {
    cart:[],
}

const cartSlice = createSlice({
        name:'cart',
        initialState,
        extraReducers: builder => {

            builder.addCase(addCart.fulfilled, (state, action) => {
                state.cart = action.payload


            })
        }
    }
)

export default cartSlice.reducer;

