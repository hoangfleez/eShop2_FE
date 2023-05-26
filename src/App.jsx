import { Route, Routes, Navigate } from "react-router-dom";
import { Index } from "./pages";
import List from "./pages/product/List";
// import { List } from "./pages/product/List";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Index/>}>
          <Route path={"/"} element={<List/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
