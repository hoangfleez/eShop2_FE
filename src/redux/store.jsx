import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import productReducer from "./products/productSlice";
import categoryReducer from "./categories/categorySlice";


const store = configureStore({
    reducer: {
        products: productReducer,
        user:userReducer,
        category: categoryReducer
    }
})

export default store;