import './App.css';
import Navbar from './Componenets/Navbar';
import Footer from './Componenets/Footer'
import React from "react";
import Home from './Componenets/Home';
import Contact from './Componenets/Contact'
import About from './Componenets/About'; 
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import CartPage from './Componenets/CartPage';
import ProductContainer from './Componenets/ProductContainer';
import ProductDetail from './Componenets/ProductDetail';


function App() {
  return (
    <> 
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductContainer/>}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path='/ProductDetail/:id' element={<ProductDetail/>}/>
        <Route path='/CartPage' element={<CartPage/>}/>
      </Routes>
      <Outlet />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
