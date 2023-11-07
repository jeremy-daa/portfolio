"use client";
import NavLink from "./Navlink";
const NavBar = () => {
  return (
    <nav
      className="fixed top-5 w-full justify-center items-center md:flex hidden"
      style={{
        zIndex: 10,
      }}
    >
      <ul className="flex p-3 gap-10 bg-[var(--theme-transparent)] px-10 text-base space-x-10 tracking-widest uppercase rounded-lg">
        <li className="navlink">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="navlink">
          <NavLink href="/about">About</NavLink>
        </li>
        <li className="navlink">
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li className="navlink">
          <NavLink href="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
