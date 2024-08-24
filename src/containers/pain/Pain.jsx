import React from "react";
import Projects from "../../components/projects/Projects";
import "./pain.css";

const Pain = () => {
  return (
    <div className="mountify__pain">
      <div className="mountify__pain-contents">
        <h1 className="mountify__pain-content-title">Tailored Installations</h1>

        <div className="mountify__pain-content-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          voluptatum obcaecati. Vel distinctio laudantium voluptatum quibusdam,
          consectetur mollitia necessitatibus tempore eligendi. Quasi!
        </div>

        <div className="mountify__pain-cta">
          <div className="mountify__pain-cta-title">
            Includes 100% Safifasction Guarantee
          </div>

          <div className="mountify__pain-cta-button">
            <a href="">Contact NOW</a>
          </div>
        </div>

      </div>
        <Projects />
    </div>
  );
};

export default Pain;
