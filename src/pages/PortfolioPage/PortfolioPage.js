import React from "react";
import "./PortfolioPage.css";

import Projects from "../../Utils/Data/Projects";

const PortfolioPage = () => {
  return (
    <div>
      {Projects.map((project) => {
        return (
          <div className="project">
            <img
              alt="logo"
              src={require(`../../Utils/images/projects/${project.image}`)}
              className={project.type === "roboseum" ? "roboLogo" : "logo"}
            ></img>
            <div className="details">
              <h4 className="projectname" style={{ fontFamily: "BebasNeue" }}>
                {project.name}
              </h4>
              <p className="projectabout" style={{ fontFamily: "InriaSerif" }}>
                {" "}
                {project.about}
              </p>

              {project.link && (
                <a
                  style={{ fontFamily: "InriaSerif" }}
                  className="view"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.link}
                >
                  <p style={{ fontWeight: "bold" }}>View Project</p>
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioPage;
