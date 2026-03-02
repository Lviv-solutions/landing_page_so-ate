"use client";

import React from "react";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { TabConfig } from "../../types/admin";

interface StatusTabsProps {
  tabs: TabConfig[];
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export default function StatusTabs({ tabs, value, onChange }: StatusTabsProps) {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={value} onChange={onChange}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <span>{tab.label}</span>
                <Chip label={tab.count} size="small" color={tab.color} />
              </Stack>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
}
