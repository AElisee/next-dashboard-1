import Image from "next/image.js";
import React from "react";

const Transactions = () => {
  return (
    <div className="w-full rounded-md bg-bgSoft p-5">
      <div className="font-semibold text-textSoft text-xl pb-4">
        Last transactions
      </div>
      <table className="w-full">
        <thead>
          <tr className="font-semibold text-textSoft">
            <td className="py-3">Name</td>
            <td className="py-3">Status</td>
            <td className="py-3">Date</td>
            <td className="py-3">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr
            className="p-2
          "
          >
            <td className="w-2/5 py-3">
              <span className="flex gap-2 items-center">
                <span className="relative w-[40px] h-[40px] overflow-hidden rounded-full">
                  <Image
                    src="/user_avatar.jpg"
                    fill
                    className="object-cover object-center w-full h-full"
                  />
                </span>
                <span className="text-sm"> Nadia Yao</span>
              </span>
            </td>
            <td className="w-1/5">
              <span>
                <small className="border p-1 px-2 rounded-md">Pending</small>
              </span>
            </td>
            <td className="text-sm w-1/5">10.06.2024</td>
            <td className="text-sm w-1/5">5.000 FCFA</td>
          </tr>
          {/* --- */}
          <tr
            className="p-2 
          "
          >
            <td className="w-2/5 py-1">
              <span className="flex gap-2 items-center">
                <span className="relative w-[40px] h-[40px] overflow-hidden rounded-full">
                  <Image
                    src="/user_avatar.jpg"
                    fill
                    className="object-cover object-center w-full h-full"
                  />
                </span>
                <span className="text-sm"> Nadia Yao</span>
              </span>
            </td>
            <td className="w-1/5">
              <span>
                <small className="border p-1 px-2 rounded-md">Done</small>
              </span>
            </td>
            <td className="text-sm w-1/5">10.06.2024</td>
            <td className="text-sm w-1/5">5.000 FCFA</td>
          </tr>
          {/* --- */}
          <tr
            className="p-2 
          "
          >
            <td className="w-2/5 py-1">
              <span className="flex gap-2 items-center">
                <span className="relative w-[40px] h-[40px] overflow-hidden rounded-full">
                  <Image
                    src="/user_avatar.jpg"
                    fill
                    className="object-cover object-center w-full h-full"
                  />
                </span>
                <span className="text-sm"> Nadia Yao</span>
              </span>
            </td>
            <td className="w-1/5 py-1">
              <span>
                <small className="border p-1 px-2 rounded-md">Cancelled</small>
              </span>
            </td>
            <td className="text-sm w-1/5">10.06.2024</td>
            <td className="text-sm w-1/5">5.000 FCFA</td>
          </tr>
          {/* --- */}
          <tr
            className="p-2 
          "
          >
            <td className="w-2/5 py-1">
              <span className="flex gap-2 items-center">
                <span className="relative w-[40px] h-[40px] overflow-hidden rounded-full">
                  <Image
                    src="/user_avatar.jpg"
                    fill
                    className="object-cover object-center w-full h-full"
                  />
                </span>
                <span className="text-sm"> Nadia Yao</span>
              </span>
            </td>
            <td className="w-1/5">
              <span>
                <small className="border p-1 px-2 rounded-md">Pending</small>
              </span>
            </td>
            <td className="text-sm w-1/5">10.06.2024</td>
            <td className="text-sm w-1/5">5.000 FCFA</td>
          </tr>
          {/* --- */}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
