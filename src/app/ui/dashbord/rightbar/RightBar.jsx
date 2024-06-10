import Image from "next/image.js";
import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const RightBar = () => {
  return (
    <div className="flex flex-col gap-2 fixed mt-5">
      <div className="relative bg-gradient-to-b from-bgLight to-bgSoft rounded-md rounded-br-none rounded-tr-none p-3">
        <div className="absolute bottom-0 w-1/2 h-1/2 right-0 ">
          <Image
            src={"/astronaut.png"}
            alt=""
            fill
            className="opacity-20 object-contain"
          />
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <span className="font-semibold">🔥 Available Now</span>
          <h3 className="font-semibold">
            How to use the new version of the admin dashboard
          </h3>
          <span className="text-textSoft">
            <small>Takes 4 minutes to learn</small>
          </span>
          <p className="text-textSoft">
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              ducimus.
            </small>
          </p>
          <button className="flex items-center gap-1  bg-indigo-700 p-2 py-1 rounded-md max-w-max">
            <MdPlayCircleFilled size={24} />
            Watch
          </button>
        </div>
      </div>
      {/* --- */}
      <div className="bg-gradient-to-b from-bgLight to-bgSoft rounded-md rounded-br-none rounded-tr-none p-3">
        <div className="text-sm flex flex-col gap-2">
          <span className="font-semibold">🚀 Coming Soon</span>
          <h3 className="font-semibold">
            How to use the new version of the admin dashboard
          </h3>
          <span className="text-textSoft">
            <small>Boost your productivity</small>
          </span>
          <p className="text-textSoft">
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eius libero perspiciatis recusandae possimus.
            </small>
          </p>
          <button className="flex items-center gap-1 bg-indigo-700 p-2 py-1 rounded-md max-w-max">
            <MdReadMore size={24} />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
