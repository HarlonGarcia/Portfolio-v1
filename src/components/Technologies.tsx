import React from "react";
import ScrollReveal from "./ScrollReveal";

const Technologies = () => {
  return (
    <ScrollReveal classes="text-black font-raleway dark:text-white">
      <>
        <h2 className="font-roboto text-xl mb-4">
          My favorite{" "}
          <span className="border-b-2 border-red">technologies</span>
        </h2>
        <div>
          <h3>First</h3>
          <h3>Second</h3>
          <h3>Third</h3>
        </div>
      </>
    </ScrollReveal>
  );
};

export default Technologies;
