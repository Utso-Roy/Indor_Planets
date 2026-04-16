import React from "react";
import Dashboard from "../../Pages/Sidebar/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const DashboardLayout = () => {

  return (
    <div className=" dark:bg-gray-50 bg-white mx-auto px-4 w-full">
      <Navbar />
        <div className="flex gap-3 max-w-7xl mx-auto">
        <Dashboard className="w-[250px] " />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
     {/* <Footer></Footer> */}
    </div>

  );
};

export default DashboardLayout;
