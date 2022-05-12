import * as React from "react";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function notificationsLabel(count) {
  if (count === 0) {
    return "no notifications";
  }
  if (count > 99) {
    return "more than 99 notifications";
  }
  return `${count} notifications`;
}

export default function BadgeMax() {
  return (
    <Stack
      justifyContent="end"
      spacing={1}
      direction="row"
      sx={{ color: "action.active" }}
    >
        <IconButton aria-label={notificationsLabel(100)}>
        <Badge color="secondary" badgeContent={3}>
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label={notificationsLabel(100)}>
        <Badge color="secondary" badgeContent={1}>
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label={notificationsLabel(100)}>
        <Badge color="secondary" >
          <FacebookIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label={notificationsLabel(100)}>
        <Badge color="secondary" >
          <InstagramIcon />
        </Badge>
      </IconButton>
    </Stack>
  );
}
