import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  
  console.log(errors);

  const submit = (data) =>{
    console.log(data);
    toast.success("Success")
 
  }
  return (
    <Box sx={{p:2}}>
    <ToastContainer/>
   
      <Grid
        container
        justifyContent={"center"}
        mt={8}
      >
        <Grid
          item
          lg={5}
          sx={{
            boxShadow: "0px 0px 20px gray",
            textAlign: "center",
            p: 4,
            borderRadius: "20px",
          }}
        >
          <Typography variant="h3" component={"h4"} sx={{textAlign:"center"}}>
        Login 
    </Typography>
          <Box component={"form"} sx={{ width: "90%", margin: "0 auto", mt:3}} onSubmit={handleSubmit(submit)}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              {...register("Name", {
                required: "Ismingizni kiriting!",
                minLength: { value: 4, message: "Ismingizni to'liq kiriting!" },
              })}
            />
              {errors.Name && (
                <Typography color={"error"}>
                  {errors.Name.message}
                </Typography>
              )}

            <TextField
              sx={{ mt: 2 }}
              label="Email"
              variant="outlined"
              type={"email"}
              fullWidth
              {...register("Email", {
                required: "Email kiriting!",
                minLength: { value: 4, message: "Email to'liq kiriting!" },
              })}
            />
              {errors.Email && (
                <Typography color={"error"}>{errors.Email.message}</Typography>
              )}

            <Button variant="contained" fullWidth sx={{mt:2, p:1}} type={"submit"}>
                Submit
            </Button>
          </Box>
         
          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent:"flex-end",  mt:3 }}>
              <Typography>Not a member yet? </Typography>
              <Link to="/register" style={{color:"blue", textDecoration:"none"}}>Register</Link>
            </Box>

        </Grid>
      </Grid>
    </Box>
  );
}
