import React from "react";
import "./nav.css";
import useScrollDirection from "./scrolldirection";
import LOGO from "../../assets/logo.PNG";


const Nav = () => {
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);
  return (
    
    <nav className={`navbar ${scrollDirection === "down" ? "hide" : "show"}`}>
      
      <a href="#">
        sdlarkin
      </a>
      <a href="#about" className="nav__push">
        About
      </a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
};

export default Nav;
