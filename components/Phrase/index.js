import React from "react";
import { FlipWords } from "../ui/flip-words";

const FlipWordsDemo = () => {
  const words = ["effective", "creative", "innovative", "strategic"];

  return (
    <div className="min-h-[8rem] flex justify-center items-top px-0 md:px-4 overflow-hidden font-mulish">
      <div className="text-4xl mx-auto text-black font-medium">
        Drive
        <FlipWords
          words={words}
          duration={4000}
          className="text-orange-500 inline md:inline -mb-10 -ml-0 md:ml-0 font-black"
        />
        <br />
        marketing campaigns with us!
      </div>
    </div>
  );
};

export default FlipWordsDemo;
