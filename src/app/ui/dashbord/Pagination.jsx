"use client";
import { ITEMS_PER_PAGE } from "@/app/lib/utils.js";
import { usePathname, useRouter, useSearchParams } from "next/navigation.js";
import React from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);

  const hasPrev = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext =
    ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params?.set("page", parseInt(page) - 1)
      : params?.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center justify-between text-sm pt-3">
      <button
        onClick={() => handleChangePage("prev")}
        disabled={!hasPrev}
        className="p-2 disabled:cursor-not-allowed disabled:opacity-5 bg-purple-500 rounded-md max-w-max"
      >
        Previous
      </button>
      <button
        onClick={() => handleChangePage("next")}
        disabled={!hasNext}
        className="p-2 px-3 disabled:cursor-not-allowed disabled:opacity-5 bg-purple-500 rounded-md max-w-max"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
