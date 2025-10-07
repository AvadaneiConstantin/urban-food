// - Currently no interactive content
import { Box } from "@mui/material";
import background from "../../assets/images/ordersImages/orders2.jpeg";

export const OrdersPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};
