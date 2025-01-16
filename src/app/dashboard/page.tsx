"use client";

import { useState, useEffect } from "react";
import { UserChart } from "./components/chart/user-chart";

import { AllData, userData } from "@/data/dashboard/user/data";
import { TimeFrames } from "./components/chart/time-frames";
import { PieCharts } from "./components/chart/pie-charts";
import { DataTebel } from "./components/teble/data-tebel";
import Link from "next/link";

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
          <p className="text-gray-500 text-xs">ユーザー数の推移</p>

          {/*　年月日 選択  */}
          <div className="flex items-center justify-center">
            <TimeFrames onClick={handleTimeframeChange} />
          </div>
        </div>

        {/* ユーザーチャート */}
        <div className="w-full h-52 sm:h-60 md:h-96 ">
          <UserChart data={chartData} />
        </div>

        <div className="text-right">
          <Link href="#" className="text-gray-500 text-xs">
            詳しく見る
          </Link>
        </div>
      </div>

      {/* 円グラフ */}
      <div className="flex items-center justify-center space-x-4">
        {/* 円グラフ1 */}
        <div className="w-full h-full border-2 p-2">
          <p className="text-gray-500 text-xs">円グラフ１</p>

          {/* グラフ */}
          <div className="h-44 sm:h-60 md:h-72">
            <PieCharts />
          </div>

          {/* リンク */}
          <div className="text-right">
            <Link href="#" className="text-gray-500 text-xs">
              詳しく見る
            </Link>
          </div>
        </div>

        {/* 円グラフ2 */}
        <div className="w-full h-full border-2 p-2">
          <p className="text-gray-500 text-xs">円グラフ2</p>

          {/* グラフ */}
          <div className="h-44 sm:h-60 md:h-72">
            <PieCharts />
          </div>

          {/* リンク */}
          <div className="text-right">
            <Link href="#" className="text-gray-500 text-xs">
              詳しく見る
            </Link>
          </div>
        </div>
      </div>

      {/* データテーブル */}
      <div className="flex flex-col">
        <div className="border-2 p-2">
          <p className="text-gray-500 text-xs mb-2">商品情報</p>
          <DataTebel />
          {/* リンク */}
          <div className="text-right pt-2">
            <Link href="#" className="text-gray-500 text-xs">
              詳しく見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
