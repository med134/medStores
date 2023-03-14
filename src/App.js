import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componets/Header";
import Category from "./componets/Category";
import Collection from "./componets/Collection";
import Contact from "./componets/Contact";
import Home from "./componets/Home";
import Login from "./componets/Login";
import Cart from "./componets/Cart";
import ShowProduct from "./componets/ShowProduct";
import { ShopContextProvider } from "./context/Shop-Context";
import PageNotFount from "./componets/PageNotFound";
import CheckOut from "./componets/CheckOut";
import Account from "./componets/Account";
import Footer from "./componets/Footer";
import HeaderTwo from "./componets/HeaderTwo";

function App(props) {
  return (
    <ShopContextProvider>
      <Router>
        <HeaderTwo/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/Card" element={<Cart />} />
          <Route path="/showProduct" element={<ShowProduct />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<PageNotFount />} />
        </Routes>
        <Footer/>
      </Router>
    </ShopContextProvider>
  );
}

export default App;
