import {Route, Routes, Navigate} from "react-router-dom";
import {Index} from "./pages";
import List from "./pages/product/List";
import AddProduct from "./pages/product/AddProduct.jsx";
import Edit from "./pages/product/Edit.jsx";

// import { List } from "./pages/product/List";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Index/>}>
                    <Route path={"/"} element={<List/>}/>
                    <Route path={'add-product'} element={<AddProduct/>}/>
                    <Route path={'edit/:id'} element={<Edit/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
