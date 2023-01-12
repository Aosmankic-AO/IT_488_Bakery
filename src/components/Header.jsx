import { Outlet, Link } from "react-router-dom";
import About from "../pages/about/About";

const Header = () => {

    return (
        <header>
        <div>
            <nav className="navbar">
                <h1 id="title">Welcome to Bakery on Main.</h1>
                <div className="topnavbar">
                    <Link to="/">Home</Link>
                    <Link to="/About">About Us</Link>
                    <Link to="/Order">Order Online</Link>
                    <Link to="/Membership">Membership</Link>
                </div>
            </nav>
        </div>
    </header>
    );
  };
  
  export default Header;