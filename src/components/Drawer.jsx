import { ExpandLess, ExpandMore, Menu, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DrawerComp() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
       <img  style={{width:"250px", marginLeft:"30px", marginTop:"20px"}} src="https://www.linkpicture.com/q/logo-removebg-preview_15.png" alt="" />

      <List
      sx={{ width: '300px', mt:3 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
   
    >

    
      <ListItemButton onClick={() => setOpenDrawer(false) }>
        <ListItemText primary="Home" />
      </ListItemButton>
   
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Visa" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}  onClick={() => setOpenDrawer(false) }>
            <ListItemText primary="1" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}  onClick={() => setOpenDrawer(false) }>
            <ListItemText primary="2" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}  onClick={() => setOpenDrawer(false) }>
            <ListItemText primary="3" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton  onClick={() => setOpenDrawer(false) }>
        <ListItemText primary="Coaching" />
      </ListItemButton>

      <ListItemButton  onClick={() => setOpenDrawer(false) }>
        <ListItemText primary="Blog" />
      </ListItemButton>

      <ListItemButton  onClick={() => setOpenDrawer(false) }>
        <ListItemText primary="Contact Us" />
      </ListItemButton>
    </List>

    <Box sx={{textAlign:"center"}}>
                  <Button variant="contained" fullWidth>
                    <Link style={{color:"white", textDecoration:"none"}}  to="/register">Register</Link>
                  </Button>
                  <Button variant="contained" sx={{mt:2}} fullWidth>
                    <Link style={{color:"white", textDecoration:"none"}} to="/login">Login</Link>
                  </Button>
                </Box>


      </Drawer>
      <Box sx={{ marginLeft: "auto" }}>
    
        <IconButton
          sx={{ color: "black" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <Menu />
        </IconButton>
      </Box>
    </React.Fragment>
  );
}