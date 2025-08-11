import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

import {
  FaHome,
  FaUser,
  FaBox,
  FaUsers,
  FaStore,
  FaBoxOpen,
  FaUserCog,
  FaPlus,
  FaStar,
  FaFlag,
} from "react-icons/fa";
import { MdDashboard, MdProductionQuantityLimits, MdRateReview } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../Utils/axiosInstance";
import Loader from "../../Loading/Loader";

const adminMenu = [
  { name: "Profile", icon: <FaUser />, path: "/dashboard/admin/profile" },
  { name: "Manage Users", icon: <FaUsers />, path: "/dashboard/admin/users" },
  { name: "Manage Reviews", icon: <FaStar />, path: "/dashboard/manage-reviews" },
  { name: "Manage Products", icon: <MdProductionQuantityLimits />, path: "/dashboard/manage-products" },
  { name: "Manage Reports", icon: <FaFlag />, path: "/dashboard/manage-reports" },
];

const sellerMenu = [
  { name: "Profile", icon: <FaUser />, path: "/dashboard/seller/profile" },
  { name: "Add Product", icon: <FaPlus />, path: "/dashboard/seller/add-product" },
  { name: "My Products", icon: <FaBox />, path: "/dashboard/seller/products" },
];

const userMenu = [
  { name: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
  { name: "My Products", icon: <FaBoxOpen />, path: "/dashboard/my-products" },
  { name: "My Reviews", icon: <MdRateReview />, path: "/dashboard/my-reviews" },
  { name: "Profile Settings", icon: <FaUserCog />, path: "/dashboard/settings" },
];

const Sidebar = () => {
  const {user} = useContext(AuthContext)
  const { data:users=[], isPending } = useQuery({
    queryKey: ['users'],
    queryFn : ()=>axiosInstance.get('/users').then(res=>res.data)
    
  })


  const currentUser = users.find(u => u.email === user?.email)  


  let menuToRender = [];

if (currentUser?.role === 'admin') {
  menuToRender = adminMenu;
} else if (currentUser?.role === 'seller') {
  menuToRender = sellerMenu;
} else {
  menuToRender = userMenu;
}
     
  if (isPending) {
    return <Loader></Loader>
  }





  return (
    <div className="h-screen bg-green-700 text-white  p-4 w-16 lg:w-60 transition-all duration-300 overflow-y-auto">
<h2 className="font-semibold flex justify-center items-center gap-1 
  text-sm sm:text-base md:text-lg lg:text-xl 
  my-3 text-base-300">
  
  <MdDashboard className="text-base sm:text-lg " /> 

  <span className="hidden md:inline">
    DashBoard {currentUser?.role}
  </span>
</h2>

      <nav className="flex flex-col gap-3">
        {menuToRender.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-md hover:bg-green-800 transition-all ${
                isActive ? "bg-green-800" : ""
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="hidden lg:block">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
