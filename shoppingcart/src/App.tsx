import React, { useState } from "react";
import "./App.css";
import Accordian_file from "./components/accordian_file";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Productcard from "./components/productcard";
import Home from "./components/home";
import './components/productcard.css';
import Productpage from "./components/productpage";
import './components/checkout.css'
import Checkoutcard from "./components/checkoutcard";
import Checkoutpage from "./components/checkoutpage";
import './components/alert.css'
import Alert from "./components/alert";


const App = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const addToCart = (e:number) => {
    setCartItems([...cartItems, e]);
    console.log("Code ran here  ",cartItems)
  }
  return (
    <>
    <Router>      
      <div className="nav">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/accordian" element = {<Accordian_file />} />
        <Route path="/productpage" element = { <Productpage addToCart={addToCart}/> } />
        <Route path="/checkoutpage" element = { <Checkoutpage checkout={cartItems}/> } />
        
      </Routes>
    </Router>

    </>
  );
}




export default App;
