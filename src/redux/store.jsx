import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import productReducer from "./products/productSlice";


const store = configureStore({
    reducer: {
        products: productReducer,
        user:userReducer
    }
})

export default store;