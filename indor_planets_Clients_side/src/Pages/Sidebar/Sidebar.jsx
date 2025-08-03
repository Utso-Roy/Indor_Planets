import React from "react";
import { NavLink } from "react-router"; 
import { FaHome, FaUser, FaBox, FaUsers, FaStore, FaBoxOpen, FaUserCog, FaPlus, FaStar, FaFlag } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";

// Combined all menu items for all roles
const combinedMenu = [
    { name: "Admin Home", icon: <FaHome />, path: "/dashboard" },
    { name: "Profile", icon: <FaUser />, path: "/dashboard/admin/profile" },

    { name: "Manage Users", icon: <FaUsers />, path: "/dashboard/admin/users" },
    { name: "Manage Reviews", icon: <FaStar />, path: "/dashboard/manage-reviews" },
  { name: "Manage Reports", icon: <FaFlag />, path: "/dashboard/manage-reports" },

    { name: "Seller Home", icon: <FaHome />, path: "/dashboard" },
    { name: "Profile", icon: <FaUser />, path: "/dashboard/seller/profile" },

    { name: "Add Product", icon: <FaPlus />, path: "/dashboard/seller/add-product" },
  { name: "My Products", icon: <FaBox />, path: "/dashboard/seller/products" },
  { name: "My Store", icon: <FaStore />, path: "/dashboard/seller/store" },

  { name: "User Home", icon: <FaHome />, path: "/dashboard" },
  { name: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
 { name: "My Products", icon: <FaBoxOpen />, path: "/dashboard/my-products" },
    { name: "My Reviews", icon: <MdRateReview />, path: "/dashboard/my-reviews" },
    { name: "Profile Settings", icon: <FaUserCog />, path: "/dashboard/settings" }
];

const Sidebar = () => {
  return (
    <div className="h-screen bg-green-700 text-white p-4 w-16 lg:w-60 transition-all duration-300 overflow-y-auto">
      <nav className="flex flex-col gap-3">
        {combinedMenu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-2 rounded-md hover:bg-green-800 transition-all ${
                isActive ? "bg-green-900" : ""
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
