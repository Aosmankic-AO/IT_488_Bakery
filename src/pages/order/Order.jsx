import "./order.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ItemList from "../../components/Menu";
import * as React from 'react';
import Cart from "../../components/Cart";



const Order = () => {
    return (
      <div className="orderContainer">
        <Header />
        <ItemList />
        <Cart />
        <Footer />
      </div>
    );
  };
  
  export default Order;