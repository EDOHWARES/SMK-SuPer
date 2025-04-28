import React from "react";
import {
  FaUser,
  FaDoorOpen,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { FaStore } from "react-icons/fa6";

const Sidebar = ({activeTab, setActiveTab}) => {
  return (
    <div className="bg-gray-800 text-white w-60 h-screen space-y-6">
      <h2 className="text-2xl font-bold p-5">Admin</h2>
      <div className="space-y-4">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`${activeTab == "dashboard" ? "bg-gray-500" : "bg-transparent"} flex items-center gap-2 hover:bg-gray-500 py-2 rounded p-5 w-full cursor-pointer`}
        >
          <FaCalendarAlt /> Dashboard
        </button>
        <button
          onClick={() => setActiveTab("rooms")}
          className={`${activeTab == "rooms" ? "bg-gray-500" : "bg-transparent"} flex items-center gap-2 hover:bg-gray-500 py-2 rounded p-5 w-full cursor-pointer`}
        >
          <FaDoorOpen /> Rooms
        </button>
        <button
          onClick={() => setActiveTab("pibg")}
          className={`${activeTab == "pibg" ? "bg-gray-500" : "bg-transparent"} flex items-center gap-2 hover:bg-gray-500 py-2 rounded p-5 w-full cursor-pointer`}
        >
          <MdPayment /> PIBG
        </button>
        <button
          onClick={() => setActiveTab("schoolStore")}
          className={`${activeTab == "schoolStore" ? "bg-gray-500" : "bg-transparent"} flex items-center gap-2 hover:bg-gray-500 py-2 rounded p-5 w-full cursor-pointer`}
        >
          <FaStore /> School Store
        </button>
        <button className="flex items-center gap-2 hover:bg-gray-500 py-2 rounded p-5 w-full cursor-pointer">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
