import React from "react";
import "./about.css";
import ME from "../../assets/headshot.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container container__header">
        <h5>About Me</h5>
      </div>

      <div className="container about__container">
        <div className="about__content">
          <p class="genearlP">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            quisquam? Voluptatibus dolores expedita accusamus molestiae eligendi
            ?
          </p>
          <p class="genearlP">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            quisquam? Voluptatibus dolores expedita accusamus molestiae eligendi
          </p>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="ME" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
