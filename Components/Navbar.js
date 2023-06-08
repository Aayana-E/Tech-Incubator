import React, {useState} from 'react';
import Logo from "../Assets/Background.jpg";
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import { Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText} from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcom from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon/>
        }
        {
            text:"About",
            icon:<InfoIcon/>
        }  
        }
            text:"Register",
            icon:<HomeIcon/>
        }  
    ]

  return (
    <nav>

        <div classname = "nav-logo-container">
            <img src = {Logo} alt = ""/>
        </div>
       
       <div classname = "nav-links-container">
            
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Register</a>

        <button classname = "primary-button">Register Now </button>
        </div>
    </nav>
  )
}
export default Navbar
