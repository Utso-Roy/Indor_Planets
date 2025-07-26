import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive
              ? "text-green-600 underline font-bold"
              : "text-green-500"
          }
        >
          Home
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="bg-green-700 text-white text-sm">
        <div className="flex flex-col md:flex-row justify-around items-center h-auto md:h-[45px] px-4 py-2 gap-2 md:gap-0 text-center">
          <h3>Free Delivery Above ₹999 | Shop Now</h3>
          <h3>
            Buy 2 Get 1 | Use: <span className="font-bold">GREENGHOR</span>
          </h3>
          <h3>Buy 2 XL @ $35</h3>
        </div>
      </div>

      {/*  Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-[#F5F5F5] shadow-sm">
        <div className="navbar">
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>

            {/* Logo */}
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-auto max-h-[55px] w-auto max-w-[250px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          {/* Right Side Button */}
          <div className="navbar-end">
            <button className="btn cursor-pointer">Button</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
