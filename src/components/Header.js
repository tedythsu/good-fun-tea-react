import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../logo.png"; // Tell webpack this JS file uses this image

import InfoIcon from "@mui/icons-material/Info";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function BasicButtons() {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <img src={logo} alt="Logo" height="150px" />
      <Button variant="extended">
        <InfoIcon sx={{ mr: 1 }} />
        About
      </Button>
      <Button variant="extended">
        <InventoryIcon sx={{ mr: 1 }} />
        Products
      </Button>
      <Button variant="extended">
        <InventoryIcon sx={{ mr: 1 }} />
        Products 2
      </Button>
    </Stack>
  );
}
