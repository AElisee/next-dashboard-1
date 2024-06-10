"use client";
import { usePathname } from "next/navigation.js";
import React from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between p-4 py-3 rounded-md bg-bgSoft">
      {/* tittle */}
      <div className="font-bold text-textSoft capitalize">
        {pathname.split("/").pop()}
      </div>
      {/* menu */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 bg-slate-600 p-2 rounded-md">
          <label htmlFor="search">
            <MdSearch size={20} />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="p-1
          outline-none bg-transparent border-none text-textSoft rounded-md"
          />
        </div>
        {/* icons */}
        <div className="flex items-center gap-3">
          <MdOutlineChat size={20} className="cursor-pointer" />
          <MdNotifications size={20} className="cursor-pointer" />
          <MdPublic size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
