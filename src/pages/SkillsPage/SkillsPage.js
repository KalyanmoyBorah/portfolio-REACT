import React from "react";
import "./SkillsPage.css";

import CircularProgressBar from "../../components/CircularProgressBar";

const SkillsPage = (props) => {
  return (
    <div className="skills">
      <div className="skillsdiv">
        <div className="cards">
          <CircularProgressBar className="bar" stop={80} color="#e36387" />
          <h5 className="skillname" style={{ color: "#e36387" }}>
            Figma
          </h5>
        </div>

        <div className="cards">
          <CircularProgressBar className="bar" stop={90} color="#800080" />
          <h5 className="skillname" style={{ color: "#800080" }}>
            Node.js
          </h5>
        </div>

        <div className="cards">
          <CircularProgressBar className="bar" stop={90} color="#000" />
          <h5 className="skillname" style={{ color: "#000" }}>
            MySQL
          </h5>
        </div>

        <div className="cards">
          <CircularProgressBar className="bar" stop={70} color="#13AA52" />
          <h5 className="skillname" style={{ color: "#13AA52" }}>
            MongoDB
          </h5>
        </div>

        <div className="cards">
          <CircularProgressBar className="bar" stop={80} color="#fff" />
          <h5 className="skillname" style={{ color: "#fff" }}>
            React-Native
          </h5>
        </div>

        <div className="cards">
          <CircularProgressBar className="bar" stop={80} color="#DD0031" />
          <h5 className="skillname" style={{ color: "#DD0031" }}>
            Angular
          </h5>
        </div>

        <div className="cards">
          <CircularProgressBar className="bar" stop={90} color="navyblue" />
          <h5 className="skillname" style={{ color: "#10B1D0" }}>
            React
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
