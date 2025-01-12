export type DataPoint = {
  name: string; // X軸のラベル
  uv: number; // ユニークユーザー数
  pv: number; // ページビュー数
};

export type AllData = {
  week: DataPoint[];
  month: DataPoint[];
  threeMonths: DataPoint[];
  sixMonths: DataPoint[];
  year: DataPoint[];
};

export const userData: AllData = {
  week: [
    { name: "月", uv: 200, pv: 400 },
    { name: "火", uv: 300, pv: 500 },
    { name: "水", uv: 150, pv: 350 },
    { name: "木", uv: 400, pv: 600 },
    { name: "金", uv: 350, pv: 450 },
    { name: "土", uv: 500, pv: 700 },
    { name: "日", uv: 250, pv: 400 },
  ],
  month: [
    { name: "1週目", uv: 1200, pv: 2400 },
    { name: "2週目", uv: 1500, pv: 2900 },
    { name: "3週目", uv: 1700, pv: 3100 },
    { name: "4週目", uv: 2000, pv: 4000 },
  ],
  threeMonths: [
    { name: "1月", uv: 4000, pv: 2400 },
    { name: "2月", uv: 3000, pv: 1398 },
    { name: "3月", uv: 2000, pv: 9800 },
  ],
  sixMonths: [
    { name: "1月", uv: 4000, pv: 2400 },
    { name: "2月", uv: 3000, pv: 1398 },
    { name: "3月", uv: 2000, pv: 9800 },
    { name: "4月", uv: 2780, pv: 3908 },
    { name: "5月", uv: 1890, pv: 4800 },
    { name: "6月", uv: 2390, pv: 3800 },
  ],
  year: [
    { name: "1月", uv: 4000, pv: 2400 },
    { name: "2月", uv: 3000, pv: 1398 },
    { name: "3月", uv: 2000, pv: 9800 },
    { name: "4月", uv: 2780, pv: 3908 },
    { name: "5月", uv: 1890, pv: 4800 },
    { name: "6月", uv: 2390, pv: 3800 },
    { name: "7月", uv: 3490, pv: 4300 },
    { name: "8月", uv: 3200, pv: 4100 },
    { name: "9月", uv: 2800, pv: 3900 },
    { name: "10月", uv: 3300, pv: 4000 },
    { name: "11月", uv: 3000, pv: 3600 },
    { name: "12月", uv: 3500, pv: 3800 },
  ],
};
