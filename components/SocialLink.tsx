import Link from "next/link";
import React from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  mono?: boolean;
}
const SocialLink = ({ href, icon, text, mono }: SocialLinkProps) => {
  return (
    <Link
      className={`bg-[var(--white)] p-3 px-5 w-28 text-[var(--theme)] hover:bg-[var(--theme)] hover:text-[var(--white)] duration-200 rounded-md hover:scale-105 flex flex-col gap-2 justify-center items-center border-2 border-[var(--theme)] hover:border-[var(--white)] ${
        mono && "font-mono"
      }`}
      href={href}
      target="_blank"
    >
      <div className="text-5xl cursor-pointer">{icon}</div>
      <p className="text-sm font-bold">{text}</p>
    </Link>
  );
};

export default SocialLink;
