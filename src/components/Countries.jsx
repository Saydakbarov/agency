import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles/Countries.scss";
import { Autoplay } from "swiper";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";
import { CountriesData } from "../Data/data";
import { KeyboardArrowRight } from "@mui/icons-material";

export default function Countries() {
  return (
        <Box sx={{ background: "#F5F5F5", pb: 20 }}>
    <div className="globalContainer">
        
      <Box className="country">
    <Typography variant="p" component={"p"} className="rotateText" sx={{display:{md:"none", lg:"block"}}}>Our visa categories</Typography>

        <Typography
          variant="p"
          component={"p"}
          sx={{
            fontSize: { xs: "20px", sm: "28px", md: "35px", lg: "40px" },
            fontWeight: "400",
            pb: 6,
          }}
        >
          Immigration & visa services following Countries
        </Typography>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          
          autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            968: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {CountriesData.map((v, i) => (
            <SwiperSlide 
            key={i}
              style={{
                background: `linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)) center , url(${v.img})`,
                backgroundSize: "100%",
                backgroundRepeat: "round",
              }}
            >
              <Typography
                className="countryTitle"
                variant="h4"
                component={"h4"}
                sx={{
                  color: "white",
                  margin:" 240px auto"
                }}
              >
                {" "}
                {v.title}
              </Typography>

              <KeyboardArrowRight className="aboutContry"/>
            </SwiperSlide> 
          ))}
        </Swiper>

      </Box>
    </div>

    </Box>
  
  );
}
