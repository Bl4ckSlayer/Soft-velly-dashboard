import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BiUserVoice } from "react-icons/bi";
import { TbUsers } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";

const LeftNav = () => {
  const activeLinks = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#1e3a8a" : "",
      color: isActive ? "white" : "black",
    };
  };
  return (
    <div className="sticky top-0">
      <div className="py-2 px-1">
        <h2 className="text-5xl font-bold">
          <Link to="/">
            <span className="text-orange-600">
              <i>Soft</i>
            </span>{" "}
            <span className="text-blue-900">
              <i>Valley</i>
            </span>
          </Link>
        </h2>
      </div>

      <div className="flex items-center justify-center gap-4 py-2">
        <AiOutlineUser className="text-4xl" />
        <div>
          <h2 className="text-xl font-semibold">Hello! Good Evening</h2>
          <h2 className="text-2xl font-semibold">Admin</h2>
        </div>
      </div>

      <div className="border border-black w-full mb-2"></div>

      <div className="flex flex-col">
        <NavLink
          to="/dashboard"
          className="hover:bg-gray-300"
          style={activeLinks}
        >
          <h2 className="bg-transparent w-full rounded-none font-semibold text-lg py-4 text-center flex items-center justify-center gap-4">
            <MdDashboard className="text-2xl" />
            Dashboard
          </h2>
        </NavLink>
        <NavLink to="/leads" className="hover:bg-gray-300" style={activeLinks}>
          <h2 className="bg-transparent w-full rounded-none font-semibold text-lg py-4 text-center flex items-center justify-center gap-4">
            <BiUserVoice className="text-2xl" />
            Leads
          </h2>
        </NavLink>
        <NavLink to="/status" className="hover:bg-gray-300" style={activeLinks}>
          <h2 className="bg-transparent w-full rounded-none font-semibold text-lg py-4 text-center flex items-center justify-center gap-4">
            <BiUserVoice className="text-2xl" />
            Status
          </h2>
        </NavLink>
        <NavLink
          to="/customer"
          className="hover:bg-gray-300"
          style={activeLinks}
        >
          <h2 className="bg-transparent w-full rounded-none font-semibold text-lg py-4 text-center flex items-center justify-center gap-4">
            <TbUsers className="text-2xl" />
            Customer
          </h2>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
