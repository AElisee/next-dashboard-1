import Image from "next/image.js";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="mt-3 p-3 flex  w-full gap-3 bg-bgSoft rounded-md">
      <div className="w-1/4 flex flex-col items-center h-[230px]  gap-2 rounded-md bg-bg p-3">
        <div className="relative p-2 w-5/6 h-[200px] overflow-hidden">
          <Image
            src="/noproduct.png"
            fill
            className="object-cover object-center rounded-md"
          />
        </div>
        Samsung
      </div>
      <div className="w-3/4">
        <form action="" className="w-full flex flex-col text-sm">
          <label htmlFor="" className="text-textSoft text-sm">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue="Samsung"
            placeholder="title"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Is Admin ?
          </label>
          <select
            name="category"
            id=""
            className="bg-bg p-4 border-none outline-none mb-3 mt-1"
          >
            <option selected value="">
              Phone
            </option>
            <option value={false}>Laptop</option>
          </select>
          <label htmlFor="" className="text-textSoft text-sm">
            Price
          </label>
          <input
            type="text"
            name="price"
            defaultValue="200.000"
            placeholder="Price"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Color
          </label>
          <input
            type="text"
            name="color"
            defaultValue="Blue"
            placeholder="Color"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Stock
          </label>
          <input
            type="text"
            name="stock"
            defaultValue="34"
            placeholder="Stock"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Size
          </label>
          <input
            type="text"
            name="size"
            defaultValue=""
            placeholder="Size"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Description
          </label>
          <textarea
            name=""
            id=""
            rows={1}
            defaultValue=""
            placeholder="Description"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          ></textarea>
          <button className="bg-teal-700 p-3 text-base" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
