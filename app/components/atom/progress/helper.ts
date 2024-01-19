import { ProgressColors } from "./types";

export const colorStyle = (color: ProgressColors) => {
  const colorVariations = {
    primary: "bg-blue-600",
    gray: "bg-gray-900",
    warning: "bg-yellow-300",
    success: "bg-green-700",
    orange: "bg-orange-400",
    indigo: "bg-indigo-600",
    pink: "bg-pink-500",
    purple: "bg-purple-600",
  };

  const selectedColor = Object.entries(colorVariations).find(
    (key) => key[0] === color && key
  );

  return selectedColor && selectedColor[1];
};
