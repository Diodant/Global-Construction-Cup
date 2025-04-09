import React from "react";
import logo from "../img/logo.svg"; 
// import background from "../img/steps-bg-1.svg"; 

const Header = () => {
  return (
    <div className="menu-container">
      <div className="menu">
        <div className="logos">
          <img src={logo} alt="Logo 1" className="logo" />

        </div>
        <nav className="nav-links">
          <a href="/">Главная</a>
          <a href="/articles">Новости</a>
          <a href="/awards">Победители</a>
          <a href="/regulations">Положение</a>
          <a href="/criteria">Критерии оценки</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
      {/* <img src={background} alt="Background" className="menu-bg" /> */}
    </div>
  );
};

export default Header;
