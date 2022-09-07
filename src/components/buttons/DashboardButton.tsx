import React from "react";

interface Props {
  text: string;
  css?: string;
  onClick?: any;
}
const DashboardButton = ({ text, onClick }: Props) => {
  return (
    <button className="bg-brown text-white text-primary rounded-primary py-2 px-4 w-[100%] shadow-activeShadow h-[50px]" onClick={onClick}>
      {text}
    </button>
  );
};

export default DashboardButton;
