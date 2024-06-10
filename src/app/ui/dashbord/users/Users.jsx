import React from "react";
import { MdSearch } from "react-icons/md";

const Users = () => {
  return (
    <div className="w-full bg-bgSoft rounded-md p-3 mt-3">
      <div className="flex justify-between items-center">
        <div className="w-[180px] flex items-center gap-2 bg-slate-600 p-2 py-0 rounded-md">
          <label htmlFor="search">
            <MdSearch size={20} />
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="p-1 text-sm
            outline-none bg-transparent border-none text-textSoft rounded-md placeholder:text-xs"
          />
        </div>
        <div className="">add user</div>
      </div>
    </div>
  );
};

export default Users;
