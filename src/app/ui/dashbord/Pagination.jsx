import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between text-sm pt-3">
      <button
        disabled
        className="p-2 disabled:cursor-not-allowed disabled:opacity-10 bg-purple-500 rounded-md max-w-max"
      >
        Previous
      </button>
      <button
        disabled
        className="p-2 px-3 disabled:cursor-not-allowed disabled:opacity-10 bg-purple-500 rounded-md max-w-max"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
