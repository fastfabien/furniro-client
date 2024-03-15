import React from "react";
import { GlobalStyles, dark } from "./Styles";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {
  Cart,
  Checkout,
  CreateProduct,
  Footer,
  Home,
  Login,
  Sample,
  Shop,
  ShopProduct,
} from "./pages";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <Navbar />
        <Routes>
          {/* Client */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopProduct />} />
          <Route path="/shop/cart" element={<Cart />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/test" element={<Sample />} />

          {/* Admin */}
          <Route path="/admin/products/new" element={<CreateProduct />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
