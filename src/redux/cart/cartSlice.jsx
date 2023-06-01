import {createSlice} from "@reduxjs/toolkit";
import {
    addCart,
    deleteCart,
    getCart,
    historyCart,
    increaseCart,
    paymentCart,
    reduceCart
} from "../../sevives/cartService.js";




const initialState = {
    cart:[]
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

            builder.addCase(increaseCart.fulfilled,(state,action) => {
                state.cart = action.payload;
            });

            builder.addCase(reduceCart.fulfilled,(state,action) => {
                state.cart = action.payload;
            });

            builder.addCase(paymentCart.fulfilled,(state,action) => {
                state.cart = action.payload;
            });

            builder.addCase(historyCart.fulfilled,(state,action) => {
                state.cart = action.payload;
            });

        }
    }
)

export default cartSlice.reducer;

