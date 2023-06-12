import React, { useState } from 'react';
import Logo from "../Images/Background.jpg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />
    },
    {
      text: "About",
      icon: <InfoIcon />
    },
    {
      text: "Register",
      icon: <CommentRoundedIcon />
    }
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>

      <div className="nav-links-container">
        <List>
          {menuOptions.map((option, index) => (
            <ListItem key={index} button>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.text} />
            </ListItem>
          ))}
        </List>

        <button className="primary-button">Register Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
