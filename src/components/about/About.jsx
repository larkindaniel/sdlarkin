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
            Hello! I'm a Software Engineering student at the <strong>University of Waterloo</strong>.
          </p>
          <p class="genearlP">
            I'm passionate about building real-world applications and always on the lookout for new opportunities.
          </p>
          <p class="genearlP">
           Here's some of what I've been <a href="#projects" class = "about__link">working on . . . </a>
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
