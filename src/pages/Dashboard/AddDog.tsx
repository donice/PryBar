import React, { useState } from "react";
import Step1 from "../../components/AddDogForm";
import Step2 from "../../components/AddDogForm/Step2";
import Step3 from "../../components/AddDogForm/Step3";
import Step4 from "../../components/AddDogForm/Step4";
import Step5 from "../../components/AddDogForm/Step5";
import DashboardButton from "../../components/buttons/DashboardButton";
import SidebarHeader from "../../components/SidebarHeader";

const AddDog = () => {
  const [page, setPage] = useState(0);

  const currentStep = () => {
    switch (page) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      case 4:
        return <Step5 />;
      default:
    }
  };

  const handleSubmit = () => {
    if (page != 4) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <SidebarHeader title="ADD A DOG PROFILE" />

      <div className="w-[95%] flex justify-between mt-[5px]">
        <div className="w-[65%] h-[80vh] overflow-y-scroll pb-[1em] pr-2">
          <div>{currentStep()}</div>
          <div className="flex justify-between items-center mt-[2em]">
            {page > 0 ? (
              <div className="w-[150px]">
                <DashboardButton
                  text="Previous"
                  onClick={() => setPage(page - 1)}
                />
              </div>
            ) : (
              <div></div>
            )}

            <div className="w-[150px]">
              <DashboardButton
                text={page === 4 ? "Submit" : "Next"}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>

        <div className="mt-[2em] w-[30%] text-[12px] text-grey">
          <div className="w-[250px] h-[250px] border-[1px] border-brown rounded-primary"></div>
          <p>File Limit : 700kb</p>

          <div className="mt-[2em] leading-large">
            <p>Keys: </p>
            <p>P: Parent</p>
            <p>GP: Grand parents</p>
            <p>GGP: Great Grand Parents</p>
            <p>GGGP: Great Great Grand Parents</p>
          </div>

          <div className="mt-4 leading-large">
            <p>Note: </p>
            <ul className="list-disc ml-4">
              <li>Odd numbers are for Sires.</li>
              <li>Even numbers are for Dams.</li>
              <li>Enter parents info in this format; Name, Color/Variety.</li>
            </ul>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDog;
