import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = (props) => {
  const {logostyle} = props

  return (
    <div style = {logostyle} className="logo-container">
      <img className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
