// Protects routes based on user authentication
// - Shows loading spinner while auth state is being determined
// - Redirects non-logged-in users to home
// - Redirects non-admin users from admin-only routes
// - Renders child components if all checks pass

import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/useAuthContext";
import { CircularProgress, Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
  adminOnly?: boolean;
}

export const ProtectedRoute = ({ children, adminOnly = false }: Props) => {
  const { currentUser, loading } = useAuthContext();

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  if (adminOnly && currentUser.email !== "admin@urbanfood.com") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
