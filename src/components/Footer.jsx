import {  FacebookRounded, Instagram, Telegram, Twitter } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  return (
        <Box className="footer">

<Grid
  container
  alignItems={"end"}
>
  <Grid item lg={3} md={6} sm={10} xs={11}>
    <Box sx={{ width: { xs: "150px", sm: "200px", md: "240px" } }}>
      <img
        style={{ width: "100%", borderRadius:"10px", border:"none" }}
        src="https://www.linkpicture.com/q/footerLogo-removebg-preview_3.png"
        alt=""
      />
    </Box>
    <p style={{ fontSize: "18px", fontWeight: "bold", color:"white" }}>
      Imagine A Better Future
    </p>
    <p style={{ fontSize: "16px", fontWeight: "500", color:"white" }}>
      The Most Eminent Visas & Immigration Consultant service provider.
    </p>
    <p style={{ fontSize: "18px", fontWeight: "bold", color:"white" }}>Quick Links</p>
    <ul>
      <li>
        <a href="https://preyantechnosys.com/html/truvik/services-2.html">
          Business
        </a>
      </li>
      <li>
        <a href="https://preyantechnosys.com/html/truvik/services-2.html">
          Migrate
        </a>
      </li>
      <li>
        <a href="https://preyantechnosys.com/html/truvik/services-2.html">
          Country
        </a>
      </li>
      <li>
        <a href="https://preyantechnosys.com/html/truvik/services-2.html">
          Evaluation
        </a>
      </li>
      <li>
        <a href="https://preyantechnosys.com/html/truvik/services-2.html">
          Application
        </a>
      </li>
      <li>
        <a href="https://preyantechnosys.com/html/truvik/services-2.html">
          Classes
        </a>
      </li>
    </ul>
  </Grid>
  <Grid item lg={4} md={6} sm={10} xs={11}>
    <p style={{ marginBottom: "40px", color:'white' }}>
      200+ Best Universities Scholarship Programs From 20 Countries
    </p>
    <p style={{ marginBottom: "30px", color:"white" }}>
      We also help with other family based employment ased and investment
      based Immigration.
    </p>

    <Box sx={{ display: "flex", gap: "10px", mb: 6 }}>
      <img
        width={30}
        src="https://www.linkpicture.com/q/country.jpg"
        alt=""
      />
      <img
        width={30}
        src="https://www.linkpicture.com/q/country2_1.jpg"
        alt=""
      />
      <img
        width={30}
        src="https://www.linkpicture.com/q/country3_1.jpg"
        alt=""
      />
      <img
        width={30}
        src="https://www.linkpicture.com/q/country4_1.jpg"
        alt=""
      />
    </Box>
    <Button variant="outlined"  sx={{ mb: 5 }}>
      Apply Visa Now
    </Button>
  </Grid>
  <Grid item lg={3} md={6} sm={10} xs={11} sx={{mb:12, ml:{lg:8}}}>
    <p style={{ fontSize: "18px", fontWeight: "bold", color:"white" }}>Get In Touch</p>
    <p style={{ fontSize: "16px", fontWeight: "500", color:"white" }}>
      Uzbekistan, Tashkent city, Olimlar 1/30 Front Desk: +99890 999 99 99
      Email: info@yourdomain.com
    </p>

    <Box sx={{display:"flex", gap:"10px", mt:6, color:"white"}}>
          <FacebookRounded/>
          <Instagram/>
          <Twitter/>
          <Telegram/>
    </Box>
  </Grid>
</Grid>
</Box>
    
  );
}
