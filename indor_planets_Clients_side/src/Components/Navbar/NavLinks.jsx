// components/NavLinks.jsx
import { NavLink } from "react-router";

const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-green-600 underline font-bold" : "text-green-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/learn"
          className={({ isActive }) =>
            isActive ? "text-green-600 underline font-bold" : "text-green-500"
          }
        >
          Learn
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/plantCare"
          className={({ isActive }) =>
            isActive ? "text-green-600 underline font-bold" : "text-green-500"
          }
        >
          Plant Care
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/plantFertilizer"
          className={({ isActive }) =>
            isActive ? "text-green-600 underline font-bold" : "text-green-500"
          }
        >
          Plant Fertilizer
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
