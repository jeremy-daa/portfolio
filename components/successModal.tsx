import React from "react";
import { BsCheck2Circle } from "react-icons/bs";

const successModal = () => {
  return (
    <div
      className="fixed bottom-10 z-50 left-[50%] translate-x-[-50%] px-10 py-3 justify-between items-center gap-5 bg-[var(--theme)] boxshadow border-green-500 border-2 opacity-0 transition-all duration-500 flex"
      id="successModal"
    >
      <BsCheck2Circle className="text-3xl text-green-500 " />
      <h1 className="text-green-500 text-lg">
        Successful, I&apos;ll get back to you ASAP
      </h1>
    </div>
  );
};

export default successModal;
