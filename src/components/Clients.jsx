import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { AboutUs, ClientCompany } from '../Data/data'
import "../styles/Clients.scss"

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay } from "swiper";

export default function Clients() {
  return (
    <Box sx={{mt:8}} className="client">
        <Grid container justifyContent={"center"} sx={{gap:{xs:1, sm:1, md:2, lg:0}}} className="box">
        {AboutUs.map((v,i) => 
          <Grid key={i} item lg={3} md={4} sm={10} xs={11} sx={{borderRight:"1px solid white", background:"#033868", p:3, pl:8, height:"230px"}}>
                <Box sx={{display:"flex", gap:"10px", alignItems:"center", mt:3}}>
                     {v.icon}
                    <Typography variant='p' component={"p"} sx={{fontSize:"60px", color:"#fff"}}>{v.num}</Typography>
                </Box>
                <Typography variant='p' component={"p"} sx={{ fontSize:"20px", color:"#fff"}}>{v.text}</Typography>
            </Grid>
        )}
         
        
          
        </Grid>

        <Box sx={{mt:10 ,height:"200px"}}>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}

        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
      >
      {ClientCompany.map((v,i) => 
        <SwiperSlide key={i}>
          <img style={{width:"70%"}} src={v} alt="" />
        </SwiperSlide>

    )}
        
      </Swiper>
        </Box>
    </Box>
  )
}
