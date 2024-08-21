import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logoTransparent.png.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mountify__navbar">
      <div className="mountify__navbar-links_logo">
        <img src={logo} alt="Mountify Logo" />
      </div>

      {/* MOBILE VERISON - 360x640 & 414x896px */}
      <div className="mountify__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="black" onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="black" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="mountify__navbar-menu_container scale-up-center">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wmountify">Why Us</a>
            </p>
            <p>
              <a href="#features">Projects</a>
            </p>
            <p>
              <a href="#possibility">Testimonials</a>
            </p>
            <p>
              <a href="#blog">Contact</a>
            </p>
            <button type="button">Book Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
