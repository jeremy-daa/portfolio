import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <Link href="/">
          <Image
            src="/ermiyas-letter.png"
            alt="Logo"
            width={50}
            height={50}
            className="p-1 bg-[#1b1b1b] rounded-full"
          />
        </Link>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              href="/"
              className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/stories"
              className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              Stories & Solutions
            </Link>
          </li>
        </ul>
      </div>
      <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4">
        © {new Date().getFullYear()}&nbsp; Made with ❤️ by{" "}
        <a
          href="https://github.com/jeremy-daa/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Ermiyas Dagnachew
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
