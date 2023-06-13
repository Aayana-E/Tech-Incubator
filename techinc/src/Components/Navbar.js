import React, { useState } from 'react';
import Logo from "../Images/Logo_Transparent.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from '@mui/icons-material/Login';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PersonIcon from '@mui/icons-material/Person';
import "../Style/Navbar.css";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      url: "/" 
    },
    {
      text: "About",
      icon: <InfoIcon />,
      url: "/about" 
    },
     {
       text: "Profile",
       icon: <PersonIcon />,
       url: "/profile"  
     }, 
     {
      text: "Login",
      icon: <LoginIcon />,
      url: "/Login"  
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
            <ListItem key={index} button onClick={() => (window.location.href = option.url)}>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.text} />
            </ListItem>
          ))}
        </List>

        <a href="/signup" className="primary-button">Register Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
