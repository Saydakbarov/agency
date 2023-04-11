import { ArrowDropDown, Search } from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import "../styles/Menu.scss";

export default function MenuNav() {
  const [search, setSearch] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Pages = [
    {
      id: 1,
      name: "Home",
      parent: null,
      icon: "fa fa-home",
      status: 1,
      path: "/home",
      hasChildren: false,
    },
    {
      id: 2,
      name: "About",
      parent: null,
      icon: "fa fa-info",
      status: 1,
      path: "/about",
      hasChildren: false,
    },
    {
      id: 3,
      name: "Visa",
      parent: null,
      icon: "fa fa-card",
      hasChildren: true,
      status: 1,
      path: "/visa",
    },
    {
      id: 4,
      name: "Profile",
      parent: 3,
      icon: "fa fa-user",
      status: 1,
      path: "/profile",
      hasChildren: false,
    },
    {
      id: 5,
      name: "Card",
      parent: 3,
      icon: "fa fa-card",
      status: 1,
      path: "/profile",
      hasChildren: false,
    },
    {
      id: 6,
      name: "Order",
      parent: 8,
      icon: "fa fa-star",
      status: 1,
      path: "/order",
      hasChildren: false,
    },
    {
      id: 7,
      name: "Blog",
      parent: null,
      icon: "fa fa-star",
      status: 1,
      path: "/blog",
      hasChildren: false,
    },
    {
      id: 8,
      name: "Contact",
      parent: null,
      icon: "fa fa-star",
      status: 1,
      path: "/Contact",
      hasChildren: true,
    },
   
  ];


const parent = Pages.filter((v) => v.parent !== null)

console.log(parent);


  return (
            <Box sx={{  display: "flex", alignItems: "center" }}>
      <List sx={{ display: "flex" }}>
        {/* {Pages.map((value, index) => (
          
          <ListItem key={index} >
           

            {(value.hasChildren === true && (
              <> 
              
              <ListItemButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ display: "flex", gap: "10px" }}
              >
                {value.name}
                <ArrowDropDown />
              </ListItemButton>
              <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >

          {parent.map((v,i) => 
            v.parent === index + 1 ?  <MenuItem key={i} onClick={handleClose}>{value.name}</MenuItem>  : null

          )} 
          </Menu>
              </>
            
            )) || (
              value.parent === null ?
              <ListItemButton key={index} sx={{ textAlign: "center" }}>
                <ListItemText primary={value.name} />
              </ListItemButton> : null
                
            )}
          </ListItem>
        ))} */}

         <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ display: "flex", gap: "10px" }}
          >
            Visa
            <ArrowDropDown />
          </ListItemButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </ListItem>

        <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Coaching"} />
          </ListItemButton>
        </ListItem> 

         <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Blog"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ textAlign: "center", width: "120px" }}>
            <ListItemText primary={"Contact US"} />
          </ListItemButton>
        </ListItem> 
      </List>
      <ListItem>
        <Box className="search">
          {search ? <input type="text" placeholder="search" /> : ""}
          <IconButton
            className="searchButton"
            onClick={() => setSearch(!search ? !search : !search)}
          >
            <Search sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </ListItem>
    </Box>

  );
}
