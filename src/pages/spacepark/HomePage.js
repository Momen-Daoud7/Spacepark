import React from "react";
import Header from "../../components/spacepark/header/Header";
import Sidebar from "../../components/spacepark/sidebar/Sidebar";
import Feed from "../../components/spacepark/feed/Feed";
import Widgets from "../../components/spacepark/widgets/Widgets";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
