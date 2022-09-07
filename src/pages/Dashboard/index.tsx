import React from "react";
import DashboardButton from "../../components/buttons/DashboardButton";
import DogCard from "../../components/DogCard";
import DashboardInput from "../../components/Input/DashboardInput";
import SidebarHeader from "../../components/SidebarHeader";

const Dashboard = () => {
  return (
    <div className="w-[100%]">
      <SidebarHeader title="DASHBOARD" />
      <div>
        <div className="w-[300px]">
          <p className="text-primary">Search all dogs registered.</p>
          <DashboardInput
            text={""}
            type={""}
            placeholder="Enter a dog name"
            value={""}
            name={""}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 mt-4 gap-8">
        <DogCard />
        <DogCard />
        <DogCard />

        <DogCard />
        <DogCard />
        <DogCard />
      </div>
    </div>
  );
};

export default Dashboard;
