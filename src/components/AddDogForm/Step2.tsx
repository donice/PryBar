import React from "react";
import DashboardButton from "../buttons/DashboardButton";
import DashboardInput from "../Input/DashboardInput";

const Step2 = () => {
  return (
    <div className="overflow-y-scroll">
      <div className="text-primary">
        <p className="font-bold text-grey">PARENTS AND GRAND PARENTS</p>
        <p className="font-bold mt-2">Step 2/5</p>
      </div>
      <div className="gap-x-[3em] gap-y-[1em] grid grid-cols-2  mt-2">
        <DashboardInput
          text="Sire-0.."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />
        <DashboardInput
          text="Dam-0."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Sire-GP1."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Dam-GP2."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Sire-GP3."
          type="text"
          placeholder=""
          value={""}
          name={""}
        />

        <DashboardInput
          text="Dam-GP4."
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

export default Step2;
