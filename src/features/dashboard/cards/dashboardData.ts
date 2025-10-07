// Dashboard sample data
// - months: labels for charts (Jan–Dec)
// - ordersData: line chart (orders per month)
// - salesData: bar chart (monthly sales $)
// - registrationsData: line chart (new user signups)
// - customerSegmentData: pie chart (customer distribution: Retail / Individual / Partner)
// - Used in DashboardCharts.tsx

export const months = [
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

export const ordersData = {
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

export const salesData = {
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

export const registrationsData = {
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

export const customerSegmentData = {
  labels: ["Retail", "Individual", "Partner"],
  datasets: [
    { data: [40, 35, 25], backgroundColor: ["#42a5f5", "#66bb6a", "#ffa726"] },
  ],
};
