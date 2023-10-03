"use client";

import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "./ModeToggle";
import SearchInput from "./SearchInput";

const routes = [
  {
    name: "Blog",
    pathname: "/blog",
  },
  {
    name: "Docs",
    pathname: "https://github.com/zkemail",
  },
  {
    name: "Demo",
    pathname: "#demos",
  },
  {
    name: "Contact",
    pathname: "https://t.me/yush_g",
  },
];

const Headers = () => {
  const pathname = usePathname();

  return (
    <div className="mt-16 flex items-center w-full justify-between">
      <div className="flex items-center gap-6">
        <Logo />
        <nav className="gap-x-10 lg:flex hidden">
          {routes.map((route) => (
            <Link
              href={route.pathname}
              target={route.name === "Docs" ? "_blank" : "_self"}
              className={cn(
                "hover:bg-0 hover:text-slate-500 transition-all",
                pathname === route.pathname && "text-slate-500"
              )}
              key={route.pathname}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex gap-x-2">
        <SearchInput className="hidden md:flex" />
        <ModeToggle />
        <MobileMenu routes={routes} />
      </div>
    </div>
  );
};

export default Headers;
