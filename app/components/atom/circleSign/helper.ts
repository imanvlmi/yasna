import { CircleColors } from "./types";

export const colorStyle = (color: CircleColors) => {
  const colorVariations = {
    white: "bg-white",
    fail: "bg-red-600",
    success: "bg-green-700",
  };

  const selectedColor = Object.entries(colorVariations).find(
    (key) => key[0] === color && key
  );

  return selectedColor && selectedColor[1];
};
