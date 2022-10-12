import React from "react";
import { MoreHoriz } from "@material-ui/icons";
import ProfileWithInfo from "../../UI/profileWithInfo/ProfileWithInfo";
import "./Contact.css";

const Contact = ({ name, profilePic }) => {
  return (
    <div className="contact">
      <ProfileWithInfo name={name} profilePic={profilePic} />
      <MoreHoriz />
    </div>
  );
};

export default Contact;
