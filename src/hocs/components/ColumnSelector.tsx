// - Provides a fixed, collapsible column selector for grid layouts
// - Supports numeric columns (1–4) and "auto" option
// - Automatically collapses when scrolling past 800px
// - Responsive positioning for desktop vs mobile
// - Chevron button toggles open/close state of selector
// - onChange callback fires when user selects a new column count

import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";

interface ColumnSelectorProps {
  value: number | "auto";
  onChange: (cols: number | "auto") => void;
}

export const ColumnSelector = ({ value, onChange }: ColumnSelectorProps) => {
  const [open, setOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width:900px)");

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: isDesktop ? 0 : 55,
        left: isDesktop ? 220 : 0,
        bgcolor: "rgba(0,0,0,0.5)",
        color: "white",
        borderRadius: "0 8px 8px 0",
        zIndex: 550,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        px: 1,
        py: 1,
      }}
    >
      {open && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.3,
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            gutterBottom
            sx={{ mb: 0.3, fontWeight: "bold", fontSize: "0.7rem" }}
          >
            Columns:
          </Typography>

          {[4, 3, 2, 1].map((n) => (
            <Button
              key={n}
              size="small"
              variant={value === n ? "contained" : "outlined"}
              sx={{
                color: "white",
                borderColor: "white",
                minWidth: 24,
                height: 24,
                fontSize: "0.65rem",
                py: 0,
                px: 1.5,
              }}
              onClick={() => onChange(n)}
            >
              {"I".repeat(n)}
            </Button>
          ))}

          <Button
            size="small"
            variant={value === "auto" ? "contained" : "outlined"}
            sx={{
              color: "white",
              borderColor: "white",
              minWidth: 32,
              height: 24,
              fontSize: "0.65rem",
              py: 0,
              px: 0.5,
            }}
            onClick={() => onChange("auto")}
          >
            Auto
          </Button>
        </Box>
      )}

      <IconButton
        onClick={handleToggle}
        sx={{
          color: "white",
          borderRadius: "0 8px 8px 0",
          "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
          width: 24,
          height: 24,
          mt: 0.8,
          mb: 0.3,
        }}
      >
        {open ? (
          <ChevronLeftIcon fontSize="small" />
        ) : (
          <ChevronRightIcon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
};
