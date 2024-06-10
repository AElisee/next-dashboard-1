"use client";
import Link from "next/link.js";
import { usePathname } from "next/navigation.js";
import React from "react";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex items-center mb-1 p-2 text-text font-normal gap-2 hover:bg-slate-700 rounded-md ${
        pathname === item.path && "bg-slate-600"
      }`}
    >
      {item.icon}
      <span className="text-sm"> {item.title}</span>
    </Link>
  );
};

export default MenuLink;
