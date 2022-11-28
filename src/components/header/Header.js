import React from "react";
import "./header.css";
import logoImage from "../../assets/images/black2.png";
const Header = () => {
  return (
    <div className="header">
      <div className="leftText">
        <div className="imgText">
          O<span style={{ color: "rgba(4, 7, 7, 1)" }}>C</span>R
        </div>
        <div className="by">
          by <img alt="img" className="imgLogo" src={logoImage} />{" "}
        </div>
      </div>
      <div className="rightText">Need Help?</div>
    </div>
  );
};

export default Header;
