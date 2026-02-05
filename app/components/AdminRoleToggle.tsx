"use client";

import { useState, useEffect } from "react";
import { setUserRole, getUserRole, type UserRole } from "../../lib/auth";
import { Box, Button, Stack, Typography, Paper } from "@mui/material";

export default function AdminRoleToggle() {
  const [currentRole, setCurrentRole] = useState<UserRole>("USER");

  useEffect(() => {
    setCurrentRole(getUserRole());
  }, []);

  const handleRoleChange = (role: UserRole) => {
    setUserRole(role);
    setCurrentRole(role);
    window.location.reload();
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        p: 2,
        zIndex: 9999,
        boxShadow: 3,
        bgcolor: "background.paper",
        border: "2px solid",
        borderColor: "primary.main",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="subtitle2" fontWeight="bold">
          🔧 Dev Tools - Role Switcher
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Current Role: <strong>{currentRole}</strong>
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant={currentRole === "USER" ? "contained" : "outlined"}
            onClick={() => handleRoleChange("USER")}
          >
            User
          </Button>
          <Button
            size="small"
            variant={currentRole === "ADMIN" ? "contained" : "outlined"}
            color="secondary"
            onClick={() => handleRoleChange("ADMIN")}
          >
            Admin
          </Button>
          <Button
            size="small"
            variant={currentRole === "BUSINESS_OWNER" ? "contained" : "outlined"}
            color="success"
            onClick={() => handleRoleChange("BUSINESS_OWNER")}
          >
            Owner
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
