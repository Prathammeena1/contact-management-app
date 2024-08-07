import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="md:h-full w-full md:w-[20%] bg-zinc-900 p-6 rounded-lg transition-all ease-in-out  flex md:flex-col gap-3 justify-between  md:justify-normal">
        <NavLink
          to="/"
          className={(e) =>
            e.isActive
              ? "md:text-[1.3vw] text-xl font-medium text-blue-400 ri-home-fill transition-all ease-in-out"
              : "md:text-[1.2vw] text-lg  font-medium  ri-home-line transition-all ease-in-out"
          }
        >
          <span className='font-["montserrat"]'> Home</span>
        </NavLink>
      <NavLink
        to="/addContact"
        className={(e) =>
          e.isActive
            ? "md:text-[1.3vw] text-xl font-medium text-blue-400 ri-add-circle-fill transition-all ease-in-out"
            : "md:text-[1.2vw] text-lg font-medium  ri-add-circle-line transition-all ease-in-out"
        }
      >
        <span className='font-["montserrat"]'> Add Contact</span>
      </NavLink>
      {/* <NavLink
        to="/myProfile"
        className={(e) =>
          e.isActive
            ? "text-[1.3vw] font-medium ri-user-3-fill transition-all ease-in-out"
            : "text-[1.2vw] font-medium  ri-user-3-line transition-all ease-in-out"
        }
      >
        <span className='font-["montserrat"]'> My Profile</span>
      </NavLink> */}
    </nav>
  );
};

export default Nav;
