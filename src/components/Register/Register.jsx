import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import React from 'react'

export default function Register() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  

  const submit = (data) =>{
    if(data.Password === data.PasswordCur){
     toast.success('Success')
  console.log(data);

  navigate("/")


  }else{
    toast.error('Password error please again write')
  }
  }
  return (
    <Box>
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
        Register 🖊
      </Typography>
          <Box component={"form"} sx={{ width: "90%", margin: "0 auto", mt:2 }} onSubmit={handleSubmit(submit)}>
            <TextField
              sx={{fontSize:"18px", padding:"0px !important"}}
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

              <TextField
              sx={{ mt: 2 }}
              label="Password"
              variant="outlined"
              type={"number"}
              fullWidth
              {...register("Password", {
                required: "Password kiriting!",
                maxLength: { value: 4, message: "Maksimalni 4ta raqam  kiriting!" },
              })}
            />
              {errors.Password && (
                <Typography color={"error"}>{errors.Password.message}</Typography>
              )}

              <TextField
              sx={{ mt: 2 }}
              label="Passoword qayta kiriting"
              variant="outlined"
              type={"number"}
              fullWidth
              {...register("PasswordCur", {
                required: "Password qayta kiriting!",
                maxLength: { value: 4, message: "Maksimalni 4ta raqam  kiriting!" },
              })}
            />
              {errors.PasswordCur && (
                <Typography color={"error"}>{errors.PasswordCur.message}</Typography>
              )}

            <Button variant="contained" fullWidth sx={{mt:2, p:1}} type={"submit"}>
                Submit
            </Button>
          </Box>
         
          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent:"flex-end",  mt:3 }}>
              <Typography>Do you have an account? </Typography>
              <Link to="/login" style={{color:"blue", textDecoration:"none"}}>Login</Link>
            </Box>

        </Grid>
      </Grid>
    </Box>
  )
}
