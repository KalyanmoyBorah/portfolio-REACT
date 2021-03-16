import React, { useState } from "react";
import "./Designs.css";

import Design from "../Data/Designs";

import { Zoom } from "react-preloaders";

const Designs = (props) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="designs">
      <Zoom customLoading={loading} background="#1A1E23" color="white" />
      <div className="allimages">
        {Design.map((Design) => {
          return (
            <img
              alt="logo"
              src={require(`../images/UIUXDesigns/${Design.image}`)}
              onLoad={handleImageLoad}
              className="designimage"
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default Designs;
