import { ReactElement, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Home, Shop, Cart } from "./pages";
import useCart from "./hooks/useCart";

import type { Product, DummyJSONResponse } from "./types/globals";

function App(): ReactElement {
  const [products, setProducts] = useState<Product[]>([]);
  const cart = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => res.json())
      .then(({ products }: DummyJSONResponse) => setProducts(products))
      .catch((err: Error) => err);
  }, []);

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop products={products} cart={cart} />}
        />
      </Routes>
      <Cart cart={cart} products={products} />
    </>
  );
}

export default App;
