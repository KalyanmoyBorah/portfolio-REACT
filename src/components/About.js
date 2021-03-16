import React, { useState } from "react";
import "./About.css";

import Abouts from "../Data/About";

import { Zoom } from "react-preloaders";

const About = (props) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="about">
      <Zoom customLoading={loading} background="#1A1E23" color="white" />
      <div className="header">
        <h1 className="text">
          KALYANMOY BORAH IS A PART OF THE SOFTWARE TEAM AT TECHVARIABLE.
        </h1>

        <img
          alt="logo"
          src={require(`../images/Myimages/kmb.jpg`)}
          onLoad={handleImageLoad}
          className="profilepic"
        ></img>
      </div>

      <div className="abouttext">
        {Abouts.map((para) => {
          return (
            <div>
              <p className="para" style={{ fontFamily: "InriaSerif" }}>
                {para.para}
              </p>
            </div>
          );
        })}
      </div>

      <div className="images">
        <div className="up">
          <div className="upinside">
            <img
              alt="logo"
              src={require(`../images/Myimages/kmb1.jpg`)}
              className="collageimage"
            ></img>
          </div>
          <div className="upinside">
            <img
              alt="logo"
              src={require(`../images/Myimages/kmb5.jpg`)}
              className="collageimage"
            ></img>
          </div>
          <div
            className="upinside"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{ flex: 1, display: "flex" }}>
              <div style={{ flex: 1 }}>
                <img
                  alt="logo"
                  src={require(`../images/Myimages/kmb3.jpg`)}
                  className="smallimage"
                ></img>
              </div>
              <div style={{ flex: 1 }}>
                <img
                  alt="logo"
                  src={require(`../images/Myimages/kmb4.jpg`)}
                  className="smallimage"
                ></img>
              </div>
            </div>
            <div style={{ flex: 1, display: "flex" }}>
              <div style={{ flex: 1 }}>
                <img
                  alt="logo"
                  src={require(`../images/Myimages/kmb2.jpg`)}
                  className="smallimage"
                ></img>
              </div>
              <div style={{ flex: 1 }}>
                <img
                  alt="logo"
                  src={require(`../images/Myimages/kmb7.jpg`)}
                  className="smallimage"
                ></img>
              </div>
            </div>
          </div>
          <div className="upinside">
            <img
              alt="logo"
              src={require(`../images/Myimages/kmb13.jpg`)}
              className="collageimage"
            ></img>
          </div>
        </div>
        <div className="down">
          <div className="upinside">
            <img
              alt="logo"
              src={require(`../images/Myimages/kmb8.jpg`)}
              className="collageimage"
            ></img>
          </div>
          <div
            className="upinside"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div style={{ flex: 1 }}>
              <img
                alt="logo"
                src={require(`../images/Myimages/kmb6.jpg`)}
                className="collageimage"
              ></img>
            </div>
            <div style={{ flex: 1, display: "flex" }}>
              <div style={{ flex: 1 }}>
                <img
                  alt="logo"
                  src={require(`../images/Myimages/kmb10.jpg`)}
                  className="smallimage"
                ></img>
              </div>
              <div style={{ flex: 1 }}>
                <img
                  alt="logo"
                  src={require(`../images/Myimages/kmb11.jpg`)}
                  className="smallimage"
                ></img>
              </div>
            </div>
          </div>
          <div className="upinside">
            <img
              alt="logo"
              src={require(`../images/Myimages/kmb9.jpg`)}
              className="collageimage"
            ></img>
          </div>
          <div className="upinside">
            <img
              alt="logo"
              src={require(`../images/Myimages/kmb12.jpg`)}
              className="collageimage"
            ></img>
          </div>
        </div>
      </div>

      <div className="comments">
        <div
          style={{
            width: "60%",
            marginTop: "auto",
            marginBottom: "auto",
            paddingLeft: "3vw",
            borderLeft: "4px solid #EF5350",
            marginLeft: "15vw",
            fontSize: "1.2rem",
          }}
        >
          <p
            className="para1"
            style={{ fontFamily: "InriaSerifItalic", marginTop: "2vh" }}
          >
            “Kalyan is a powerhouse, an exceptional asset to the software team
            and our organization at large. He is incredibly sharp, a rigorous
            thinker, comprehensive in his designs & developments, and an
            excellent communicator. Kalyan is a natural bar raiser. In less
            time, Kalyan's impact has been immeasurable across our entire
            digital product portfolio.”
          </p>
          <p className="para1" style={{ fontFamily: "InriaSerif" }}>
            — Manan Parikh · Tech Head at Inspired Automation Future
            Technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
