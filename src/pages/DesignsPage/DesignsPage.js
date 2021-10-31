import React, { useState } from "react";
import "./DesignsPage.css";

import Design from "../../Utils/Data/Designs";

import { Zoom } from "react-preloaders";

const DesignsPage = (props) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="designs">
      <Zoom customLoading={loading} background="#1A1E23" color="white" />
      <div className="allimages">
        {Design.map((design) => {
          return (
            <img
              alt="logo"
              src={require(`../../Utils/images/UIUXDesigns/${design.image}`)}
              onLoad={handleImageLoad}
              className="designimage"
            ></img>
          );
        })}
      </div>
    </div>
  );
};

export default DesignsPage;
