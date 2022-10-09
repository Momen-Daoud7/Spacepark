import React from "react";
import {
  Feedback,
  HomeOutlined,
  PeopleAltOutlined,
  PhotoAlbumOutlined,
  PowerOffOutlined,
  Settings,
  SettingsOutlined,
} from "@material-ui/icons";
import "./Sidebar.css";
import SidebarOption from "./sidebarOption/SidebarOption";
import SidebarTop from "./sidebarTop/SidebarTop";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarTop />
      <div className="sidebar__options">
        <SidebarOption title="Home" Icon={HomeOutlined} />
        <SidebarOption title="People" Icon={PeopleAltOutlined} />
        <SidebarOption title="Photos" Icon={PhotoAlbumOutlined} />
        <SidebarOption title="News feed" Icon={Feedback} />
        <SidebarOption title="Profile" Icon={PowerOffOutlined} />
        <SidebarOption title="Settings" Icon={SettingsOutlined} />
      </div>
    </div>
  );
};

export default Sidebar;
