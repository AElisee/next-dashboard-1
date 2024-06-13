import { addProduct } from "@/app/lib/product.action.js";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-bgSoft rounded p-3 mt-5">
      <form action={addProduct} className="w-full">
        <div className="flex gap-5 justify-between">
          <div className="w-1/2 flex flex-col gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="bg-bg p-4 border-none outline-none placeholder:text-textSoft placeholder:opacity-50"
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="bg-bg p-4 border-none outline-none placeholder:text-textSoft placeholder:opacity-50"
            />
            <input
              type="text"
              name="color"
              placeholder="Color"
              className="bg-bg p-4 border-none outline-none placeholder:text-textSoft placeholder:opacity-50"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <select
              name="category"
              id=""
              className="bg-bg p-4 border-none outline-none"
            >
              <option value="general" className="text-textSoft">
                Choose a category
              </option>
              <option value="phone">Phone</option>
              <option value="laptop">Laptop</option>
            </select>
            <input
              name="stock"
              type="text"
              placeholder="Stock"
              className="bg-bg p-4 border-none outline-none placeholder:text-textSoft placeholder:opacity-50"
            />
            <input
              type="text"
              name="size"
              placeholder="Size"
              className="bg-bg p-4 border-none outline-none placeholder:text-textSoft placeholder:opacity-50"
            />
          </div>
        </div>
        <textarea
          name="description"
          id=""
          placeholder="Description"
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
