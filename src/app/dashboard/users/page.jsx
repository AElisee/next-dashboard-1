import AddNew from "@/app/ui/dashbord/AddNew.jsx";
import Pagination from "@/app/ui/dashbord/Pagination.jsx";
import SearchUi from "@/app/ui/dashbord/SearchUi.jsx";
import Image from "next/image.js";
import Link from "next/link.js";
import React from "react";

const usersPage = () => {
  return (
    <div className="w-full bg-bgSoft rounded-md p-3 mt-3">
      <div className="flex justify-between items-center">
        <SearchUi placeholder="user..." />
        <AddNew link="/dashboard/users/add" />
      </div>
      <div className="w-full p-5 px-0">
        <table className="w-full">
          <thead>
            <tr className="text-textSoft font-bold">
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr className="p-2 text-sm">
              <td className=" py-3">
                <span className="flex gap-2 items-center">
                  <span className="relative w-[40px] h-[40px] overflow-hidden rounded-full">
                    <Image
                      src="/user_avatar.jpg"
                      fill
                      className="object-cover object-center w-full h-full"
                    />
                  </span>
                  <span className="text-sm"> Marc Ettien</span>
                </span>
              </td>
              <td>mc@gmail.com</td>
              <td>10.06.2024</td>
              <td>Admin</td>
              <td>Active</td>
              <td>
                <div className="flex  gap-3 item-center item-center">
                  <Link
                    href=""
                    className="max-w-max rounded-md block p-1 px-2 text-xs bg-teal-700 text-text font-semibold"
                  >
                    Wiew
                  </Link>
                  <Link
                    href=""
                    className="max-w-max rounded-md block p-1 text-xs bg-red-700 text-text font-semibold"
                  >
                    Delete
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default usersPage;
