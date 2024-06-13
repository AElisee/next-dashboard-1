import { addUser } from "@/app/lib/user.action.js";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-bgSoft rounded p-3 mt-5">
      <form action={addUser} className="w-full">
        <div className="flex gap-5 justify-between">
          <div className="w-1/2 flex flex-col gap-4">
            <input
              name="username"
              type="text"
              placeholder="Username"
              className="bg-bg p-4 border-none outline-none placeholder:text-textSoft placeholder:opacity-50"
            />
            <input
              name="password"
              type="text"
              placeholder="Password"
              className="bg-bg p-4 border-none outline-none placeholder:text-textSoft placeholder:opacity-50"
            />
            <select
              name="isAdmin"
              id=""
              className="bg-bg p-4 border-none outline-none"
            >
              <option value={false} selected className="text-textSoft">
                is Admin ?
              </option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="bg-bg p-4 border-none outline-none placeholder:text-textSoft placeholder:opacity-50"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="bg-bg p-4 border-none outline-none placeholder:text-textSoft placeholder:opacity-50"
            />
            <select
              name="isActive"
              id=""
              className="bg-bg p-4 border-none outline-none"
            >
              <option value={false} selected className="text-textSoft">
                is Active ?
              </option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        <textarea
          name="address"
          id=""
          placeholder="Address"
          className="bg-bg p-4 border-none outline-none w-full h-[170px] mt-3 placeholder:text-textSoft placeholder:opacity-50"
        ></textarea>
        <button
          type="submit"
          className="block mt-3 p-3 w-full rounded-md bg-purple-700 text-text
        "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
