import "./App.css";
import Feed from "./components/spacepark/feed/Feed";
import Header from "./components/spacepark/header/Header";
import Sidebar from "./components/spacepark/sidebar/Sidebar";
import Widgets from "./components/spacepark/widgets/Widgets";
import DashboardSidebar from "./components/dashboard/dashboardSidebar/DashboardSidebar";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}

      <div className="app__body">
        <DashboardSidebar />
        {/* <Sidebar />
        <Feed />
        <Widgets /> */}
      </div>
    </div>
  );
}

export default App;
