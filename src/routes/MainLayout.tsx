import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CompanyLogo } from "../components/CompanyLogo";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const drawerWidth = 270;

export const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [salesOpen, setSalesOpen] = useState(false);

  const handleSalesClick = () => {
    setSalesOpen(!salesOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(90deg, #1B4332 0%, #3AA76D 100%)",
            color: "white",
          },
        }}
      >
        <CompanyLogo />
        <List sx={{ paddingTop: "50px" }}>
          {/* Dashboard */}
          <ListItemButton
            selected={location.pathname === "/"}
            onClick={() => navigate("/")}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          {/* Customers */}
          <ListItemButton
            selected={location.pathname === "/customers"}
            onClick={() => navigate("/customers")}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>

          {/* Sales (Expandable) */}
          <ListItemButton onClick={handleSalesClick}>
            <ListItemIcon sx={{ color: "white" }}>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Sales" />
            {salesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>

          {/* Sub-items Sales */}
          <Collapse in={salesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                selected={location.pathname === "/sales/products"}
                onClick={() => navigate("/sales/products")}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                selected={location.pathname === "/sales/orders"}
                onClick={() => navigate("/sales/orders")}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>

              <ListItemButton
                sx={{ pl: 4 }}
                selected={location.pathname === "/sales/charts"}
                onClick={() => navigate("/sales/charts")}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  <InsertChartIcon />
                </ListItemIcon>
                <ListItemText primary="Charts" />
              </ListItemButton>
            </List>
          </Collapse>

          {/* Services */}
          <ListItemButton
            selected={location.pathname === "/services"}
            onClick={() => navigate("/services")}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <MiscellaneousServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Zona principală */}
      <Box component="main" sx={{ flexGrow: 1, p: 0 }}>
        <Outlet />
      </Box>
    </Box>
  );
};
