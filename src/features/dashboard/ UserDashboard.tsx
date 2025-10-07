// User Dashboard page
// - Message: "Welcome! Log in as admin to see KPIs." (styled with shadow / gradient on mobile)
// - Title: "Urban Food" prominently displayed with text shadow
// - Responsive: gradient overlays on small screens, text shadows on larger
// - Acts as landing dashboard for regular users (admins see KPI charts instead)

import { Box, Typography } from "@mui/material";

export const UserDashboard = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(/MainBckg.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "left",
        overflow: "hidden",
        p: 2,
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
          textAlign: "center",
          mt: 13,
          fontSize: "19px",
          py: 1,
          px: 2,
          borderRadius: 1,
          display: "inline-block",
          "@media (max-width:600px)": {
            background: `radial-gradient(
              ellipse 80% 40% at center,
              rgba(0,0,0,0.7) 0%,
              rgba(0,0,0,0.6) 20%,
              rgba(0,0,0,0.2) 50%,
              rgba(0,0,0,0) 70%
            )`,
          },
          "@media (min-width:600px)": {
            textShadow: `0px 2px 4px rgba(0,0,0,0.6)`,
          },
        }}
      >
        Welcome! Log in as admin to see KPIs.
      </Typography>

      <Typography
        variant="h4"
        sx={{
          mt: 24,
          fontSize: 40,
          color: "white",
          textShadow: "0 3px 4px #000",
          textAlign: "center",
          fontWeight: "700",
          py: 1,
          borderRadius: 1,
          "@media (max-width:600px)": {
            background: `radial-gradient(
              ellipse at center,
              rgba(0,0,0,0.7) 0%,
              rgba(0,0,0,0.6) 25%,
              rgba(0,0,0,0.2) 50%,
              rgba(0,0,0,0.1) 75%,
              rgba(0,0,0,0) 90%
            )`,
          },
        }}
      >
        Urban Food
      </Typography>
    </Box>
  );
};
