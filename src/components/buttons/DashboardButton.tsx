import React from "react";

interface Props {
  text: string;
  css?: string;
}

const DashboardButton = ({ text }: Props) => {
  return (
    <button className="bg-brown text-white text-primary rounded-primary py-2 px-4 w-[100%] shadow-activeShadow h-[50px]">
      {text}
    </button>
  );
};

export default DashboardButton;
