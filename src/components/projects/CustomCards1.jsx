import React from "react";
import "./projects.css";
import ForAllTimes from "../../assets/foralltimes.jpg";

const CustomCards1 = () => {
  return (
    <div class="card__container">
      <div class="card__left">
        <div class="card__content">
          <h5 className="cardH">ProjectName</h5>
          <div className="p__container">
            <p className="cardP">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              incidunt quas dolores eaque recusandae cum maxime repudiandae
              nobis facere totam eos quasi, perspiciatis ipsa, repellendus
              minima, ratione quis magnam ea.
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
