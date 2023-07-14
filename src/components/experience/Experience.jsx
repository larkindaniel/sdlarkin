import React from "react";
import CustomTab from "./CustomTab";
import "./experience.css"

const Experience = () => {
  return (
    <section id="experience">
      <div className="container container__header">
        <h5>Places I've Worked</h5>
      </div>


      <div className="container experience__container">
 
         <CustomTab/>

        
      </div>
    </section>
  );
};

export default Experience;
