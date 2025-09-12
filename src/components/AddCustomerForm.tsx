// src/components/AddCustomerForm.tsx
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import type { NewCustomerData } from "../types/Customers";

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

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.group) return;
    onAddCustomer(form);
    setForm({ name: "", email: "", group: "", totalOrders: 0 });
    onCancel();
  };

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        padding: 0.5,
        marginBottom: 1,
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <TextField
        label="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        fullWidth
        margin="normal"
        size="small"
      />
      <TextField
        label="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        fullWidth
        margin="normal"
        size="small"
      />
      <TextField
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
        margin="normal"
        size="small"
      >
        <MenuItem value="Retail">Retail</MenuItem>
        <MenuItem value="Partner">Partner</MenuItem>
        <MenuItem value="Individual">Individual</MenuItem>
      </TextField>
      <TextField
        label="Total Orders"
        type="number"
        value={form.totalOrders}
        onChange={(e) =>
          setForm({ ...form, totalOrders: Number(e.target.value) })
        }
        fullWidth
        margin="normal"
        size="small"
      />

      <Box mt={2} display="flex" gap={2}>
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
