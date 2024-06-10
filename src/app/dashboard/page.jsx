import React from "react";
import Card from "../ui/dashbord/card/Card.jsx";
import RightBar from "../ui/dashbord/rightbar/RightBar.jsx";
import Transactions from "../ui/dashbord/transactions/Transactions.jsx";
import Chart from "../ui/dashbord/chart/Chart.jsx";

const DashbordPage = () => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col w-3/4 gap-5">
        <div className="flex gap-3 pt-5">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="w-1/4">
        <RightBar />
      </div>
    </div>
  );
};

export default DashbordPage;
