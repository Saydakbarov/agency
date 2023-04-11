import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/homeSwiper.scss";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Thumbs } from "swiper";
import { Box, Typography } from "@mui/material";

export default function HeaderMain() {
  return (
    <div className="globalContainer">
            <Box className="headerMain" sx={{mt:{xs:4,sm:4,md:3,}}}>
      <Swiper loop={true} modules={[Navigation, Thumbs]} navigation={true}>
        <SwiperSlide>
          <Typography
            variant="h4"
            component={"h4"}
            sx={{
              position: "absolute",
              top: { xs: "10%", sm: "12%", md: "15%", lg: "15%", xl:"18%" },
              left: { xs: "20%", sm: "30%", md: "13%", lg: "14%" },
              textAlign: { xs: "center" },
            }}
          >
            Start planning
            <br />
            Your <span style={{ color: "#920513" }}>#NextTrip</span>
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "35%", sm: "30%", md: "35%", lg:"35%", xl:"40%"},
              width: { xs: "360px", sm: "600px", md: "450px" },
              left: { sm: "-2%", md: "13%" },
            }}
          >
            <img
              style={{ width: "100%" }}
              src="https://www.linkpicture.com/q/headerMain2.png"
              alt=""
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Typography
            variant="h4"
            component={"h4"}
            sx={{
              position: "absolute",
              top: { xs: "10%", sm: "12%", md: "15%", lg: "15%", xl:"18%" },
              left: { xs: "20%", sm: "30%", md: "13%", lg: "14%" },
              textAlign: { xs: "center" },
            }}
          >
            Start planning
            <br />
            Your <span style={{ color: "#920513" }}>#NextTrip</span>
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "35%", sm: "30%", md: "35%", lg:"35%", xl:"40%"},
              width: { xs: "360px", sm: "600px", md: "450px" },
              left: { sm: "-2%", md: "13%" },
            }}
          >
            <img
              style={{ width: "100%" }}
              src="https://www.linkpicture.com/q/headerMain2.png"
              alt=""
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Typography
            variant="h4"
            component={"h4"}
            sx={{
              position: "absolute",
              top: { xs: "10%", sm: "12%", md: "15%", lg: "15%", xl:"18%" },
              left: { xs: "20%", sm: "30%", md: "13%", lg: "14%" },
              textAlign: { xs: "center" },
            }}
          >
            Start planning
            <br />
            Your <span style={{ color: "#920513" }}>#NextTrip</span>
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: { xs: "35%", sm: "30%", md: "35%", lg:"35%", xl:"40%"},
              width: { xs: "360px", sm: "600px", md: "450px" },
              left: { sm: "-2%", md: "13%" },
            }}
          >
            <img
              style={{ width: "100%" }}
              src="https://www.linkpicture.com/q/headerMain2.png"
              alt=""
            />
          </Box>
        </SwiperSlide>
      
   
      </Swiper>

      <Box
        sx={{
          position: "absolute",
          top: { xs: "30%", sm: "36%", md: "13%", lg:"2%" },
          width: { xs: "100px", sm: "200px", md: "450px", lg:"600px" },
          left: { sm: "16%", md: "54%", lg:"53%", xl:"55%" },
          zIndex: 8,
          display:{xs:"none",sm:"none", md:"block", lg:"block"}
        }}
      >
        <img
         style={{width:"100%"}}
          className="img1"
          src="https://www.linkpicture.com/q/headerMain3-removebg-preview.png"
          alt=""
        />
      </Box>
    </Box>
    </div>

  );
}
