import React from "react";
import DashboardButton from "../../components/buttons/DashboardButton";
import DashboardInput from "../../components/Input/DashboardInput";
import SidebarHeader from "../../components/SidebarHeader";

const MyProfile = () => {
  return (
    <div>
      <SidebarHeader title="MY PROFILE" />

      <div className="w-[70%] mt-[2.5em]">
        <div className="gap-x-[3em] gap-y-[1em] grid grid-cols-2">
          <DashboardInput
            text="Full name."
            type="text"
            placeholder=""
            value={""}
            name={""}
          />
          <DashboardInput
            text="Registration Number."
            type="text"
            placeholder=""
            value={""}
            name={""}
          />

          <DashboardInput
            text="Email Address."
            type="text"
            placeholder=""
            value={""}
            name={""}
          />

          <DashboardInput
            text="Kennel Name."
            type="text"
            placeholder=""
            value={""}
            name={""}
          />
        </div>
        <div className="mt-4">
          <DashboardInput
            text="Address."
            type="text"
            placeholder=""
            value={""}
            name={""}
          />
        </div>

        <div className="flex justify-between items-center mt-[2em]">
          <p className="text-grey text-primary">No of Posted Dogs: 6</p>
          <div className="w-[150px]">
            <DashboardButton text="Add a Dog" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
