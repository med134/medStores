import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./componets/Header";
import Contact from "./componets/Contact";
import Cart from "./componets/Cart";
import PageNotFount from "./componets/PageNotFound";
import Footer from "./componets/Footer";
import HeaderTwo from "./componets/HeaderTwo";
import Home from "./componets/Home";
import Login from "./componets/Login";
import Account from "./componets/Account";
import { ProductDetails } from "./componets/ProductDetails";
import Confirmation from './componets/Confirmation.jsx';


function App() {
  return (
    <Router>
      <HeaderTwo />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/Card" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFount />} />
        <Route path="/account" element={<Account />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
