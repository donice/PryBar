import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[calc(100vw-250px)] p-[2em]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
