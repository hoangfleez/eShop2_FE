import {createSlice} from "@reduxjs/toolkit";
import {addCart, deleteCart, getCart} from "../../sevives/cartService.js";
import {deleteProduct} from "../../sevives/productService.js";


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

            builder.addCase(getCart.fulfilled, (state, action) => {
                state.cart = action.payload
            })

            builder.addCase(deleteCart.fulfilled,(state,action) => {
                const id = action.payload;
                const index = state.cart.findIndex(item => item.id === id);
                if (index !== -1){
                    state.cart.splice(index,1)
                }
            });

        }
    }
)

export default cartSlice.reducer;

