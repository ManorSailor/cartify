import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Home, Shop, Cart } from "./pages";

function App(): ReactElement {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Cart />
    </>
  );
}

export default App;
