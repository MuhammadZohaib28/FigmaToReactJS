import React from "react";
import "./header.css";
import headerlogo from "../../images/nike.png";
import Menu from "../../pages/menu/Menu";
import Location from "../../pages/location/Location";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to={'/main'}>
          <img src={headerlogo} className="headerLogo" />
        </Link>
 
        <ul className="headerItems">
          <li className="headerItem">
            <Link to={"/main"} className="headerItem">Home</Link>
          </li>

          <li className="headerItem">
            <Link to={"/menu"} className="headerItem">Menu</Link>
          </li>
          <li className="headerItem">
            <Link to={"/about"} className="headerItem">about</Link>
          </li>
          <li className="headerItem">
            <Link to={"/location"} className="headerItem">location</Link>
          </li>
          <li className="headerItem">
            <Link to={"/contact"} className="headerItem">contact</Link>
          </li>
        </ul>

        <button className="headerButton">Login</button>
      </header>
    </>
  );
};

export default Header;
