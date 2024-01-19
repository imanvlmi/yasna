import React from "react";
import { ICircleSign } from "./types";
import { colorStyle } from "./helper";

const CircleSign = ({ color = "white" }: ICircleSign) => {
  return (
    <div
      className={`rounded-full inline-block w-8 h-8 border border-gray-900 mx-[1px] ${colorStyle(
        color
      )}`}
    ></div>
  );
};

export default React.memo(CircleSign);
