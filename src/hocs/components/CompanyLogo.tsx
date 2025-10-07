// Displays the company logo for Urban Food
// - Uses MUI Box and Typography for layout and styling
// - Designed to fit header/sidebar layout

import { Box, Typography } from "@mui/material";

export const CompanyLogo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        height: 110,
        padding: "15px",
        color: "#E0F2F1",
      }}
    >
      <Box
        component="img"
        src="/logo.png"
        alt="UrbanFood logo"
        sx={{
          width: "70px",
          height: "auto",
          filter: "drop-shadow(3px 3px 4px rgba(48, 57, 59, 0.7))",
          "&:hover": {
            filter: "drop-shadow(3px 3px 6px rgba(114, 145, 85, 0.9))",
          },
          objectFit: "contain",
          marginTop: "65px",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "700",
          letterSpacing: 1,
          position: "absolute",
          top: 140,
          textShadow: "0 3px 3px rgba(48, 47, 47, 0.7)",
        }}
      >
        Urban Food
      </Typography>
    </Box>
  );
};
