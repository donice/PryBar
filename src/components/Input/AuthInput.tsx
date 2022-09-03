import React from "react";

interface Props {
  text: string;
  type: string;
  placeholder: string;
  onChange?: () => void;
  onBlur?: () => void;
  error?: string;
  value: string;
  name: string;
}

const AuthInput = ({
  text,
  type,
  placeholder,
  onChange,
  onBlur,
  error,
  value,
  name,
}: Props) => {
  return (
    <div className="text-primary flex flex-col">
      <label htmlFor={name} className="text-black">{text}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        className="rounded-primary border-[1px] border-black h-[50px] text-primary pl-2 outline-none my-2"
      />
      <p>{error}</p>
    </div>
  );
};

export default AuthInput;
