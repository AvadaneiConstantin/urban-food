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
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { mockCustomers } from "../data/mockCustomers";
import type { Customer, NewCustomerData } from "../types/Customers";
import { AddCustomerForm } from "../components/AddCustomerForm";

export const CustomersPage = () => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers);
  const [groupFilter, setGroupFilter] = useState<string>("");
  const [showForm, setShowForm] = useState(false);

  const handleAddCustomer = (data: NewCustomerData) => {
    const newCustomer: Customer = {
      id:
        customers.length > 0 ? Math.max(...customers.map((c) => c.id)) + 1 : 1,
      ...data,
    };
    setCustomers((prev) => [...prev, newCustomer]);
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
    <Box>
      <h1 className="pageTitle">Customers</h1>

      <TableContainer component={Paper}>
        {/* Butonul de adăugare */}
        <Box display="flex" justifyContent="flex-end" sx={{ mt: 16, mb: 1 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowForm(true)}
          >
            ADD CUSTOMER
          </Button>
        </Box>

        {/* Formularul */}
        {showForm && (
          <AddCustomerForm
            onAddCustomer={handleAddCustomer}
            onCancel={() => setShowForm(false)}
          />
        )}

        <Table aria-label="customers table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Customer Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>E-Mail</TableCell>

              <TableCell sx={{ fontWeight: "bold" }}>
                <Select
                  labelId="group-filter-label"
                  value={groupFilter}
                  // id="group-filter"
                  onChange={(e) => setGroupFilter(e.target.value)}
                  size="small"
                  displayEmpty
                  sx={{ minWidth: 120 }}
                >
                  <MenuItem value="">Group All</MenuItem>
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Individual">Individual</MenuItem>
                  <MenuItem value="Partner">Partner</MenuItem>
                </Select>
              </TableCell>

              <TableCell sx={{ fontWeight: "bold" }}>Total Orders</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredCustomers.map((customer, index) => (
              <TableRow
                key={customer.id}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#ecfaecff" : "white",
                  "& .MuiTableCell-root": {
                    padding: "6px 15px",
                  },
                }}
              >
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.group}</TableCell>
                <TableCell>{customer.totalOrders}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit">
                    <IconButton size="small" color="primary" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton
                      size="small"
                      color="error"
                      aria-label="delete"
                      onClick={() => handleDelete(customer.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
