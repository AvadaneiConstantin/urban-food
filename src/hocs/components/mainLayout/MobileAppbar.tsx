//  Mobile app bar for Urban Food application
// - Displays logo and app title on the left
// - Shows login/logout button based on currentUser state
// - Includes menu button to toggle navigation drawer
// - Fixed at top, responsive height (55px)
// - Uses MUI components: AppBar, Toolbar, Box, Typography, IconButton

import { AppBar, Toolbar, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import type { User } from "firebase/auth";

type MobileAppBarProps = {
  currentUser: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onToggleDrawer: () => void;
};

export const MobileAppBar = ({
  currentUser,
  onLogin,
  onLogout,
  onToggleDrawer,
}: MobileAppBarProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        height: 55,
        background: "#37474f",
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left: Logo + Title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="UrbanFood"
            sx={{ width: 32 }}
          />
          <Typography variant="subtitle1" sx={{ fontSize: "1rem" }}>
            Urban Food
          </Typography>
        </Box>

        {/* Right: Auth + Burger Menu */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            pr: "25px",
          }}
        >
          {currentUser ? (
            <IconButton color="inherit" onClick={onLogout}>
              <LogoutIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={onLogin}>
              <LoginIcon />
            </IconButton>
          )}
          <IconButton color="inherit" onClick={onToggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
