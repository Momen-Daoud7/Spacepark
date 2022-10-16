import "./App.css";
import Feed from "./components/spacepark/feed/Feed";
import Header from "./components/spacepark/header/Header";
import Sidebar from "./components/spacepark/sidebar/Sidebar";
import Widgets from "./components/spacepark/widgets/Widgets";
import DashboardSidebar from "./components/dashboard/dashboardSidebar/DashboardSidebar";
import UsersTable from "./components/dashboard/users/UsersTable";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}

      <div className="app__body">
        {/* <DashboardSidebar />
        <div className="app__dashboardBody">
          <UsersTable />
        </div> */}
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
