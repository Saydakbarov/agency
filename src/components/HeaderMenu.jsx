import {
  Toolbar,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComp from "./Drawer";
import MenuNav from "./MenuNav";

export default function HeaderMenu() {
  //   Responsive Menu
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="globalContainer">
      <Box sx={{ p: { md: "40px 30px", lg: "30px 0px 0px 0px" } }}>
        <Toolbar sx={{ color: "black", p:"0 !important" }}>
          <Box sx={{ width: { xs: "150px", sm: "200px", md: "300px", lg:"300px", xl:"300px" } }}>
            <img
              style={{ width: "100%" }}
              src="https://www.linkpicture.com/q/logo-removebg-preview_15.png"
              alt=""
            />
          </Box>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <MenuNav />
              <Box
                sx={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box sx={{display:"flex", gap:2, }}>
                  <Button variant="contained"  >
                    <Link style={{color:"white", textDecoration:"none"}}  to="/register">Register</Link>
                  </Button>
                  <Button variant="contained">
                    <Link style={{color:"white", textDecoration:"none"}} to="/login">Login</Link>
                  </Button>
                </Box>
              </Box>
           
            </>
            
          )}
     
        </Toolbar>
      </Box>
    </div>
  );
}
