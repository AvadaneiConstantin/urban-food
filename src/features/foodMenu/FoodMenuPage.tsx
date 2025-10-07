// FoodMenuPage - Displays an interactive food catalog with responsive grid layout
// - Uses local data from foodMenuData for menu items
// - Each item is displayed in a MUI Card with image, name, price, and "Add to Cart" button
// - Includes a FullScreenImg modal to view images in full size
// - Allows users to adjust the number of grid columns via ColumnSelector
// - Automatically adapts layout for mobile, tablet, and desktop

import {
  Box,
  Card,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { useState } from "react";
import FullScreenImg from "../../hocs/components/FullScreenImg";
import { ColumnSelector } from "../../hocs/components/ColumnSelector";
import { foodMenuData } from "./foodMenuData";

export const FoodMenuPage = () => {
  const [openImg, setOpenImg] = useState<string | null>(null);
  const [columns, setColumns] = useState<number | "auto">("auto");

  const renderCard = (
    img: string,
    name: string,
    price: string,
    width?: number | string,
    key?: string | number
  ) => {
    const isLarge = width === 500 || width === 700;

    return (
      <Card
        key={key}
        sx={{
          width: "100%",
          maxWidth: width === 700 ? 700 : width === 500 ? 500 : 360,
          margin: "0 auto",
          borderRadius: 3,
          overflow: "hidden",
          position: "relative",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: 6,
            "& .info-box": { transform: "translateY(0%)" },
          },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height={isLarge ? (width === 700 ? 350 : 300) : 220}
          image={img}
          alt={name}
          loading="lazy"
          sx={{ objectFit: "cover" }}
        />
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 3,
            bgcolor: "rgba(0,0,0,0.6)",
            color: "white",
            "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
          }}
          onClick={() => setOpenImg(img)}
        >
          <FullscreenIcon />
        </IconButton>

        {/* info box  */}
        <Box
          className="info-box"
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            bgcolor: "rgba(0,0,0,0.7)",
            color: "white",
            transform: "translateY(100%)",
            transition: "transform 0.3s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            px: 0,
            pb: 2,
          }}
        >
          <Typography
            variant={isLarge ? "h5" : "h6"}
            sx={{
              fontSize: { xs: "0.8rem", sm: isLarge ? "1.5rem" : "1.25rem" },
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              mb: 1,
            }}
          >
            Price: {price}
          </Typography>

          <Button
            variant="outlined"
            color="inherit"
            sx={{
              borderColor: "white",
              color: "white",
              "&:hover": { bgcolor: "white", color: "black" },
              fontSize: { xs: "0.6rem", sm: "0.875rem" },
              px: 1,
              py: 0.4,
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Card>
    );
  };

  // Config grid
  const getGridConfig = (cols: number | "auto") => {
    switch (cols) {
      case 1:
        return { gridTemplateColumns: "1fr", maxCardWidth: 700 };
      case 2:
        return { gridTemplateColumns: "repeat(2,1fr)", maxCardWidth: 500 };
      case 3:
        return { gridTemplateColumns: "repeat(3,1fr)", maxCardWidth: 360 };
      case 4:
        return { gridTemplateColumns: "repeat(4,1fr)", maxCardWidth: 360 };
      case "auto":
      default:
        return {
          gridTemplateColumns: {
            xs: "repeat(2,1fr)",
            sm: "repeat(3,1fr)",
            md: "repeat(4,1fr)",
          },
          maxCardWidth: 360,
        };
    }
  };

  const { gridTemplateColumns, maxCardWidth } = getGridConfig(columns);

  return (
    <>
      <ColumnSelector value={columns} onChange={setColumns} />

      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(/foodImages/backg2.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px)",
          zIndex: -1,
        }}
      />

      <h1 className="pageTitle">Explore Our Menu</h1>

      <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
        {renderCard(
          "/foodImages/meniulZilei.jpeg",
          "Today’s Combo Special",
          "$15",
          500,
          "today"
        )}
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: gridTemplateColumns,
          gap: { xs: 2, sm: 4, md: 6 },
          width: "100%",
          maxWidth: { xs: "100%", sm: 1000, md: 1400 },
          margin: "0 auto",
          padding: { xs: 2, sm: 4, md: 6 },
          boxSizing: "border-box",
        }}
      >
        {foodMenuData.map((p) =>
          renderCard(p.img, p.name, p.price, maxCardWidth, p.name)
        )}
      </Box>

      {openImg && (
        <FullScreenImg imgSrc={openImg} onClose={() => setOpenImg(null)} />
      )}

      <Box
        sx={{
          padding: "8px",
          fontSize: "1.2rem",
          marginBottom: "35px",
          textAlign: "center",
        }}
      >
        Images created by me, using image generation tools with AI.
      </Box>
    </>
  );
};
