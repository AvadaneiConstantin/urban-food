// Dashboard KPI components
// - KpiCard: reusable card for a single metric (title, value, icon)
// - KpiGrid: responsive grid layout for multiple KPIs
//    • xs: 1 card per row (mobile)
//    • sm+: 3 cards per row (desktop)
// - Used to show stats like Total Orders, Sales, New Users in dashboard

import { Card, CardContent, Typography, Box } from "@mui/material";
import { JSX } from "react";

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: JSX.Element;
}

export const KpiCard = ({ title, value, icon }: KpiCardProps) => (
  <Card sx={{ display: "flex", alignItems: "center", gap: 2, p: 2 }}>
    {icon}
    <CardContent sx={{ p: 0.5, "&:last-child": { pb: 0.5 } }}>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
    </CardContent>
  </Card>
);

interface KpiGridProps {
  items: { title: string; value: string | number; icon: JSX.Element }[];
}

export const KpiGrid = ({ items }: KpiGridProps) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr", // under 600px → 1 card
        sm: "repeat(3, 1fr)", // over 600px → 3 cards
      },
      gap: 3,
      mb: 4,
    }}
  >
    {items.map((kpi, i) => (
      <KpiCard key={i} {...kpi} />
    ))}
  </Box>
);
