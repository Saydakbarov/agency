import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/jobs.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Thumbs } from "swiper";
import { JobsSwiper } from "../Data/data";

export default function Jobs() {
  return (
        <Box sx={{background:"#F5F5F5"}}>
    <div className="globalContainer">

      <Box className="jobs">
      <Typography variant="p" component={"p"} className="typo">
        View All
      </Typography>
      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item  xl={1} lg={2} md={2} sm={2} justifyContent={"center"} sx={{ display: { xs: "none", sm: "none", md: "block" },  }}>
          <Box className="jobText">
            <Typography
              variant="p"
              component={"p"}
              sx={{
                color: "#ABABAB",
                fontSize: "35px",
                transform: "rotate(-90deg)",
                textAlign:"center",
                position:"absolute",
              }}
            >
              Get more articles from our <br />
              <span style={{ color: "#C02D2D" }}>Recources</span>{" "}
              <span style={{ color: "#3E3B3B" }}>news</span>
            </Typography>
          </Box>
        </Grid>

        <Grid item xl={11} lg={10} md={10} sm={12} xs={12} justifyContent={"center"}>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            grabCursor={true}
            loopPreventsSliding={false}
            
            breakpoints={{
              300:{
                slidesPerView: 1,
                spaceBetween: 40,
              },
              430:{
                slidesPerView: 2,
                spaceBetween: 40,
              },
              668:{
                slidesPerView: 2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              
              1800: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
        
            }}
            modules={[Navigation, Thumbs]}
            className="mySwiper"
          >
            {JobsSwiper.map((v, i) => (
              <SwiperSlide key={i}>
                <Box>
                  <img style={{ width: "100%", objectFit:"cover", borderRadius:"10px",  }} src={v.img} alt="" />
                  <Typography
                  className="jobTitle"
                    variant="p"
                    component={"p"}
                    sx={{
                      fontSize: "30px",
                      color: "red",
                      mr: 9,
                      mt: -8,
                      fontWeight: "bold",
                      position:"relative",
                      zIndex:2
                    }}
                  >
                    {v.job}
                  </Typography>
                  <Button variant="contained" color={"success"}>
                    {v.jobsButton}
                  </Button>

                  <Box className="activeBox">
                    <Typography
                      variant="p"
                      component={"p"}
                      sx={{ mt: 7, color: "black", fontWeight: "500" }}
                    >
                      {v.job}
                    </Typography>
                    <Typography
                      variant="p"
                      component={"p"}
                      sx={{ mt: 1, color: "black", fontSize:"14px"}}
                    >
                      {v.title}
                    </Typography>
                    <Typography
                      variant="p"
                      component={"p"}
                      sx={{ mt: 1, color: "#797979", fontSize: "11px" }}
                    >
                      {v.text}
                    </Typography>
                    <Typography
                      variant="p"
                      component={"p"}
                      sx={{
                        mt: 2,
                        color: "black",
                        fontSize: "14px",
                        textAlign: "center",
                        padding: "4px 20px",
                        border: "1px solid gray",
                        display:"inline-block",
                        borderRadius:"10px"
                      }}
                    >
                      More
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid> 
      </Grid>
    </Box>
    </div>

    </Box>
  

  );
}
