import Link from "next/link.js";
import React from "react";

const AddNew = ({ link }) => {
  return (
    <div>
      <Link
        href={link}
        className="p-2 max-w-max bg-purple-700 text-text font-bold text-xs rounded-md"
      >
        Add new
      </Link>
    </div>
  );
};

export default AddNew;
