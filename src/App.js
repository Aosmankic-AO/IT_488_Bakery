import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About.jsx'
import Order from './pages/order/Order.jsx'
import Membership from './pages/membership/Membership.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
        <Route path="membership" element={<Membership />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
