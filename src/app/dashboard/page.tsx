"use client";

import { useState, useEffect } from "react";
import { UserChart } from "./components/chart/user-chart";

import { AllData, userData } from "@/data/dashboard/user/data";
import { TimeFrames } from "./components/chart/time-frames";
import { PieCharts } from "./components/chart/pie-charts";

const DashboardPage = () => {
  const [timeframe, setTimeframe] = useState<keyof AllData>("week");

  const [chartData, setChartData] = useState(userData[timeframe]);

  useEffect(() => {
    setChartData(userData[timeframe]);
  }, [timeframe]);

  const handleTimeframeChange = (value: keyof AllData) => {
    setTimeframe(value);
  };

  return (
    <div className="mt-1 py-3 px-4 sm:mt-6 sm:py-6 sm:px-8 space-y-4">
      {/* ユーザー数の推移 */}
      <div className="border-2 p-2">
        <div className="flex items-center justify-between max-md:flex-col">
          <p className="text-gray-500 text-sm">ユーザー数の推移</p>

          {/*　年月日 選択  */}
          <div className="flex items-center justify-center">
            <TimeFrames onClick={handleTimeframeChange} />
          </div>
        </div>

        {/* ユーザーチャート */}
        <div className="w-full h-52 sm:h-60 md:h-96 ">
          <UserChart data={chartData} />
        </div>
      </div>

      {/* 円グラフ */}
      <div className="flex items-center justify-center space-x-4">
        <div className="w-full h-52 sm:h-72 border-2 p-2">
          <p className="text-gray-500 text-sm">円グラフ１</p>
          <PieCharts />
        </div>
        <div className="w-full h-52 sm:h-72 border-2 p-2">
          <p className="text-gray-500 text-sm">円グラフ2</p>
          <PieCharts />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
