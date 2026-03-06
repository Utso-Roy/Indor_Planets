import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import TargetCursor from "../../../TargetCursor/TargetCursor";

const MainLayouts = () => {
  return (
    <div className=" bg-white dark:bg-white  ">
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
