import React from "react";
import DashboardButton from "../buttons/DashboardButton";
import DashboardInput from "../Input/DashboardInput";

const Step5 = () => {
  return (
    <div className="overflow-y-scroll">
      <div className="text-primary">
        <p className="font-bold text-grey">GREAT GREAT GRAND PARENTS</p>
        <p className="font-bold mt-2">Step 5/5</p>
      </div>
      <div className="gap-x-[3em] gap-y-[1em] grid grid-cols-2  mt-2">
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

        <DashboardInput
          text="Email Address."
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

export default Step5;
