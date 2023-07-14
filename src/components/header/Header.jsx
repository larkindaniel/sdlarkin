import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <section id="hero">
      <div className="container header__container">
        <p className="header__intro">hi, my name is </p>
        <h2 class="primary__header">Daniel Larkin </h2>
        <h2 class="text-light secondary__header">I'm a Software Engineer.</h2>
        <HeaderSocials />
      </div>
    </section>
  );
};

export default Header;
