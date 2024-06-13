import { fetchSingleUser } from "@/app/lib/data.js";
import { UpdateUser } from "@/app/lib/user.action.js";
import Image from "next/image.js";
import React from "react";

const SingleUser = async ({ params }) => {
  const { id } = params;
  const user = await fetchSingleUser(id);
  console.log(user);

  return (
    <div className="mt-3 p-3 flex  w-full gap-3 bg-bgSoft rounded-md">
      <div className="w-1/4 flex flex-col items-center h-[230px]  gap-2 rounded-md bg-bg p-3">
        <div className="relative p-2 w-5/6 h-[200px] overflow-hidden">
          <Image
            src="/user_avatar.jpg"
            fill
            className="object-cover object-center rounded-md"
          />
        </div>
        <h3 className="capitalize text-xl font-semibold"> {user.username}</h3>
      </div>
      <div className="w-3/4">
        <form action={UpdateUser} className="w-full flex flex-col text-sm">
          <input type="hidden" name="id" value={id} />
          <label htmlFor="" className="text-textSoft text-sm">
            Username
          </label>
          <input
            type="text"
            name="username"
            defaultValue={user?.username}
            placeholder={user?.username}
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Password
          </label>
          <input
            name="password"
            type="text"
            placeholder="passsword"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            defaultValue={user?.phone}
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Address
          </label>
          <textarea
            name="address"
            id=""
            rows={1}
            defaultValue={user?.address}
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          ></textarea>
          <label htmlFor="" className="text-textSoft text-sm">
            Is Admin ?
          </label>
          <select
            name="isAdmin"
            defaultValue={user.isAdmin}
            className="bg-bg p-4 border-none outline-none mb-3 mt-1"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="" className="text-textSoft text-sm">
            Is active ?
          </label>
          <select
            name="isActive"
            defaultValue={user?.isActive}
            className="bg-bg p-4 border-none outline-none mb-3 mt-1"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className="bg-teal-700 p-3 text-base" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUser;
