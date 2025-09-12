// export const ChartsPage = () => <h1 className="pageTitle">Sales Charts</h1>;

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
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
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
      tension: 0.3,
    },
  ],
};

const registrationsData = {
  labels: months,
  datasets: [
    {
      label: "Registrations",
      data: [80, 90, 100, 120, 130, 120, 145, 160, 155, 165, 180, 170],
      borderColor: "rgba(153,102,255,1)",
      backgroundColor: "rgba(153,102,255,0.2)",
      tension: 0.3,
    },
  ],
};

const salesData = {
  labels: months,
  datasets: [
    {
      label: "Sales",
      data: [
        5300, 6000, 7000, 6500, 8000, 8500, 9000, 8300, 7800, 8400, 9200, 9500,
      ],
      backgroundColor: "rgba(255,159,64,0.6)",
    },
  ],
};

export const ChartsPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <h1 className="pageTitle">Urban Food Activity</h1>

      {/* Orders & Registrations */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap", // pentru responsive
          gap: 70, // spațiu între chart-uri
          //   marginTop: "170px",
          //   marginBottom: 70,
          //   margin: "170px 50px",
          margin: "170px 70px 80px 70px",
        }}
      >
        <div style={{ flex: "1 1 300px", minWidth: 300 }}>
          <Line data={ordersData} options={{ maintainAspectRatio: false }} />
        </div>
        <div style={{ flex: "1 1 300px", minWidth: 300 }}>
          <Line
            data={registrationsData}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>

      {/* Sales */}
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          height: 400,
        }}
      >
        <Bar data={salesData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};
