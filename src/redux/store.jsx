import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import productReducer from "./products/productSlice";
import categoryReducer from "./categories/categorySlice";
import cartReducer from "./cart/cartSlice";
import adminReducer from "./user/adminSlice.jsx";
import billReducer from "./bill/billSlice.jsx"


const store = configureStore({
    reducer: {
        products: productReducer,
        user:userReducer,
        category: categoryReducer,
        cart: cartReducer,
        admin: adminReducer,
        bill: billReducer
    }
})

export default store;