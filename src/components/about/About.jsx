import React from "react";
import "./about.css";
import ME from '../../assets/R.jpg'
// import {FaAward, FiUsers} from 'react-icons/fa'
// import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return ( 
    
  <section id="about">
   <h5>About Me</h5>
   <div className="container about__container">
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, quisquam? Voluptatibus dolores expedita accusamus molestiae eligendi ea, consequuntur modi non repudiandae itaque officia repellat ex placeat error reprehenderit, at aspernatur?</p>
      <div className="about__content">
        <div className="about__cards">
          <article className = "about__card">
            <h3>Experience</h3>
            <small>3+ years Working</small>
          </article>

          <article className = "about__card">
         
            <h3>Clients</h3>
            <small>200+ Worldwide</small>
          </article>

          <article className = "about__card">
        
            <h3>Projects</h3>
            <small>80+ Completed</small>
          </article>
        </div>
        <div className="about__me">
        <div className="about__me-image">
          <img src ={ME} alt ="ME"/>
        </div>
      </div>
        
      </div>
   </div>
  </section>
  );
};

export default About;
