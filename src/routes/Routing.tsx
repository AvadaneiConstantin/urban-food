import { Routes, Route } from "react-router-dom";
import { ProductsPage } from "../pages/ProductsPage";
import { OrdersPage } from "../pages/OrdersPage";
import { ServicesPage } from "../pages/ServicesPage";
import { ChartsPage } from "../pages/ChartsPage";
import { MainLayout } from "./MainLayout";
import { DashboardPage } from "../pages/DashboardPage";
import { CustomersPage } from "../pages/CustomersPage";

export default function Routing() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/sales/products" element={<ProductsPage />} />
        <Route path="/sales/orders" element={<OrdersPage />} />
        <Route path="/sales/charts" element={<ChartsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Route>
    </Routes>
  );
}
