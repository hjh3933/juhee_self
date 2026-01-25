import { Route, Routes } from "react-router-dom";
import { RouteMain } from "./components/RouteMain";
import { RouteNotFound } from "./components/RouteNotFound";
import { RouteProduct } from "./components/RouteProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RouteMain />}></Route>
      <Route path="/product/:id" element={<RouteProduct />}></Route>
      <Route path="*" element={<RouteNotFound />}></Route>
    </Routes>
  );
}

export default App;
