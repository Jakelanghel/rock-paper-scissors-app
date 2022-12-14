import { useState } from "react";

export const useHand = (arr) => {
  const options = ["rock", "paper", "scissors"];
  const [handData, setHandData] = useState({});
  arr.forEach((className) => {
    options.forEach((option) => {
      if (option === className) {
        setHandData(option);
      }
    });
  });
  return handData;
};
