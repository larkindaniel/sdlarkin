import React from "react";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sdlarkin/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/larkindaniel/"
        target="_blank"
        rel="noreferrer"
        className="header__push"
      >
        GitHub
      </a>
    </div>
  );
};

export default HeaderSocials;
