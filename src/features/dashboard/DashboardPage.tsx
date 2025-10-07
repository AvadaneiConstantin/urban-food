// Dashboard Page
// - Checks current user from Auth context
// - Renders AdminDashboard if logged in as admin
// - Renders UserDashboard for regular users
// - Acts as entry point for / route

import { useAuthContext } from "../../context/useAuthContext";
import { AdminDashboard } from "./AdminDashboard";
import { UserDashboard } from "./ UserDashboard";

export const DashboardPage = () => {
  const { currentUser } = useAuthContext();
  const isAdmin = currentUser?.email === "admin@urbanfood.com";

  return isAdmin ? <AdminDashboard /> : <UserDashboard />;
};
