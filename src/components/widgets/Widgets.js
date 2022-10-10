import React from "react";
import Contact from "./contact/Contact";
import "./Widgets.css";

const Widgets = ({ name, profilePic }) => {
  return (
    <div className="widgets">
      <h2>Contacts</h2>
      <Contact name="Momen Daoud" profilePic="./assets/steve.jpg" />
      <Contact name="Momen Daoud" profilePic="./assets/steve.jpg" />
      <Contact name="Momen Daoud" profilePic="./assets/steve.jpg" />
    </div>
  );
};

export default Widgets;
