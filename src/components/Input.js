import React from "react";

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  min,
  max,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-2 text-sm leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    />
  );
};
