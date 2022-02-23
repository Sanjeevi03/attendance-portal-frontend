import React from "react";
import { Box, Typography } from "@mui/material";
function AdminHome() {
  return (
    <>
      <Box sx={{ width: "100%", mt: 4, pb: 4 }}>
        <Typography sx={{ textAlign: "center", fontFamily: "Ubuntu", mb: 2 }}>
          Home
        </Typography>
        <Box sx={{ mx: 2, display: "flex", justifyContent: "center" }}></Box>
      </Box>
    </>
  );
}

export default AdminHome;
