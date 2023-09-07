import React from "react";
import { useSelector } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import AdminLayout from "../../components/layouts/AdminLayout";

function Dashboard() {
  const bookList = useSelector((state) => state.book.bookList);
  const isAvailableCount = bookList.filter((book) => book.isAvailable).length;
  const isNotAvailableCount = bookList.length - isAvailableCount;
  console.log(bookList);
  const data = [
    {
      name: "Books",
      available: isAvailableCount,
      notAvailable: isNotAvailableCount,
    },
  ];

  return (
    <div>
      <AdminLayout>
        <h3>Dashboard</h3>
        <hr></hr>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="available" fill="#8884d8" />
          <Bar dataKey="notAvailable" fill="#82ca9d" />
        </BarChart>
      </AdminLayout>
    </div>
  );
}

export default Dashboard;
