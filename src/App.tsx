import React from "react";
import { GlobalStyles, dark } from "./Styles";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { CreateProduct, Footer, Home, Login, Sample, Shop } from "./pages";

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
          <Route path="/login" element={<Login />} />
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
