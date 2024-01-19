import React from "react";
import { ICard } from "./types";

const Card = ({
  backgroundColor = "bg-blue-400",
  text,
  className,
  onClick,
}: ICard) => {
  return (
    <div
      onClick={onClick}
      className={`text-center rounded py-3 ${backgroundColor} ${className}`}
    >
      {text}
    </div>
  );
};

export default React.memo(Card);
