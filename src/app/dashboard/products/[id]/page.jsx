import { fetchSingleProduct } from "@/app/lib/data.js";
import { UpdateProduct } from "@/app/lib/product.action.js";
import Image from "next/image.js";
import React from "react";

const SingleProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchSingleProduct(id);
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
        <h3 className="text-xl font-semibold">{product?.title}</h3>
      </div>
      <div className="w-3/4">
        <form action={UpdateProduct} className="w-full flex flex-col text-sm">
          <input type="hidden" name="id" value={id} />
          <label htmlFor="" className="text-textSoft text-sm">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={product.title}
            placeholder="title"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Category
          </label>
          <select
            name="category"
            defaultValue={product.category}
            className="bg-bg p-4 border-none outline-none mb-3 mt-1"
          >
            <option value="phone">Phone</option>
            <option value={false}>Laptop</option>
          </select>
          <label htmlFor="" className="text-textSoft text-sm">
            Price
          </label>
          <input
            type="text"
            name="price"
            defaultValue={parseInt(product?.price).toLocaleString()}
            placeholder="Price"
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Color
          </label>
          <input
            type="text"
            name="color"
            defaultValue={product?.color}
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Stock
          </label>
          <input
            type="text"
            name="stock"
            defaultValue={product?.stock}
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Size
          </label>
          <input
            type="text"
            name="size"
            defaultValue={product?.size}
            className="bg-bg p-3 mb-3 mt-1 w-full border-none outline-none"
          />
          <label htmlFor="" className="text-textSoft text-sm">
            Description
          </label>
          <textarea
            name="description"
            rows={2}
            defaultValue={product?.description}
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
