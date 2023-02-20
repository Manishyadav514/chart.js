import React from "react";

interface ButtonBWProps {
  label: string;
  darkButton: boolean;
}

export const ButtonBW = ({ label, darkButton }: ButtonBWProps) => {
  return (
    <div
      className={`min-w-[70px] uppercase px-3 py-[6px] inline-block transition duration-300 ease-in-out hover:ease-in-out text-sm border-2 poimter rounded ${
        darkButton
          ? " border-[#222] text-[#222] hover:bg-[#222] hover:text-white"
          : "ease-in-out text-white border-white hover:text-[#222] hover:bg-white"
      }`}
    >
      {label}
    </div>
  );
};
