import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logoTransparent.png.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mountify__navbar">
      <div className="mountify__navbar-links">
        <div className="mountify__navbar-links_logo">
          <img src={logo} />
        </div>

        <div className="mountify__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#services">Services</a>
          </p>
          <p>
            <a href="#aboutus">About Us</a>
          </p>
          <p>
            <a href="#contactus">Contact Us</a>
          </p>
          <p>
            <a href="#testimonials">Testimonials</a>
          </p>
          <p>
            <a href="#faq">FAQ</a>
          </p>
        </div>
      </div>

      <div className="mountify__navbar-book_now">
        <button type="button">Book Now</button>
      </div>

      <div className="mountify__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="black"
            size={32}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="black"
            size={32}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="mountify__navbar-menu_container scale-up-center">
            <div className="mountify__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wmountify">What is mountify?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="mountify__navbar-mountify__navbar-book_now">
              <button type="button">Book Now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
