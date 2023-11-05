import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-full text-[var(--theme-text)]">
      <Image
        src="/404.svg"
        alt="404"
        width={500}
        height={500}
        className="object-contain"
      />
    </div>
  );
};

export default page;
