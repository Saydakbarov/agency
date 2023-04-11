import { Avatar, Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { CategoriesData, Clients } from "../Data/data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {  Pagination } from "swiper";

import "../styles/categories.scss";

export default function Category() {
  return (
    <Box className="category">

    <div className="globalContainer">

    <Typography
        variant="p"
        component={"p"}
        sx={{
          textAlign:{xs:"center", sm:"center"},
          fontSize: { xs: "32px", sm: "30px", md: "40px" },
          fontWeight: "400",
          ml: { xs: 2, sm: 4, md:6, lg:10 },
          mt: 2,
        }}
      >
        We provide experts great visa Categories
      </Typography>

      <Grid container justifyContent={"center"} gap={2} pb={10} sx={{ mt: 10 }} className="categoryContainer">
    <Typography variant="p" component={"p"} className="rotateText" sx={{display:{ xs:"none", sm:"none", md:"none", lg:"block"}}}>Our visa categories</Typography>

        {CategoriesData.map((v, i) => (
          <Grid
          key={i}
            item
            lg={3.9}
            md={5}
            sm={10}
            xs={12}
            sx={{ borderRadius: "10px", position: "relative" }}
            className="categories"
          >
            <Box
              sx={{
                background: `linear-gradient(to right,  rgba(45, 68, 190, 0.5) , rgba(71, 6, 111, 0.5)) center , url(${v.img})`,
                backgroundSize: "100%",
                width: "100%",
                height: "450px",
                borderRadius: "10px",
                backgroundRepeat:"no-repeat"
              }}
            >
            <Box>
            <Typography
                className="textDec1"
                variant="p"
                component={"p"}
                sx={{
                  position: "absolute",
                  bottom: "2%",
                  right: "5%",
                  fontSize: "40px",
                  textShadow: "1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue",
                  color: "white",
                }}
              >
                {v.title}
              </Typography>
              <Typography
                className="textDec2"
                variant="p"
                component={"p"}
                sx={{
                  position: "absolute",
                  bottom: "2%",
                  right: "5%",
                  fontSize: "20px",
                  textShadow: "1px 1px 2px black, 0 0 1em blue, 0 0 0.2em black",
                  color: "white",
                }}
              >
                {v.text}
              </Typography>
            </Box>
          
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>


      <Box >
      <Typography variant="p" component={"p"} sx={{textAlign:"center", fontSize:"42px"}}>
      What Our Clients Say About Us
      </Typography>
        <Swiper  
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        {Clients.map((v,i) => 
          <SwiperSlide  key={i} > 
            <Box
              sx={{
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Avatar
                  alt="Cindy Baker"
                  src={v.avatar}
                />
                <div>
                  <p
                    style={{
                      margin: "0px",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {v.name}
                  </p>
                  <p style={{ margin: "0px" }}>{v.job}</p>
                </div>
              </Box>
              <Box>
                <Rating name="half-rating" defaultValue={v.rating} precision={0.5} />
              </Box>
            </Box>
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {v.title}
            </p>
            <p style={{ textAlign: "center" }}>
              {" "}
              {v.text}
            </p>
          </SwiperSlide>
        )}
  
        </Swiper>
      </Box>
    </Box>
  );
}
