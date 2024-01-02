"use client";

import { usePathname } from "next/navigation";
import ModeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathName = usePathname();
  const renderNull =
    pathName === "/login" || pathName === "/register" || pathName === "/";
  if (renderNull) {
    return null;
  }
  return (
    <nav className="fixed w-full flex items-center justify-between">
      <div>Logo</div>
      <div>Find flight</div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
