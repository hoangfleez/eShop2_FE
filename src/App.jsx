import {Route, Routes, Navigate} from "react-router-dom";
import {Index} from "./pages";
import List from "./pages/product/List";
import AddProduct from "./pages/product/AddProduct.jsx";
import ListClient from "./pages/client/ListClient.jsx";
import Cart from "./pages/cart/Cart";


// import { List } from "./pages/product/List";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Index/>}>
                    <Route path={"/"} element={<List/>}/>
                    <Route path={'add-product'} element={<AddProduct/>}/>
                    <Route path={'/client'} element={<ListClient/>}/>
                    <Route path={'/cart-detail'} element={<Cart/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
