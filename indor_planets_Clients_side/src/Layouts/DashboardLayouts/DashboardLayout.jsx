import React from "react";
import Dashboard from "../../Pages/Sidebar/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const DashboardLayout = () => {
  return (
      <div className="max-w-screen-xl  mx-auto px-4 w-full">
          <Navbar></Navbar>
      <div className="flex gap-3">
        <Dashboard></Dashboard>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
