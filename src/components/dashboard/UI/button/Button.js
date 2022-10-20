import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";

const Button = ({ Icon, text, location }) => {
  return (
    <NavLink to={location}>
      <p className="addLink">
        {Icon && <Icon />} {text}
      </p>
    </NavLink>
  );
};

export default Button;
