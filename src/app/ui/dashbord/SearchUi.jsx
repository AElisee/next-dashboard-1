"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation.js";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

const SearchUi = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // useDebouncedCallback : attendre un moment avant de rendre les datas après que l'utilisateur ait finit de taper
  
  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("search", e.target.value);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="w-[180px] flex items-center gap-2 bg-slate-600 p-2 py-0 rounded-md">
      <label htmlFor="search">
        <MdSearch size={20} />
      </label>
      <input
        type="text"
        id="search"
        placeholder={`Search for a ${placeholder}`}
        onChange={handleSearch}
        className="p-1 text-sm
        outline-none bg-transparent border-none text-textSoft rounded-md placeholder:text-xs"
      />
    </div>
  );
};

export default SearchUi;
