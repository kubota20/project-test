import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: "INV001",
    status: "Paid",
    paymentMethod: "Credit Card",
    amount: "$250.00",
  },
  {
    id: "INV002",
    status: "Pending",
    paymentMethod: "PayPal",
    amount: "$100.00",
  },
  {
    id: "INV003",
    status: "Paid",
    paymentMethod: "Bank Transfer",
    amount: "$500.00",
  },
  {
    id: "INV004",
    status: "Overdue",
    paymentMethod: "Credit Card",
    amount: "$300.00",
  },
];

export const DataTebel = () => {
  return (
    <Table className="border">
      <TableHeader>
        <TableRow className="bg-blue-400">
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id} className="">
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell className="text-nowrap">{item.paymentMethod}</TableCell>
            <TableCell className="text-right">{item.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
