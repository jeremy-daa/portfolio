import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const failureModal = () => {
  return (
    <div
      className="fixed bottom-10 z-50 left-[50%] translate-x-[-50%] px-10 py-3 justify-between items-center gap-5 bg-[var(--theme)] boxshadow border-red-500 border-2 opacity-0 transition-all duration-500 flex"
      id="failureModal"
    >
      <IoCloseCircleOutline className="text-3xl text-red-500 " />
      <h1 className="text-red-500 text-lg">
        I could&apos;ve sworn it worked on my machine
      </h1>
    </div>
  );
};

export default failureModal;
