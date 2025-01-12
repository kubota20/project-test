"use client";

import { useState, useEffect } from "react";
import { UserChart } from "./components/chart/user-chart";

import { AllData, userData } from "@/data/dashboard/user/data";
import { TimeFrames } from "./components/chart/time-frames";

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
    <div className="mt-6 py-6 px-8">
      {/* ユーザー数の推移 */}
      <div className="border-2 p-2">
        <div className="flex items-center justify-between">
          <p className="pl-20 text-gray-500 text-sm">ユーザー数の推移</p>

          {/*　年月日 選択  */}
          <div className="flex items-center justify-center">
            <TimeFrames onClick={handleTimeframeChange} />
          </div>
        </div>

        {/* ユーザーチャート */}
        <div className="w-full h-96">
          <UserChart data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
