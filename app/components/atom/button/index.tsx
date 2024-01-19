"use client";
import React from "react";
import { IButton } from "./types";
const Button = ({
  color = "bg-blue-400",
  textColor = "text-white",
  title,
  type = "button",
  onClick,
}: IButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${color} ${textColor} py-2 px-3 rounded`}
    >
      {title}
    </button>
  );
};

export default React.memo(Button);
