"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

export const PieCharts = () => {
  const [radius, setRadius] = useState({
    inner: 70,
    outer: 60,
    outer2: 90,
    label: false,
  });

  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      setRadius({
        inner: width < 640 ? 50 : width < 1024 ? 60 : 70,
        outer: width < 640 ? 40 : width < 1024 ? 50 : 60,
        outer2: width < 640 ? 60 : width < 1024 ? 80 : 90,
        //  1024以下でラベル非表示
        label: width < 1024 == false,
      });
    };

    window.addEventListener("resize", updateRadius);
    updateRadius(); // 初回実行

    return () => window.removeEventListener("resize", updateRadius);
  }, []);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={radius.outer}
          fill="#60a5fa"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={radius.inner}
          outerRadius={radius.outer2}
          fill="#2563eb"
          label={radius.label}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
