import React from "react";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import background from "./assets/Internet-Website-PNG-Photos.png";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette:{
    primary: {
      light: "#ccd6f6",
      main: "#459ff4", 
      dark: "#191827",
      contrastText: "#fff",
    }
  },

  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <div className="backdrop">
          <img className="background__image" src={background}></img>
          <img className="background__image2" src={background}></img>
        </div>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
    </ThemeProvider>
  );
};

export default App;
