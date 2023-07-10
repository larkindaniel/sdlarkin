import React from "react";
import "./about.css";
import ME from "../../assets/headshot.jpg";
// import {FaAward, FiUsers} from 'react-icons/fa'
// import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <div className="container container__header"><h5>About Me</h5><hr></hr></div>
      
     

      <div className="container about__container">
      
        
        <div className="about__content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            quisquam? Voluptatibus dolores expedita accusamus molestiae eligendi
            ea, consequuntur modi non repudiandae itaque officia repellat ex
            placeat error reprehenderit, at aspernatur?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid,
            quisquam? Voluptatibus dolores expedita accusamus molestiae eligendi
            ea, consequuntur modi non repudiandae itaque officia repellat ex
            placeat error reprehenderit, at aspernatur?
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
