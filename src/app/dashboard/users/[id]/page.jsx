import Image from "next/image.js";
import React from "react";

const SingleUser = () => {
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
        Elisha Kouassi
      </div>
      <div className="w-3/4">
        <form action="" className="w-full flex flex-col text-sm">
          <label htmlFor="" className="text-textSoft text-sm">
            Username
          </label>
          <input
            type="text"
            name="username"
            defaultValue="Eisha Kouassi"
            placeholder="Username"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue="elisha@gmail.com"
            placeholder="Email"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Password
          </label>
          <input
            type="text"
            name="passsword"
            defaultValue="Koe4d5.dkkdk"
            placeholder="Password"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            defaultValue="0789141381"
            placeholder="Phone"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Address
          </label>
          <textarea
            name=""
            id=""
            rows={1}
            defaultValue=""
            placeholder="No Address"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          ></textarea>
          <label htmlFor="" className="text-textSoft text-sm">
            Is Admin ?
          </label>
          <select
            defaultValue={"No"}
            name="isAdmin"
            id=""
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
            id=""
            className="bg-bg p-4 border-none outline-none mb-3 mt-1"
          >
            <option value={true}>Yes</option>
            <option selected value={false}>
              No
            </option>
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
