// Routing configuration for Urban Food app
// - Wraps all pages in MainLayout for consistent layout (header/sidebar/footer)
// - Defines public routes (Dashboard, FoodMenu, Services)
// - Defines admin-only routes (Customers, Orders, Charts) using ProtectedRoute

import { Routes, Route } from "react-router-dom";

import { FoodMenuPage } from "../features/foodMenu/FoodMenuPage";
import { OrdersPage } from "../features/orders/OrdersPage";
import { ServicesPage } from "../features/services/ServicesPage";
import { ChartsPage } from "../features/charts/ChartsPage";
import { MainLayout } from "../hocs/components/mainLayout";
import { DashboardPage } from "../features/dashboard/DashboardPage";
import { CustomersPage } from "../features/customers/customersPage/CustomersPage";
import { ProtectedRoute } from "./ProtectedRoute";

export default function Routing() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />

        {/* Customers page, admin-only access */}
        <Route
          path="/customers"
          element={
            <ProtectedRoute adminOnly>
              <CustomersPage />
            </ProtectedRoute>
          }
        />

        <Route path="/sales/food" element={<FoodMenuPage />} />

        <Route
          path="/sales/orders"
          element={
            <ProtectedRoute adminOnly>
              <OrdersPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sales/charts"
          element={
            <ProtectedRoute adminOnly>
              <ChartsPage />
            </ProtectedRoute>
          }
        />

        <Route path="/services" element={<ServicesPage />} />
      </Route>
    </Routes>
  );
}
