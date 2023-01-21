import React from "react";
import "./home.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slides from "../../components/Slides";

const Home = () => {
    return (
      <div className="homeContainer">
        <Header />
        <Slides />
        <Footer />
      </div>
    );
  };
  
  export default Home;