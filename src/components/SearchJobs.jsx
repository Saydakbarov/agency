import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Grid, Typography } from "@mui/material";
import { JobCountry, JobData } from "../Data/data";
import { Search } from "@mui/icons-material";

export default function SearchJobs() {
  const [job, setJob] = React.useState("");
  const [country, setCountry] = React.useState("");

  const handleChange = (event) => {
    setJob(event.target.value);
  };

  const handleChan = (event) => {
    setCountry(event.target.value);
  };

  return (
        <Box sx={{ background: "#F5F5F5", pb: 8, pt: 10 }}>
    <div className="globalContainer">

      <Box sx={{ minWidth: 120 }}>
        <Grid container  justifyContent={"center"} sx={{width:"90%", margin:"0 auto"}} gap={3}>
          <Grid item lg={5} md={4} sm={8} xs={10} sx={{display:"flex", justifyContent:"flex-end"}}>
            <FormControl
              fullWidth
              sx={{
                background: "white",
                boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.15)",
                borderRadius: "10px",

              }}
            >
              <InputLabel  id="demo-simple-select-label">Job</InputLabel>
              <Select
               sx={{height:"70px"}}
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={job}
                label="Job"
                onChange={handleChange}
                defaultValue="Job"
              >
                {JobData.map((v, i) => (
                  <MenuItem key={i} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item lg={5} md={4} sm={8} xs={10} >
            <FormControl
              fullWidth
              sx={{
                background: "white",
                boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.15)",
                borderRadius: "10px",
              }}
            >
              <InputLabel id="demo-simple-select-label">Where?</InputLabel>
              <Select
               sx={{height:"70px"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Usa"
                onChange={handleChan}
              >
                {JobCountry.map((v, i) => (
                  <MenuItem key={i} value={v}>
                    {v}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid lg={1} md={4} sm={8} xs={10} >
             <Button variant="contained" startIcon={<Search/> } sx={{height:"100%"}} >
                  Search
             </Button>
          </Grid>
        </Grid>
      </Box>
      </div>

      <Box>
  
        <Grid container justifyContent={"center"} mt={8} >
          <Grid item lg={4} md={6} sm={10} xs={12}>
            <img
              style={{ width: "100%", height: "100%", objectFit:"cover" }}
              src="https://www.linkpicture.com/q/img1_26.jpg"
              alt=""
            />
          </Grid>
          <Grid
            item
            lg={3}
            md={6}
            sm={10}
            xs={12}
            sx={{ background: "#CF204A", padding: "30px 0px 26px 0px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"   }}
          >
              <div className="globalContainer">
                     <Box sx={{ textAlign: "center",}}>
              <Typography
                variant="p"
                component={"p"}
                sx={{ fontSize:{xs:"60px", xl:"90px"}, fontWeight: "700", color: "white" }}
              >
                862
              </Typography>
              <Typography
                variant="p"
                component={"p"}
                sx={{
                  fontSize: {xs:"25px"},
                  fontWeight: "400",
                  pb: 3,
                  borderBottom: "1px solid white",
                  display: "inline-block",
                  color: "white",
                }}
              >
                Projects are completed
              </Typography>
            </Box>
            <Box sx={{  mt: 1, textAlign:"center" }}>
            <Typography
                variant="p"
                component={"p"}
                sx={{ fontSize: {xs:"70px", xl:"90px"}, fontWeight: "700", color: "white" }}
              >
                900
              </Typography>
              <Typography
                variant="p"
                component={"p"}
                sx={{
                  fontSize: {xs:"25px"},
                  fontWeight: "400",
                  pb: 3,
                  borderBottom: "1px solid white",
                  display: "inline-block",
                  color: "white",
                }}
              >
                Gave sigange advice
              </Typography>
            </Box>
             
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="p"
                component={"p"}
                sx={{ fontSize: {xs:"70px",xl:"90px"}, fontWeight: "700", color: "white" }}
              >
                346
              </Typography>
              <Typography
                variant="p"
                component={"p"}
                sx={{
                  fontSize: {xs:"25px"},
                  fontWeight: "400",
                  pb: 3,
                  color: "white",
                }}
              >
                Sample Text
              </Typography>
            </Box>
        </div>
         
          </Grid>
          <Grid item lg={5} md={12} sm={10} xs={12} sx={{ background: "#033868" }}>
          <div className="globalContainer" style={{margin:"0px"}}>

            <Box sx={{ padding: "30px 40px" }}>
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  color: "#fff",
                  textDecoration: "underline",
                }}
              >
                WHAT We DO
              </p>
              <h1 style={{ color: "white" }}>
                Immigration services from{" "}
                <span style={{ color: "aqua", fontFamily: "sans serif" }}>
                  Experienced
                </span>{" "}
                agents
              </h1>
              <Typography
                sx={{
                  fontSize: {xl:"30px"},
                  fontFamily: "serif",
                  color: "white",
                }}
              >
                Study and work visa consultant
              </Typography>
              <Typography
                sx={{
                  fontSize: {xl:"20px"},
                  color: "white",
                  paddingBottom: "30px",
                  borderBottom: "1px solid white",
                  mt:1
                }}
              >
                Skilled professionals are always ready to provide reliable
                services to our clients!. We guide the applicants for their
                immigration.
              </Typography>

              <Typography
                sx={{
                  fontSize:{xl:"30px"},
                  fontFamily: "serif",
                  color: "white",
                }}
              >
                Online visa services and guidance
              </Typography>
              <Typography
                sx={{
                  fontSize: {xl:"20px"},
                  color: "white",
                }}
              >
                You can directly contact us through filling up the form. Our
                team will get back to you with your visa enquiry and help you
                for visa services.
              </Typography>
            </Box>
          </div>

          </Grid>
         
        </Grid>
      </Box>

    </Box>
  
  );
}
