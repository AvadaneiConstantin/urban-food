import { Box, Typography } from "@mui/material";
// import logo from "../assets/food4.png";
// import logo from "../assets/images/urbanFood11.jpg";
import logo from "../assets/images/logoUrbanFood.png";

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
        src={logo}
        alt="UrbanFood logo"
        sx={{
          width: "55%",
          height: "auto",
          filter: "drop-shadow(3px 3px 4px rgba(133, 221, 75, 0.7))",
          "&:hover": {
            filter: "drop-shadow(3px 3px 6px rgba(209, 230, 250, 0.9))",
          },
          objectFit: "contain",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: "700",
          letterSpacing: 1,
          position: "absolute",
          top: 125,
          textShadow: "0 4px 4px rgba(0,0,0,0.7)",
        }}
      >
        UrbanFood Retail
      </Typography>
    </Box>
  );
};
