import React from "react";
import DashboardButton from "../buttons/DashboardButton";
import DashboardInput from "../Input/DashboardInput";

const Step1 = () => {
  return (
    <div className="overflow-y-scroll">
      <div className="text-primary">
        <p className="font-bold text-grey">PROFILE</p>
        <p className="font-bold mt-2">Step 1/5</p>
      </div>
      <div className="gap-x-[3em] gap-y-[1em] grid grid-cols-2  mt-2">
        <DashboardInput
          text="Registration ID."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />
        <DashboardInput
          text="Name."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Date of Birth.."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Breed."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Sex."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Color."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Hip Score."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Titles achieved."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="DNA Result."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />
        <DashboardInput
          text="Breeder."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />
      </div>

      <div className="mt-4">
        <DashboardInput
          text="Description."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />
      </div>

      {/* <div className="flex justify-between items-center mt-[2em]">
        <div></div>

        <div className="w-[150px]">
          <DashboardButton text="Next" />
        </div>
      </div> */}
    </div>
  );
};

export default Step1;
