// CustomersPageMobile - Mobile-friendly list of customers with collapsible details
// - Each card shows basic info (ID, name, email) and expandable details (group, totalOrders)
// - Supports Add Customer form and group filtering
// - Actions: Edit/Delete (stopPropagation prevents toggling expand)
// - Uses MUI Paper, Collapse, Select, Buttons, and Icons
// - Responsive design: full mobile support, scrollable list

import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  Paper,
  Tooltip,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import type { Customer, NewCustomerData } from "../Customers.types";
import { AddCustomerForm } from "../AddCustomerForm/AddCustomerForm";

interface CustomersPageMobileProps {
  customers: Customer[];
  onDelete: (id: number) => void;
  groupFilter: string;
  onGroupFilterChange: (filter: string) => void;
  onAddCustomer: (data: NewCustomerData) => void;
}

export const CustomersPageMobile = ({
  customers,
  onDelete,
  groupFilter,
  onGroupFilterChange,
  onAddCustomer,
}: CustomersPageMobileProps) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleAddCustomer = (data: NewCustomerData) => {
    onAddCustomer(data);
    setShowForm(false);
  };

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
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

        {/* Group Filter for mobile */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2" fontWeight="medium">
            Group:
          </Typography>
          <Select
            name="groupFilter"
            value={groupFilter}
            onChange={(e) => onGroupFilterChange(e.target.value)}
            size="small"
            displayEmpty
            sx={{ minWidth: 100 }}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Retail">Retail</MenuItem>
            <MenuItem value="Individual">Individual</MenuItem>
            <MenuItem value="Partner">Partner</MenuItem>
          </Select>
        </Box>
      </Box>

      {showForm && (
        <AddCustomerForm
          onAddCustomer={handleAddCustomer}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Customers list */}
      <Box sx={{ flex: 1, overflowY: "auto", p: 1 }}>
        {customers.map((customer) => (
          <Paper
            key={customer.id}
            sx={{
              mb: 1,
              p: 1,
              border: "1px solid #ddd",
              borderRadius: 2,
              cursor: "pointer",
            }}
            onClick={() => toggleExpand(customer.id)}
          >
            {/* clickable row */}
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography variant="body2" fontWeight="bold" color="primary">
                    #{customer.id}
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {customer.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {customer.email}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.5 }}>
                <Box onClick={(e) => e.stopPropagation()}>
                  <Tooltip title="Edit">
                    <IconButton size="small" color="primary">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => onDelete(customer.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>

                {/* expand/collapse */}
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(customer.id);
                  }}
                >
                  {expandedId === customer.id ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </IconButton>
              </Box>
            </Box>

            {/* Expandable details */}
            <Collapse
              in={expandedId === customer.id}
              timeout="auto"
              unmountOnExit
            >
              <Box
                sx={{
                  mt: 1,
                  pl: 1,
                  borderTop: "1px solid #eee",
                  pt: 1,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  <strong>Group:</strong> {customer.group}
                </Typography>
                <Typography variant="body2">
                  <strong>Total Orders:</strong> {customer.totalOrders}
                </Typography>
              </Box>
            </Collapse>
          </Paper>
        ))}

        {customers.length === 0 && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textAlign: "center", py: 5 }}
          >
            No customers found
          </Typography>
        )}
      </Box>
    </Box>
  );
};
