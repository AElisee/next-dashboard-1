import React from "react";
import { MdSearch } from "react-icons/md";

const SearchUi = ({ placeholder }) => {
  return (
    <div className="w-[180px] flex items-center gap-2 bg-slate-600 p-2 py-0 rounded-md">
      <label htmlFor="search">
        <MdSearch size={20} />
      </label>
      <input
        type="text"
        id="search"
        placeholder={`Search for a ${placeholder}`}
        className="p-1 text-sm
        outline-none bg-transparent border-none text-textSoft rounded-md placeholder:text-xs"
      />
    </div>
  );
};

export default SearchUi;
