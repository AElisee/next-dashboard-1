import React from "react";
import Sidebar from "../ui/dashbord/sidebar/sidebar.jsx";
import Navbar from "../ui/dashbord/navbar/navbar.jsx";
import Footer from "../ui/footer/Footer.jsx";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-1/5 bg-bgSoft p-5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
