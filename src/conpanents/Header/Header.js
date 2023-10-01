import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>Oyindamola</h1>
         <div>
         <NavLink to='/'>Admin</NavLink>
          <NavLink to='/Home'>About me</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Contact me</NavLink>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
