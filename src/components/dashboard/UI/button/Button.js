import React from "react";
import "./Button.css";

const Button = ({ Icon, text }) => {
  return (
    <div>
      <p className="addLink">
        {Icon && <Icon />} {text}
      </p>
    </div>
  );
};

export default Button;
