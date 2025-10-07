//  Admin login form for Firebase authentication
//  Uses sign_in function from firebase-auth package
//  Handles email/password input, error display, and success/cancel callbacks
//  Only admin credentials (hardcoded for testing) grant access to admin-only pages (Customers, Orders, Charts, Dashboard KPIs)

import { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { sign_in } from "../../packages/firebase/firebase-auth";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
}

export const LoginForm = ({ onClose, onSuccess }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    await sign_in(email, password, onSuccess, (err: string) => setError(err));
  };

  return (
    <Paper sx={{ p: 2, width: 350, boxShadow: "0 2px 25px rgba(0,0,0,0.6)" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Admin Login
      </Typography>
      <TextField
        label="Email"
        fullWidth
        size="small"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        size="small"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }}
      />
      {error && (
        <Typography color="error" sx={{ mb: 1 }}>
          {error}
        </Typography>
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" onClick={handleLogin}>
          Sign In
        </Button>
        <Button variant="outlined" color="error" onClick={onClose}>
          Cancel
        </Button>
      </Box>
      <Box
        sx={{ mt: 2, textAlign: "center", color: "#555", fontSize: "0.85rem" }}
      >
        <p>
          <strong>Login with Admin permissions:</strong>
          <br />
          <br />
          Email: <code>admin@urbanfood.com</code>
          <br />
          Password: <code>111222</code>
          <br />
          <br />
          This is for testing purposes.
        </p>
        <p style={{ marginTop: "8px" }}>
          <em>
            Info: After logging in, you will have access to: <br />
            <strong>Dashboard KPIs</strong>
            <br />
            <strong>Customers</strong> and <br />
            <strong>Sales /Orders, Sales /Charts</strong> pages.
          </em>
        </p>
      </Box>
    </Paper>
  );
};
