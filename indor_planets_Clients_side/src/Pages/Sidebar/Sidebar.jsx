import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { IoMdLogOut } from "react-icons/io";
import {
  FaUser,
  FaBox,
  FaUsers,
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
import { toast } from "react-toastify";

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
  { name: "My Plant Reviews", icon: <MdRateReview />, path: "/dashboard/my-Plant-reviews" },
  { name: "My Fertilizer Reviews", icon: <MdRateReview />, path: "/dashboard/my-reviews" },
];

const Sidebar = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
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
 
  const handleClick = () => {
    toast.success('Logout Successful')
    navigate('/login')
    
  }




  return (
    <div className="h-screen bg-green-700 text-white  p-4 w-16 lg:w-60 transition-all duration-300 overflow-y-auto">
<h2 className="font-semibold flex  items-center gap-1 
  text-sm sm:text-base md:text-lg lg:text-xl 
  my-3 text-base-300">
  
  <MdDashboard className="text-base sm:text-lg " /> 

  <span className="hidden md:inline">
   Dashboard {currentUser?.role}
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

       <button onClick={handleClick} className="w-full mt-5 flex items-center gap-1 justify-center font-semibold  rounded-md cursor-pointer hover:bg-red-500 hover:text-white py-1.5 bg-white text-gray-800"><IoMdLogOut /> Logout</button>
    </div>
  );
};

export default Sidebar;
