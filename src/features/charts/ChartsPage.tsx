// Charts Page - Displays various analytics charts for Urban Food
// - Uses Chart.js via react-chartjs-2 for Line and Bar charts
// - Responsive design: adapts grid layout for mobile (<600px)
// - Charts included:
//    • Orders Overview (Line chart)
//    • User Registrations (Line chart)
//    • Monthly Revenue (Bar chart)
//    • Satisfaction Rate (Line chart)
//    • Sales Performance (Bar chart)
// - Styled with card-like divs, shadows, and colors for visual distinction

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { useMediaQuery } from "@mui/material";
import { Filler } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ordersData = {
  labels: months,
  datasets: [
    {
      label: "Orders",
      data: [120, 150, 170, 140, 180, 200, 220, 210, 190, 230, 250, 255],
      borderColor: "rgba(74, 144, 226, 1)",
      backgroundColor: "rgba(74, 144, 226, 0.1)",
      tension: 0.4,
      fill: true,
      borderWidth: 3,
    },
  ],
};

const registrationsData = {
  labels: months,
  datasets: [
    {
      label: "Registrations",
      data: [80, 90, 100, 120, 130, 120, 145, 160, 155, 165, 180, 170],
      borderColor: "rgba(156, 39, 176, 1)",
      backgroundColor: "rgba(156, 39, 176, 0.1)",
      tension: 0.4,
      fill: true,
      borderWidth: 3,
    },
  ],
};

const salesData = {
  labels: months,
  datasets: [
    {
      label: "Sales ($)",
      data: [
        5300, 6000, 7000, 6500, 8000, 8500, 9000, 8300, 7800, 8400, 9200, 9500,
      ],
      backgroundColor: "rgba(255, 152, 0, 0.8)",
      borderColor: "rgba(255, 152, 0, 1)",
      borderWidth: 2,
      borderRadius: 6,
      borderSkipped: false,
    },
  ],
};

const cardBase = {
  borderRadius: "14px",
  padding: "16px",
  backgroundColor: "#fff",
  border: "1px solid rgba(0,0,0,0.05)",
  transition: "all 0.2s ease",
  overflow: "hidden",
  height: "280px",
  display: "flex",
  flexDirection: "column" as const,
};

const chartBox = {
  flex: 1,
  position: "relative" as const,
};
export const ChartsPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        boxSizing: "border-box",
        paddingLeft: isMobile ? "10px" : "30px",
        paddingRight: isMobile ? "10px" : "30px",
      }}
    >
      <h1 className="pageTitle">Urban Food Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "20px",
          rowGap: "40px",
          maxWidth: "1600px",
          margin: "0 auto 40px auto",
        }}
      >
        {/* Orders */}
        <div
          style={{ ...cardBase, boxShadow: "0 4px 12px rgba(74,144,226,.12)" }}
        >
          <h3 style={{ margin: 0, fontSize: "1rem", color: "#4a90e2" }}>
            📊 Orders Overview
          </h3>
          <div style={chartBox}>
            <Line
              data={ordersData}
              options={{
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>

        {/* Registrations */}
        <div
          style={{ ...cardBase, boxShadow: "0 4px 12px rgba(156,39,176,.12)" }}
        >
          <h3 style={{ margin: 0, fontSize: "1rem", color: "#9c27b0" }}>
            👥 User Registrations
          </h3>
          <div style={chartBox}>
            <Line
              data={registrationsData}
              options={{
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "20px",
          rowGap: "40px",
          maxWidth: "1600px",
          margin: "0 auto 40px auto",
        }}
      >
        {/* Monthly Revenue */}
        <div
          style={{ ...cardBase, boxShadow: "0 4px 12px rgba(76,175,80,.12)" }}
        >
          <h3 style={{ margin: 0, fontSize: "1rem", color: "#4caf50" }}>
            💵 Monthly Revenue
          </h3>
          <div style={chartBox}>
            <Bar
              data={{
                labels: months,
                datasets: [
                  {
                    label: "Revenue ($)",
                    data: [
                      12500, 13400, 14200, 13800, 15600, 16200, 17100, 16500,
                      15800, 16800, 17500, 18200,
                    ],
                    backgroundColor: "rgba(76, 175, 80, 0.7)",
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>

        {/* Satisfaction Rate */}
        <div
          style={{ ...cardBase, boxShadow: "0 4px 12px rgba(244,67,54,.12)" }}
        >
          <h3 style={{ margin: 0, fontSize: "1rem", color: "#f44336" }}>
            ⭐ Satisfaction Rate
          </h3>
          <div style={chartBox}>
            <Line
              data={{
                labels: months,
                datasets: [
                  {
                    label: "Satisfaction (%)",
                    data: [92, 91, 93, 94, 95, 94, 96, 95, 94, 95, 96, 94],
                    borderColor: "rgba(244,67,54,1)",
                    backgroundColor: "rgba(244,67,54,0.1)",
                    tension: 0.4,
                    fill: true,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>
      </div>

      {/* Sales Performance */}
      <div
        style={{
          ...cardBase,
          height: "320px",
          boxShadow: "0 4px 16px rgba(255,152,0,.15)",
          maxWidth: "1600px",
          margin: "0 auto 40px auto",
        }}
      >
        <h3 style={{ margin: 0, fontSize: "1rem", color: "#ff9800" }}>
          💰 Sales Performance
        </h3>
        <div style={chartBox}>
          <Bar
            data={salesData}
            options={{
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
            }}
          />
        </div>
      </div>
    </div>
  );
};
