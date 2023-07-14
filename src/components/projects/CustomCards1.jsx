import React from "react";
import "./projects.css";
import ForAllTimes from "../../assets/foralltimes.jpg";

const CustomCards1 = () => {
  return (
    <div class="card__container">
      <div class="card__left">
        <div class="card__content">
          <h5 className="cardH">For All Times</h5>
          <div className="p__container">
            <p className="cardP">
            For All Times is a traffic monitor for the software engineering lounge. 
            It works by using ultrasonic sensors to detect when people enter or leave the room. 
            We use AWS to update this counter in real-time and display traffic on our website. 
  
            
            </p>

            <a
              target="_blank"
              href="https://foralltimes.cyclic.app/"
              className="Link"
              rel="noreferrer"
            >
              Link
            </a>
          </div>
        </div>
      </div>
      <div class="card__right">
        <div className="center__iframe">
          <img src={ForAllTimes} alt="forAllTimes" />
        </div>
      </div>
    </div>
  );
};

export default CustomCards1;
