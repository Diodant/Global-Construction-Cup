import React from "react";
import background from "../img/tech-focus-top-bg.svg"; 
import foreground from "../img/participants-blue-bg.svg";
import foreground2 from "../img/participants-orange-bg.svg";

const TopSection = ({ subtitle, title, children }) => {
  return (
    <div className="banner">
      <img src={background} alt="Background" className="banner-bg-top" />
      <img src={foreground} alt="Foreground" className="banner-fg-top" />
      <img src={foreground2} alt="Foreground2" className="banner-fg2" />

      <div className="banner-content-top">
        {subtitle && <h2 className="subtitle">{subtitle}</h2>}
        {title && <h1 className="title">{title}</h1>}
        {children && <div className="banner-extra">{children}</div>}
      </div>
    </div>
  );
};

export default TopSection;
