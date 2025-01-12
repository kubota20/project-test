"use client";
import { DataPoint } from "@/data/dashboard/user/data";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from "recharts";

type UserChartProps = {
  data: DataPoint[];
};

export const UserChart = ({ data }: UserChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        {/* ユニークユーザー数 */}
        <Bar
          dataKey="pv"
          fill="#60a5fa"
          activeBar={<Rectangle stroke="black" />}
        />

        {/* ページビュー数 */}
        <Bar
          dataKey="uv"
          fill="#2563eb"
          activeBar={<Rectangle stroke="black" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
