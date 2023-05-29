"use client";

import * as React from "react";
import {
  styled,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const UserMenuWrap = styled("div")(({ theme }) => ({
  position: "absolute",
  right: "16px",
  top: "8px",
}));

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function UserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <UserMenuWrap>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} className="iconButton" sx={{ p: 0 }}>
            <Avatar alt="Avater" src="https://scontent.ftpe7-2.fna.fbcdn.net/v/t1.6435-9/102407679_3609226145758215_6930385798543137866_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=nVHxwLvGhAIAX9AAjm_&_nc_ht=scontent.ftpe7-2.fna&oh=00_AfBqqj9muqJbu_S7JDJ-d4ZdSwo0BAoXVWixwW9sdOm41A&oe=649A4ED8" ></Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </UserMenuWrap>
  );
}
