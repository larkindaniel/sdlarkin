import React from "react";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import background from "./assets/Internet-Website-PNG-Photos.png"
import "./index.css"


const App = () => {
  return (
    <>
      <div className="backdrop">
      <img className="background__image" src = {background}></img>
      <img className="background__image2" src = {background}></img>
      </div>
      
      <Nav />
      <Header />
      {/* <img className= "background__image" src = {background}></img> */}
      <About />
      {/* <img className= "background__image" src = {background}></img> */}
      <Experience />
      {/* <img className= "background__image" src = {background}></img> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
