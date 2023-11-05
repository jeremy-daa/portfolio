"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink = ({
  href,
  exact = true,
  children,
  className = "",
  onClick,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    className += " active";
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
