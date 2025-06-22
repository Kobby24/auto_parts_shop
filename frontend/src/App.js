import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs'
import Main from './pages/Main';
import SignupForm from './pages/SignupForm';
import  Login  from './pages/Login';
import Payment from './pages/Payment';
import Error404 from './pages/error';
import React, { useState, useEffect } from "react";
import Product from './pages/Product';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  // Keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/brands/:brandName/:modelName?"
            element={<Main cartItems={cartItems} setCartItems={setCartItems} />}
          />
          
          <Route path='/payment' element={<Payment />}/>
          <Route
            path="/product/:brandName/:modelName/:prod_id"
            element={<Product  cartItems={cartItems} setCartItems={setCartItems} />}
          />
          {/* Add more routes here as need
          ed */}
          <Route path="*" element={<Error404 />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
