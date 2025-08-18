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
          to="/plantFertilizer"
          className={({ isActive }) =>
            isActive ? "text-green-600  font-bold" : "text-green-500"
          }
        >
          Plant Fertilizer
        </NavLink>
       </button>
      </li>
      <li>
        <button className="cursor-target">
           <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-600  font-bold" : "text-green-500"
          }
        >
          Products
        </NavLink>
       </button>
      </li>


      <li>
        <button className="cursor-target">
           <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-green-600  font-bold" : "text-green-500"
          }
        >
          Contact
        </NavLink>
       </button>
      </li>
    </>
  );
};

export default NavLinks;
