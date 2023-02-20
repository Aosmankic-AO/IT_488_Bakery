import React from "react";
import "./membership.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MemberForm from "../../components/MemberForm";


const Membership = () => {
    return (
      <div className="membershipContainer">
        <Header />
          <MemberForm />
        <Footer />
      </div>
    );
  };
  
  export default Membership;