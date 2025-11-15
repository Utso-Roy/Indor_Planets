import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { IoMdLogOut, IoMdMenu, IoMdClose } from "react-icons/io";
import {
  FaUser,
  FaBox,
  FaUsers,
  FaBoxOpen,
  FaUserCog,
  FaPlus,
  FaStar,
  FaFlag,
  FaLeaf,
} from "react-icons/fa";
import { MdDashboard, MdProductionQuantityLimits, MdRateReview } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../Utils/axiosInstance";
import Loader from "../../Loading/Loader";
import { toast } from "react-toastify";

const adminMenu = [
  { name: "Dashboard Home", icon: <MdDashboard />, path: "/dashboard" },
  { name: "Profile", icon: <FaUser />, path: "/dashboard/admin/profile" },
  { name: "Manage Users", icon: <FaUsers />, path: "/dashboard/admin/users" },
  { name: "Manage Reviews", icon: <FaStar />, path: "/dashboard/manage-reviews" },
  { name: "Manage Products", icon: <MdProductionQuantityLimits />, path: "/dashboard/manage-products" },
  { name: "Manage Reports", icon: <FaFlag />, path: "/dashboard/manage-reports" },
];

const sellerMenu = [
  { name: "Dashboard Home", icon: <MdDashboard />, path: "/dashboard" },
  { name: "Profile", icon: <FaUser />, path: "/dashboard/seller/profile" },
  { name: "Add Product", icon: <FaPlus />, path: "/dashboard/seller/add-product" },
  { name: "My Products", icon: <FaBox />, path: "/dashboard/seller/products" },
];

const userMenu = [
  { name: "Dashboard Home", icon: <MdDashboard />, path: "/dashboard" },
  { name: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
  { name: "My Products", icon: <FaBoxOpen />, path: "/dashboard/my-products" },
  { name: "My Plant Reviews", icon: <MdRateReview />, path: "/dashboard/my-Plant-reviews" },
  { name: "My Fertilizer Reviews", icon: <MdRateReview />, path: "/dashboard/my-reviews" },
];

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const { data: users = [], isPending } = useQuery({
    queryKey: ['users'],
    queryFn: () => axiosInstance.get('/users').then(res => res.data)
  });

  const currentUser = users.find(u => u.email === user?.email);

  let menuToRender = [];

  if (currentUser?.role === 'admin') {
    menuToRender = adminMenu;
  } else if (currentUser?.role === 'seller') {
    menuToRender = sellerMenu;
  } else {
    menuToRender = userMenu;
  }

  if (isPending) {
    return <Loader />;
  }

  const handleClick = () => {
    toast.success('Logout Successful');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-green-600 text-white p-3 rounded-lg shadow-lg hover:bg-green-700 transition-all"
      >
        {isOpen ? <IoMdClose className="text-2xl" /> : <IoMdMenu className="text-2xl" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 left-0 h-screen bg-gradient-to-b from-green-700 to-green-800 text-white p-4 lg:p-6 transition-all duration-300 z-40 shadow-2xl overflow-y-auto
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}
          lg:translate-x-0 lg:w-72`}
      >
        {/* Header */}
        <div className="mb-8 pb-6 border-b border-green-600">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 p-3 rounded-full shadow-lg">
              <FaLeaf className="text-2xl text-white" />
            </div>
            <div>
              <h2 className="font-bold text-xl text-white">
                Dashboard
              </h2>
              <p className="text-green-200 text-sm capitalize">
                {currentUser?.role || 'User'}
              </p>
            </div>
          </div>
        </div>

        {/* User Info Card */}
        <div className="mb-6 bg-green-600 bg-opacity-50 rounded-xl p-4 backdrop-blur-sm border border-green-500">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <FaUser className="text-xl text-white" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-white font-semibold text-sm truncate">
                {user?.displayName || 'User'}
              </p>
              <p className="text-green-200 text-xs truncate">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-2 mb-6">
          {menuToRender.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group
                ${isActive 
                  ? "bg-white text-green-700 shadow-lg font-semibold" 
                  : "hover:bg-green-600 hover:translate-x-1 text-white"
                }`
              }
            >
              <span className="text-xl transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="mt-auto pt-6 border-t border-green-600">
          <button
            onClick={handleClick}
            className="w-full flex items-center justify-center gap-2 font-semibold rounded-xl cursor-pointer bg-red-500 hover:bg-red-600 text-white py-3 px-4 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <IoMdLogOut className="text-xl" />
            <span>Logout</span>
          </button>
        </div>

        {/* Footer Badge */}
        <div className="mt-4 text-center">
          <p className="text-green-300 text-xs font-medium">
            Indoor Plants Dashboard
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;