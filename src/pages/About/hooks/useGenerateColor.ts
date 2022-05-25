import { useState } from "react";
import { getRandomInteger } from "../../../utils";

export const useGenerateColor = () => {
  const [randomColor, setRandomColor] = useState("rgb(129, 178, 154)");

  const generateColor = () => {
    setRandomColor(
      `rgb(${[...new Array(3)].map(() => getRandomInteger(0, 255)).join(", ")})`,
    );
  };

  return { randomColor, generateColor };
};
