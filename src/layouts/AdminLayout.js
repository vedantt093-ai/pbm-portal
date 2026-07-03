import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AdminLayout() {

  return (

    <div className="app">

      <Sidebar />

      <div className="main">

        <Navbar />

        <div className="content">

          <Outlet />

        </div>

      </div>

    </div>

  );

}
