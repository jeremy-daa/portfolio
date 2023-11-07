"use client";
import Link from "next/link";
import React, { useState } from "react";

const MobileNav = () => {
  const [hiddeNav, setHidenav] = useState(false);
  const handleClick = () => {
    setHidenav(!hiddeNav);
  };
  return (
    <>
      <input
        type="checkbox"
        name="icon"
        id="icon"
        checked={hiddeNav}
        className="-ml-10 menu-checkbox"
        hidden
      />
      <label
        htmlFor="icon"
        className="burger-icon relative cursor-pointer md:hidden block"
        onClick={handleClick}
      ></label>
      <div className="right-0 top-0 h-[100vh] w-[350px] fixed md:hidden duration-300 flex bg-[var(--theme-transparenter)] z-50 flex-col justify-center items-end gap-10 text-2xl tracking-widest uppercase p-10 pr-10 rounded-l-[48%] translate-x-[100%] mobile-nav">
        <Link
          href="/"
          className="after:w-full after:h-[2px] after:bg-white after:block"
          onClick={handleClick}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="after:w-full after:h-[2px] after:bg-white after:block"
          onClick={handleClick}
        >
          About
        </Link>
        <Link
          href="/projects"
          className="after:w-full after:h-[2px] after:bg-white after:block"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="after:w-full after:h-[2px] after:bg-white after:block"
          onClick={handleClick}
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default MobileNav;
