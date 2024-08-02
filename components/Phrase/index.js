import React from "react";
import { FlipWords } from "../ui/flip-words";

const FlipWordsDemo = () => {
  const words = ["effective", "creative", "innovative", "strategic"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-black">
        Drive
        <FlipWords
          words={words}
          duration={3000}
          className="text-orange-500"
        />{" "}
        <br />
        marketing campaigns with us!
      </div>
    </div>
  );
};

export default FlipWordsDemo;

const FlipWordsDemo2 = () => {
  const words = ["effective", "creative", "innovative", "strategic"];

  return (
    <div className="h-[10rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-black">
        Drive
        <FlipWords
          words={words}
          duration={3000}
          className="text-orange-500 mx-2"
        />
        marketing campaigns with Aceternity UI
      </div>
    </div>
  );
};
