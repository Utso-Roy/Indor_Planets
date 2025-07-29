// components/NavLinks.jsx
import { NavLink } from "react-router";

const NavLinks = () => {
  return (
    <>
    
      <li>
        <button className="cursor-target">
          <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-green-600  font-bold" : "text-green-500"
          }
        >
          Home
        </NavLink>
        </button>
      </li>
      <li>
        <button className="cursor-target">
           <NavLink
          to="/learn"
          className={({ isActive }) =>
            isActive ? "text-green-600  font-bold" : "text-green-500"
          }
        >
          Learn
        </NavLink>
       </button>
      </li>
      <li>
        <button className="cursor-target">
           <NavLink
          to="/plantCare"
          className={({ isActive }) =>
            isActive ? "text-green-600  font-bold" : "text-green-500"
          }
        >
          Plant Care
        </NavLink>
       </button>
      </li>
      <li>
        <button className="cursor-target">
           <NavLink
          to="/plantFertilizer"
          className={({ isActive }) =>
            isActive ? "text-green-600  font-bold" : "text-green-500"
          }
        >
          Plant Fertilizer
        </NavLink>
       </button>
      </li>
    </>
  );
};

export default NavLinks;
