import React from "react";
import "./nav.css";
import useScrollDirection from "./scrolldirection";

const Nav = () => {
  const scrollDirection = useScrollDirection();
  console.log(scrollDirection);
  return (
    <nav className={`navbar ${scrollDirection === "down" ? "hide" : "show"}`}>
      <a id="test" href="#"> sdlarkin </a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Projects</a>
    </nav>
  );
};

export default Nav;
