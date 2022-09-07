import React from "react";

interface Props {
  children: any;
}

const Modal = ({ children }: Props) => {
  return (
    <div className="bg-grey absolute top-0 bottom-0 left-0 h-[100vh] w-full flex justify-center items-center">
      <div className="bg-brown text-white rounded-secondary ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
