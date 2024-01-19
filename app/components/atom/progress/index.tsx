import React from "react";
import { colorStyle } from "./helper";
import { IProgressProps } from "./types";

const Progress = ({ color = "success", percent }: IProgressProps) => {
  return (
    <div className="relative">
      <div className={"w-full bg-gray-200 rounded-full h-4"}>
        <div
          className={`${colorStyle(color)} h-4 rounded-full`}
          style={{ width: percent + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default React.memo(Progress);
