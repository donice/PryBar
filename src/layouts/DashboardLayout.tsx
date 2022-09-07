import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-[100vh] ">
      <Sidebar />
      <div className="w-[calc(100vw-250px)] p-[2em] overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
