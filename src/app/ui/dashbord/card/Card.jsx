import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="w-full flex gap-5 p-3 rounded-md bg-bgSoft cursor-pointer hover:bg-bg">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col text-sm gap-2">
        <span className="font-semibold text-textSoft">Total Users</span>
        <span className="font-bold text-base text-text">10,273</span>
        <span className="">
          <small>
            <span className="text-green-500">12%</span> more than previous week
          </small>
        </span>
      </div>
    </div>
  );
};

export default Card;
