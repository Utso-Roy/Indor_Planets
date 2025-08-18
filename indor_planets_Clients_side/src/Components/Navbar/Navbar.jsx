import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import NavLinks from "./NavLinks";
import { MdDashboard } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error("Logout failed: " + error.message);
      });
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-green-700 text-white text-sm">
        <div className="flex flex-col md:flex-row justify-around items-center h-auto md:h-[45px] px-4 py-2 gap-2 md:gap-0 text-center">
          <h3>Free Delivery Above ৳ 999 | Shop Now</h3>
          <h3>
            Buy 2 Get 1 | Use: <span className="font-bold">GREENGHOR</span>
          </h3>
          <h3>Buy 2 XL @ ৳1500</h3>
        </div>
      </div>

      {/* Navbar */}
      <div className="sticky top-0 z-50 bg-[#F5F5F5] shadow-sm">
        <div className="navbar">
          {/* Navbar Start (Mobile + Logo) */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content cursor-target   bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <NavLinks />
              </ul>
            </div>

            {/* Logo */}
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-auto cursor-target max-h-[55px] w-auto max-w-[250px] object-contain"
              />
            </Link>
          </div>

          {/* Navbar Center (Desktop Menu) */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavLinks />
            </ul>
          </div>

          {/* Navbar End (User Section) */}
          <div className="navbar-end gap-2">
            {user ? (
              <div className="dropdown dropdown-hover dropdown-end cursor-pointer">
                <button
                  className="btn btn-ghost cursor-target btn-circle avatar tooltip"
                  data-tip={user?.displayName || "User"}
                >
                  <div className="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
                    <img
                      src={
                        user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"
                      }
                      alt="user"
                    />
                  </div>
                </button>

                <ul className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-64">
                 

                  <li>
                    <button className="cursor-target">
                      <Link
                        to="/dashboard"
                        className="flex items-center text-green-600 gap-2 font-semibold"
                      >
                        <MdDashboard color="green" />
                        Dashboard
                      </Link>
                    </button>
                  </li>

                  <li>
                    <button
                      onClick={handleLogOut}
                      className="flex cursor-target items-center gap-2 text-red-500"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-green-600  font-bold" : "text-green-500"
                  }
                >
                  <button className="cursor-pointer cursor-target">
                    Login
                  </button>
                </NavLink>
                <span className="text-green-500">/</span>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "text-green-600 font-bold" : "text-green-500"
                  }
                >
                  <button className="cursor-pointer cursor-target ">Register</button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
