import {createSlice} from "@reduxjs/toolkit";
import {
    addProduct,
    deleteProduct,
    findProductById,
    getProduct,
    editProduct,
    searchProduct, searchCategoryProduct, fetchProducts
} from "../../sevives/productService.js";

const initialState = {
    list: [],
    currentProduct: {}
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.list = action.payload;
        });

        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.list = action.payload;

        });

        builder.addCase(editProduct.fulfilled, (state, action) => {
            state.list.products = action.payload;

        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.list = action.payload;
        });

        builder.addCase(deleteProduct.fulfilled,(state,action) => {
            const id = action.payload;
            const index = state.list.products.findIndex(item => item.id === id);
            if (index !== -1){
                state.list.products.splice(index,1)
            }
        });

        builder.addCase(findProductById.fulfilled,(state,action) => {
            state.currentProduct = action.payload;
        });

        builder.addCase(searchProduct.fulfilled, (state, action) => {
            state.list = action.payload;

        });

        builder.addCase(searchCategoryProduct.fulfilled, (state, action) => {
            state.list = action.payload;

        });
    }
});

export default productSlice.reducer;