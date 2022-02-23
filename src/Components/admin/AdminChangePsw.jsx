import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function AdminChangePsw() {
  const handleChange=()=>{
    toast.success("Success",)
  }
  return (
    <>
      <Box sx={{ width: "100%", mt: 4, pb: 4 }}>
        <Typography sx={{ textAlign: "center", fontFamily: "Ubuntu", mb: 2 }}>
          Change Password
        </Typography>
        <Button onClick={handleChange} >Change</Button>
        <Box sx={{ mx: 2, display: "flex", justifyContent: "center" }}></Box>
      </Box>
    </>
  );
}

export default AdminChangePsw;
