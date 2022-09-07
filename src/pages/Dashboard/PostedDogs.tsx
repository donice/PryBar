import React from "react";
import DogCard from "../../components/DogCard";
import DashboardInput from "../../components/Input/DashboardInput";
import SidebarHeader from "../../components/SidebarHeader";

const PostedDogs = () => {
  return (
    <div>
      <SidebarHeader title="POSTED DOGS" />

      <div>
        <div className="w-[300px]">
          <p className="text-primary">Search posted dogs.</p>
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

export default PostedDogs;
