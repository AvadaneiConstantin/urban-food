// Main layout component handling overall app structure
// - Renders sidebar (Drawer) with navigation items and submenus
// - Uses CompanyLogo and LoginForm components
// - Handles admin-only route visibility based on currentUser email
// - Supports responsive design: permanent drawer on desktop, temporary drawer on mobile
// - Includes MobileAppBar for mobile view with login/logout and menu toggle
// - Handles login/logout logic using Firebase auth
// - Uses MUI components: Box, Drawer, List, ListItemButton, Collapse, Button, Typography, IconButton
// - Outlets render page content dynamically based on route

import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Collapse,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CompanyLogo } from "../CompanyLogo";
import { LoginForm } from "../LoginForm";
import { sign_out } from "../../../packages/firebase/firebase-auth";
import { useAuthContext } from "../../../context/useAuthContext";
import { MobileAppBar } from "./MobileAppbar";

export const MainLayout = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const drawerWidth = isDesktop ? 220 : 190;

  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [salesOpen, setSalesOpen] = useState(false);

  const { currentUser } = useAuthContext();
  const isAdmin = currentUser?.email === "admin@urbanfood.com";

  const navigate = useNavigate();
  const location = useLocation();

  const handleSalesClick = () => setSalesOpen(!salesOpen);

  const handleLogout = async () => {
    await sign_out(
      () => navigate("/"),
      (err: string) => console.error(err)
    );
  };

  const handleDrawerToggle = () => setMenuOpen((prev) => !prev);

  // -------------------------
  // NAV ITEMS CONFIG
  // -------------------------
  const navItems = [
    { path: "/", label: "Dashboard", icon: HomeIcon },
    { path: "/customers", label: "Customers", icon: GroupIcon, admin: true },
    {
      label: "Sales",
      icon: ShoppingCartIcon,
      children: [
        { path: "/sales/food", label: "Food Menu", icon: FastfoodIcon },
        {
          path: "/sales/orders",
          label: "Orders",
          icon: ListAltIcon,
          admin: true,
        },
        {
          path: "/sales/charts",
          label: "Charts",
          icon: InsertChartIcon,
          admin: true,
        },
      ],
    },
    { path: "/services", label: "Services", icon: MiscellaneousServicesIcon },
  ];

  // -------------------------
  // RENDER NAV LIST
  // -------------------------
  const renderNavList = () => (
    <List>
      {/* navItems array   */}
      {navItems.map((item, index) => {
        if (item.admin && !isAdmin) return null;

        // Submenu handling
        if (item.children) {
          return (
            <Box key={index}>
              <ListItemButton onClick={handleSalesClick}>
                <ListItemIcon sx={{ color: "white" }}>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
                {salesOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={salesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.children.map((child, childIndex) => {
                    if (child.admin && !isAdmin) return null;
                    return (
                      <ListItemButton
                        key={childIndex}
                        sx={{ pl: 4 }}
                        selected={location.pathname === child.path}
                        onClick={() => {
                          navigate(child.path);
                          setMenuOpen(false);
                        }}
                      >
                        <ListItemIcon sx={{ color: "white" }}>
                          <child.icon />
                        </ListItemIcon>
                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </Box>
          );
        }

        // Regular item
        return (
          <ListItemButton
            key={index}
            selected={location.pathname === item.path}
            onClick={() => {
              navigate(item.path!);
              setMenuOpen(false);
            }}
          >
            <ListItemIcon sx={{ color: "white" }}>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        );
      })}
    </List>
  );

  // -------------------------
  // RENDER
  // -------------------------
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
      {/* MOBILE APPBAR */}
      {!isDesktop && (
        <MobileAppBar
          currentUser={currentUser}
          onLogin={() => setShowLogin(true)}
          onLogout={handleLogout}
          onToggleDrawer={handleDrawerToggle}
        />
      )}

      {/* SIDEBAR */}
      <Drawer
        variant={isDesktop ? "permanent" : "temporary"}
        open={isDesktop ? true : menuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            background: "linear-gradient(90deg, #37474f 0%, #607d8b 100%)",
            color: "white",
            boxSizing: "border-box",
          },
        }}
      >
        {/* Login/Logout Buttons */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 600,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {!currentUser ? (
            <Button
              variant="text"
              startIcon={<LoginIcon />}
              onClick={() => setShowLogin(true)}
              sx={{
                textTransform: "none",
                minWidth: 100,
                fontSize: "1rem",
                fontWeight: 600,
                color: "#6b8eecff",
              }}
            >
              Login
            </Button>
          ) : (
            <Button
              variant="text"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                textTransform: "none",
                minWidth: 100,
                fontSize: "1rem",
                fontWeight: 600,
                color: "#6b8eecff",
              }}
            >
              Logout
            </Button>
          )}
        </Box>

        <CompanyLogo />
        <Box sx={{ pt: "70px" }}>{renderNavList()}</Box>
      </Drawer>

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: isDesktop ? `${drawerWidth}px` : 0,
        }}
      >
        <Outlet />
      </Box>

      {/* LOGIN FORM */}
      {showLogin && (
        <Box
          sx={{
            position: "fixed",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 600,
          }}
        >
          <LoginForm
            onClose={() => setShowLogin(false)}
            onSuccess={() => setShowLogin(false)}
          />
        </Box>
      )}
    </Box>
  );
};
