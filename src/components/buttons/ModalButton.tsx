import React from "react";

const ModalButton = ({ text, css, onClick }: any) => {
  return <button className={`rounded-primary ${css} text-secondary h-[50px]`} onClick={onClick}>{text}</button>;
};

export default ModalButton;
