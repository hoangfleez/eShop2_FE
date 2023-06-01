import {Route, Routes, Navigate} from "react-router-dom";
import {Index} from "./pages";
import List from "./pages/product/List";
import AddProduct from "./pages/product/AddProduct.jsx";
import ListClient from "./pages/client/ListClient.jsx";
import Cart from "./pages/cart/Cart";
import {useSelector} from "react-redux";
import { ClassSharp } from "@mui/icons-material";


// import { List } from "./pages/product/List";

function App() {
    let user = useSelector(({user}) => {
        return user.currentUser;
    })
    console.log(user);

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Index/>}>
                    <Route path={'/'} element={<ListClient/>}/>
                    <Route path={'/cart-detail'} element={<Cart/>}/>
                    <Route path={"/admin"} element={<List/>}>
                        <Route path={'add-product'} element={<AddProduct/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
