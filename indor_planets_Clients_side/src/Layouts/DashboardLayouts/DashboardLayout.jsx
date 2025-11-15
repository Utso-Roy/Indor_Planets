import React from "react";
import Dashboard from "../../Pages/Sidebar/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";

const DashboardLayout = () => {
  return (
     <div className="max-w-screen-xl dark:bg-gray-50 bg-white mx-auto px-4 w-full">
  <Navbar />
  <div className="flex gap-3">
    <Dashboard className="w-[250px] " />
    <div className="flex-1">
      <Outlet />
    </div>
  </div>
</div>

  );
};

export default DashboardLayout;
