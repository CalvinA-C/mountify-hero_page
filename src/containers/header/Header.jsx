import React from "react";
import mount from "../../assets/mount-graphic.png.png";
import tv from "../../assets/tv-graphic.png";
import "./header.css";

const Header = () => {
  return (
    <div className="mountify__header">
      <div className="mountify__header--contents">
        <h1>
          GOLD COASTS <br />
        </h1>
        <h1>TV & Soundbar Mounting</h1>
      </div>
      <div className="mountify__header--visuals">
        <img src={mount} alt="" />
        <img src={tv} alt="" />
      </div>
      <div className="mountify__header-button">
        <a href=""></a>
      </div>
    </div>
  );
};

export default Header;
