// Dashboard charts - uses Chart.js + react-chartjs-2 (Line, Bar, Pie)
// - ChartCard: wrapper with title + chart
// - OrdersChart: line (orders trend)
// - SalesChart: bar (monthly sales)
// - RegistrationsChart: line (new users)
// - SegmentsPie: pie (customer segments)
// - Responsive, maintainAspectRatio: false

import { Card, Typography, Box } from "@mui/material";
import { Line, Bar, Pie } from "react-chartjs-2";
import { JSX } from "react";

import {
  ordersData,
  salesData,
  registrationsData,
  customerSegmentData,
} from "./dashboardData";

interface ChartCardProps {
  title: string;
  chart: JSX.Element;
}

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const ChartCard = ({ title, chart }: ChartCardProps) => (
  <Card sx={{ p: 2, display: "flex", flexDirection: "column", minHeight: 250 }}>
    <Typography variant="h6">{title}</Typography>
    <Box sx={{ flexGrow: 1, height: 0 }}>{chart}</Box>
  </Card>
);

export const OrdersChart = () => (
  <ChartCard
    title="Orders Trend"
    chart={
      <Line
        data={ordersData}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    }
  />
);

export const SalesChart = () => (
  <ChartCard
    title="Sales by Month"
    chart={
      <Bar
        data={salesData}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    }
  />
);

export const RegistrationsChart = () => (
  <ChartCard
    title="New Registrations"
    chart={
      <Line
        data={registrationsData}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    }
  />
);

export const SegmentsPie = () => (
  <ChartCard
    title="Customer Segments"
    chart={
      <Pie
        data={customerSegmentData}
        options={{ responsive: true, maintainAspectRatio: false }}
      />
    }
  />
);
