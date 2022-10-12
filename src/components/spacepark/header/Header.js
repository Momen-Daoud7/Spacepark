import React from "react";
import { Avatar } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h3>Spacepark</h3>
      </div>
      <div className="header__center">
        <div className="header__option">
          <Home fontSize="large" className="active" />
        </div>
        <div className="header__option">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Home fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <img src="./assets/steve.jpg" alt="profile" className="profilePic" />
      </div>
    </div>
  );
};

export default Header;
