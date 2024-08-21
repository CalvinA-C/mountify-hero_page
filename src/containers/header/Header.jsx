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
      <div className="mountify__header-content">
        <h1>
          Gold Coast's <br /> TV & Soundbar Wall Mounting Service
        </h1>
        <p>
          Experience top-tier TV and Soundbar installation with Mountify, Gold
          Coast's trusted experts. Our lifetime warranty ensures 100%
          satisfaction with every job completed to the highest standards.
        </p>
        <button>Get Your Free Quote</button>
      </div>

      <div className="graphic__transition--wrapper"></div>
    </div>
  );
};

export default Header;
