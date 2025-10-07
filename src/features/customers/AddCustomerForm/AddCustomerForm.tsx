// Form component to add new customers
// - Uses MUI TextField and MenuItem for inputs
// - Validates name, email, and group (required)
// - Calls onAddCustomer with form data on valid submit
// - Resets form after submission // - Cancel button triggers onCancel

import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import type { NewCustomerData } from "../Customers.types";

type Props = {
  onAddCustomer: (data: NewCustomerData) => void;
  onCancel: () => void;
};

export const AddCustomerForm = ({ onAddCustomer, onCancel }: Props) => {
  const [form, setForm] = useState<NewCustomerData>({
    name: "",
    email: "",
    group: "",
    totalOrders: 0,
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    group: false,
  });

  const handleSubmit = () => {
    const newErrors = {
      name: !form.name.trim(),
      email: !form.email.trim(),
      group: !form.group.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    onAddCustomer(form);
    setForm({ name: "", email: "", group: "", totalOrders: 0 });
    setErrors({ name: false, email: false, group: false });
    onCancel();
  };

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        backgroundColor: "#fefefe",
        boxShadow: 4,
        maxWidth: 800,
        mx: "auto",
        mb: 4,
      }}
    >
      <Typography variant="h6" mb={2} sx={{ textAlign: "center" }}>
        Add Customer
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }}
        gap={2}
      >
        <TextField
          id="customer-name"
          label="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          fullWidth
          size="small"
          error={errors.name}
          helperText={errors.name ? "Required" : ""}
        />
        <TextField
          id="customer-email"
          label="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          fullWidth
          size="small"
          error={errors.email}
          helperText={errors.email ? "Required" : ""}
        />
        <TextField
          id="customer-group"
          select
          label="Group"
          value={form.group}
          onChange={(e) =>
            setForm({
              ...form,
              group: e.target.value as NewCustomerData["group"],
            })
          }
          fullWidth
          size="small"
          error={errors.group}
          helperText={errors.group ? "Required" : ""}
        >
          <MenuItem value="Retail">Retail</MenuItem>
          <MenuItem value="Partner">Partner</MenuItem>
          <MenuItem value="Individual">Individual</MenuItem>
        </TextField>
        <TextField
          id="customer-totalOrders"
          label="Total Orders"
          type="number"
          value={form.totalOrders}
          onChange={(e) =>
            setForm({ ...form, totalOrders: Number(e.target.value) })
          }
          fullWidth
          size="small"
        />
      </Box>

      <Box mt={3} display="flex" justifyContent="center" gap={2}>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Add
        </Button>
      </Box>
    </Box>
  );
};
