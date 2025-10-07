// Admin Dashboard page
// - Header: "Urban Food (Admin)" with white text + shadow
// - KPI Grid: shows Total Orders, Total Sales, New Customers (with icons)
// - Charts: Orders (line), Sales (bar), Customer Segments (pie), Registrations (line)
// - Responsive: single-column on mobile, multi-column on larger screens
// - Central hub for admin insights & analytics

import { Box, Typography } from "@mui/material";
import { KpiGrid } from "./cards/DashboardKpi";
import {
  OrdersChart,
  SalesChart,
  SegmentsPie,
  RegistrationsChart,
} from "./cards/DashboardCharts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GroupIcon from "@mui/icons-material/Group";

export const AdminDashboard = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(/MainBckg.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflowX: "hidden",
      }}
    >
      <Typography
        sx={{
          mb: 4,
          mt: { xs: "70px", md: "60px" },
          fontSize: { xs: "25px", md: "30px" },
          color: "white",
          textShadow: "0 3px 4px #000",
          textAlign: "center",
          fontWeight: "700",
        }}
      >
        Urban Food (Admin)
      </Typography>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: "10px", md: "20px" } }}>
        <KpiGrid
          items={[
            {
              title: "Total Orders",
              value: 230,
              icon: <ShoppingCartIcon color="primary" />,
            },
            {
              title: "Total Sales",
              value: "$12,500",
              icon: <AttachMoneyIcon color="success" />,
            },
            {
              title: "New Customers",
              value: 45,
              icon: <GroupIcon color="secondary" />,
            },
          ]}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
            },
            gap: 3,
            mb: 4,
          }}
        >
          <OrdersChart />
          <SalesChart />
          <SegmentsPie />
        </Box>

        <RegistrationsChart />
      </Box>
    </Box>
  );
};
