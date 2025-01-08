export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // statusプロパティが「保留中」または「支払い済み」の 2 つの文字列のいずれかのみであることを意味します。
  status: "pending" | "paid";
};

export const invoices: Invoice[] = [
  {
    id: "0",
    customer_id: "customer_id_0",
    amount: 15795,
    status: "pending",
    date: "2022-12-06",
  },
  {
    id: "1",
    customer_id: "customer_id_1",
    amount: 20348,
    status: "pending",
    date: "2022-11-14",
  },
  {
    id: "2",
    customer_id: "customer_id_2",
    amount: 10348,
    status: "pending",
    date: "2023-11-14",
  },
  {
    id: "3",
    customer_id: "customer_id_3",
    amount: 30348,
    status: "pending",
    date: "2024-11-14",
  },
  {
    id: "4",
    customer_id: "customer_id_4",
    amount: 10348,
    status: "pending",
    date: "2025-11-14",
  },
];
