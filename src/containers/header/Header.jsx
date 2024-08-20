import React, { useEffect, useState } from "react";
import mount from "../../assets/mount-graphic.png.png";
import tv from "../../assets/tv-graphic.png";

import "./header.css";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the transition by setting isLoaded to true after the component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="mountify__header section__padding">
      <div className="mountify__header-contents">
        <h1>
          Gold Coast's <br />
          TV & Soundbar Wall Mounting Service
        </h1>
        <p>
          Experience top-tier TV and Soundbar installation with Mountify, Gold
          Coast's trusted experts. Our lifetime warranty ensures 100%
          satisfaction, with every job completed to the highest standards. We
          guarantee a strocoloeyng frame, premium materials, and precise installation.
          Enjoy a safer, more stylish home entertainment setup with our
          commitment to excellence and fast, reliable service.
        </p>
        <button>Get Your Free Quote</button>
      </div>
      <div className="mountify__header-image">
        <img
          className={`mount-graphic ${isLoaded ? "loaded" : ""}`}
          src={mount}
          alt="mountify mount graphic"
        />
        <img
          className={`tv-graphic ${isLoaded ? "loaded" : ""}`}
          src={tv}
          alt="mountify tv graphic"
        />
      </div>
    </div>
  );
};

export default Header;
