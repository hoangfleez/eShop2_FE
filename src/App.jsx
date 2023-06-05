import { Route, Routes, Navigate } from "react-router-dom";
import { Index } from "./pages";
import List from "./pages/product/List";
import AddProduct from "./pages/product/AddProduct.jsx";
import ListClient from "./pages/client/ListClient.jsx";
import Cart from "./pages/cart/Cart";
import { useSelector } from "react-redux";
import { ClassSharp, History } from "@mui/icons-material";
import Bill from "./pages/cart/Bill.jsx";
import Historys from "./pages/cart/History.jsx";
import Admin from "./pages/admin/Admin.jsx";
import Excel from "./pages/product/Excel.jsx";

// import { List } from "./pages/product/List";

function App() {
let user = useSelector(({ user }) => {
    return user.currentUser;
});

return (
    <>
    <Routes>
        <Route path={"/"} element={<Index />}>
        <Route path={"/"} element={<ListClient />} />
        {user ? (
            <>
            <Route path={"/cart-detail"} element={<Cart />} />
            <Route path={"/bill"} element={<Bill />} />
            <Route path={"/history"} element={<Historys />} />
            {user && user.role === "admin" ? (
                <>
                <Route path={"/admin"} element={<Admin />}>
                    <Route path={""} element={<List/>} />
                    <Route path={"excel"} element={<Excel/>} />
                </Route>
                </>
            ) : (
                <>
                <Route path={"*"} element={<Navigate to={"/"} />} />
                </>
            )}
            </>
        ) : (
            <>
            <Route path={"*"} element={<Navigate to={"/"} />} />
            </>
        )}
        </Route>
    </Routes>
    </>
);
}

export default App;
