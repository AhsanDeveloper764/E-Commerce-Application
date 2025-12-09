import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import ProductList  from "./pages/ProductList";
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import SingleProduct from "./pages/SingleProduct";
import EditCart from "./Component/EditCart";
import './form.css';
import './Cart.css';
import './List.css';
import "./styles.css";
import "./App.css";
import "./hero.css";
import "./video.css";
import "./video.css";
import "./check.css";
import "./Footer.css";
import Checkout from "./Component/Checkout";
import Modalac from "./Component/modal"; 
import Lost from "./Component/Lost";
import Reset from "./Component/Reset";

const App = () => {
  return <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/cart" element={<EditCart />} />
        <Route path="/modal/:email_address" element={<Modalac />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout  />} />
        <Route path="/lost" element={<Lost />} />
        <Route path="/reset/:email_address" element={<Reset />} />
        {/* it is called params whenever we assign the anyname after the / so that's 
        is called Params koi bhi url kay andar uskay kisi bhi part ko dynamic krtay hein*/}
      </Routes>
    </>;
};
export default App;
