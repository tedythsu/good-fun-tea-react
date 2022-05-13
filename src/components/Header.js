import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../logo.png";
import LoginIcon from "@mui/icons-material/Login";
import SearchIcon from "@mui/icons-material/Search";

import "./Header.css";

// import { AppBar } from "@mui/material";
// import { Toolbar } from "@mui/material";

// import InfoIcon from "@mui/icons-material/Info";
// import InventoryIcon from "@mui/icons-material/Inventory";

import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Divider from "@mui/material/Divider";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function BasicButtons() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <AppBar position="sticky" id="stickyBar">
      <Stack
      spacing={{ xs: 1, sm: 2, md: 4 }}
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        alignItems="center"
        
      >
        {/* <Toolbar> */}
          <a href="."><img src={logo} alt="Logo" height="125px" /></a>
          <Button variant="extended">
            {/* <InfoIcon sx={{ mr: 1 }} /> */}
            關於我們 About Us
            
          </Button>
          {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
          <Button variant="extended">
            {/* <InventoryIcon sx={{ mr: 1 }} /> */}
            冷泡茶 Cold Brewed Tea
          </Button>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu-giftBox" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="extended"
              disableElevation
              onClick={handleClick}
              onMouseOver={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              禮盒 Gift Box
            </Button>
            <StyledMenu
              id="demo-customized-menu-giftBox"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
                onMouseLeave: handleClose,
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                選項一
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                選項二
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem onClick={handleClose} disableRipple>
                選項三
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                選項四
              </MenuItem>
            </StyledMenu>
          </div>
          <Button variant="extended">
            <SearchIcon sx={{ mr: 1 }} />
            搜尋 Search
          </Button>
          <Button variant="extended">
            <LoginIcon sx={{ mr: 1 }} />
            會員登入 Login
          </Button>
        {/* </Toolbar> */}
      </Stack>
    // </AppBar>
  );
}
