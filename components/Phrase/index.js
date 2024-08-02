import React from "react";
import { FlipWords } from "../ui/flip-words";

const FlipWordsDemo = () => {
  const words = ["effective", "creative", "innovative", "strategic"];

  return (
    <div className="min-h-[10rem] flex justify-center items-center px-4 overflow-hidden">
      <div className="text-4xl mx-auto font-normal text-black">
        Drive
        <FlipWords
          words={words}
          duration={4000}
          className="text-orange-500 flex md:inline -mb-10 -ml-2 md:ml-0"
        />
        <br />
        marketing campaigns with us!
      </div>
    </div>
  );
};

export default FlipWordsDemo;
