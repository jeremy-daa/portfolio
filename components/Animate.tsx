"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { use, useEffect } from "react";

const Animate = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      // page transition animation starts small and grows to full size while growing its translated y axis acouple of pixels to give it a nice effect
      initial={{ opacity: 0, scale: 0.9, translateY: "10%" }}
      animate={{ opacity: 1, scale: 1, translateY: "0%" }}
      transition={{ duration: 0.2 }}
      className="base-page-size"
    >
      {children}
    </motion.div>
  );
};

export default Animate;
