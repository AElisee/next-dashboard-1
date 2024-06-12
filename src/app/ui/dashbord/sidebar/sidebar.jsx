import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import MenuLink from "./MenuLink.jsx";
import Image from "next/image.js";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
  return (
    <div className="sticky top-4">
      <div className="flex items-center gap-1 py-3">
        <div className="relative w-[45px] h-[45px] rounded-full overflow-hidden">
          <Image
            src="/user_avatar.jpg"
            fill
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="flex flex-col pl-2">
          <span className="font-semibold">Elisha Kouassi</span>
          <small>
            <span className="text-textSoft">Administrateur</span>
          </small>
        </div>
      </div>
      <ul className="">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="font-bold text-textSoft text-base pb-2 block">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink key={item.title} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <div>
        <button className="flex rounded-md p-2 gap-1 items-center hover:bg-slate-700 w-full">
          <MdLogout size={21} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
