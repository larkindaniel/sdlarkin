import React from "react";
import "./projects.css";
import CustomCards1 from "./CustomCards1";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container projects__header">
        <h5>My Projects</h5>
      </div>
      <div className="container projects__container">
        <CustomCards1 />
      </div>
    </section>
  );
};

export default Projects;
