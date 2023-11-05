"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Navigation = () => {
  const pathnames = ["/", "/about", "/projects", "/contact"];
  const pathname = usePathname();
  return (
    <>
      <Link
        className="fixed right-5 top-[50%] p-3 rounded-full bg-[var(--white)] pulse fadein z-50"
        href={
          pathnames.indexOf(pathname) === pathnames.length - 1
            ? pathnames[0]
            : pathnames[pathnames.indexOf(pathname) + 1]
        }
      >
        <FaAngleRight
          className="text-3xl text-[var(--theme)]"
          style={{
            transform: "translateX(1px)",
          }}
        />
      </Link>
      <Link
        className="fixed left-5 top-[50%] p-3 rounded-full bg-[var(--white)] pulse fadein z-50"
        href={
          pathnames.indexOf(pathname) === 0
            ? pathnames[pathnames.length - 1]
            : pathnames[pathnames.indexOf(pathname) - 1]
        }
      >
        <FaAngleLeft
          className="text-3xl text-[var(--theme)]"
          style={{
            transform: "translateX(-1px)",
          }}
        />
      </Link>
    </>
  );
};

export default Navigation;
