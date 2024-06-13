import { fetchProducts } from "@/app/lib/data.js";
import { deleteProduct } from "@/app/lib/product.action.js";
import { DateFormater } from "@/app/lib/utils.js";
import AddNew from "@/app/ui/dashbord/AddNew.jsx";
import Pagination from "@/app/ui/dashbord/Pagination.jsx";
import SearchUi from "@/app/ui/dashbord/SearchUi.jsx";
import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";

const productsPage = async ({ searchParams }) => {
  const search = searchParams?.search || "";
  const page = searchParams?.page || 1;

  const { count, products } = await fetchProducts(search, page);

  return (
    <div className="w-full bg-bgSoft rounded-md p-3 mt-3">
      <div className="flex justify-between items-center">
        <SearchUi placeholder="product..." />
        <AddNew link="/dashboard/products/add" />
      </div>
      <div className="w-full p-5 px-0">
        <table className="w-full">
          <thead>
            <tr className="text-textSoft font-bold">
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id} className="p-2 text-sm">
                <td className=" py-3">
                  <span className="flex gap-2 items-center">
                    <span className="relative w-[40px] h-[40px] overflow-hidden rounded-full">
                      <Image
                        src="/noproduct.png"
                        fill
                        className="object-cover object-center w-full h-full"
                      />
                    </span>
                    <span className="text-sm">{product.title}</span>
                  </span>
                </td>
                <td>{product.description}</td>
                <td>{parseInt(product.price).toLocaleString()}</td>
                <td>
                  {product?.createdAt
                    ? DateFormater(product.createdAt)
                    : "13.06.2024"}
                </td>
                <td>{product.stock}</td>
                <td>
                  <div className="flex  gap-3 item-center item-center">
                    <Link
                      href={`/dashboard/products/${product?.id}`}
                      className="max-w-max rounded-md block p-1 px-2 text-xs bg-teal-700 text-text font-semibold"
                    >
                      Wiew
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product?.id} />
                      <button className="max-w-max rounded-md block p-1 text-xs bg-red-700 text-text font-semibold">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default productsPage;
