// CustomersPage - Renders a list of customers in a table (desktop) or mobile layout
// - Allows filtering by group and adding new customers
// - Uses mockCustomers as initial data
// - Desktop: Table with sticky header, actions (edit/delete)
// - Mobile: Uses CustomersPageMobile component
// - Responsive: switches layout based on screen width
// - AddCustomerForm shows conditionally when "Add Customer" is clicked

import { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { mockCustomers } from "../Customers.mock";
import type { Customer, NewCustomerData } from "../Customers.types";
import { AddCustomerForm } from "../AddCustomerForm/AddCustomerForm";
import { CustomersPageMobile } from "./CustomersPageMobile";

export const CustomersPage = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [groupFilter, setGroupFilter] = useState<string>("");
  const [showForm, setShowForm] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAddCustomer = (data: NewCustomerData) => {
    const newCustomer: Customer = {
      id:
        customers.length > 0 ? Math.max(...customers.map((c) => c.id)) + 1 : 1,
      ...data,
    };
    setCustomers((prev) => [...prev, newCustomer]);
    setShowForm(false);
  };

  const handleDelete = (id: number) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this customer?"
    );
    if (confirmed) {
      setCustomers((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const filteredCustomers = customers.filter(
    (customer) => groupFilter === "" || customer.group === groupFilter
  );

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 3,
          borderRadius: 0,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            py: 3,
            borderBottom: "1px solid rgba(224, 224, 224, 1)",
            backgroundColor: "#f5f5f5",
            pt: { xs: "70px", md: "24px" },
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Customers
          </Typography>
        </Box>

        {!isMobile && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ py: 1, px: 2 }}
          >
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={() => setShowForm(true)}
            >
              ADD CUSTOMER
            </Button>
          </Box>
        )}

        {showForm && (
          <AddCustomerForm
            onAddCustomer={handleAddCustomer}
            onCancel={() => setShowForm(false)}
          />
        )}

        {/* Conditional rendering of tables  */}
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          {isMobile ? (
            <CustomersPageMobile
              customers={filteredCustomers}
              onDelete={handleDelete}
              groupFilter={groupFilter}
              onGroupFilterChange={setGroupFilter}
              onAddCustomer={handleAddCustomer}
            />
          ) : (
            <Table stickyHeader aria-label="customers table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#e0e0e0" }}>
                  <TableCell sx={{ fontWeight: "bold", py: 0.5 }}>ID</TableCell>
                  <TableCell sx={{ fontWeight: "bold", py: 0.5 }}>
                    Customer Name
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", py: 0.5 }}>
                    E-Mail
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", py: 0.5 }}>
                    <Select
                      id="group-filter"
                      name="group"
                      value={groupFilter}
                      onChange={(e) => setGroupFilter(e.target.value)}
                      size="small"
                      displayEmpty
                      renderValue={() => "Group"}
                    >
                      <MenuItem value="">All</MenuItem>
                      <MenuItem value="Retail">Retail</MenuItem>
                      <MenuItem value="Individual">Individual</MenuItem>
                      <MenuItem value="Partner">Partner</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", py: 0.5 }}>
                    Total Orders
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold", py: 0.5 }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredCustomers.map((customer, index) => (
                  <TableRow
                    key={customer.id}
                    sx={{
                      backgroundColor: index % 2 === 0 ? "#fafafa" : "white",
                      "&:hover": { backgroundColor: "#f1f7fa" },
                    }}
                  >
                    <TableCell sx={{ py: 0.5 }}>{customer.id}</TableCell>
                    <TableCell sx={{ py: 0.5 }}>{customer.name}</TableCell>
                    <TableCell sx={{ py: 0.5 }}>{customer.email}</TableCell>
                    <TableCell sx={{ py: 0.5 }}>{customer.group}</TableCell>
                    <TableCell sx={{ py: 0.5 }}>
                      {customer.totalOrders}
                    </TableCell>
                    <TableCell align="center" sx={{ py: 0.5 }}>
                      <Tooltip title="Edit">
                        <IconButton size="small" color="primary">
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          size="small"
                          color="error"
                          onClick={() => handleDelete(customer.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredCustomers.length === 0 && (
                  <TableRow sx={{ height: "100%" }}>
                    <TableCell colSpan={6} sx={{ textAlign: "center", py: 5 }}>
                      No customers found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </Box>
      </TableContainer>
    </Box>
  );
};
