import React from "react";
import "./order.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BasicTable from "../../components/Menu";


const Order = () => {
    return (
      <div className="orderContainer">
        <Header />
        <BasicTable />
        <Footer />
      </div>
    );
  };
  
  export default Order;