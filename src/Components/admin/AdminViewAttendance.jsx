import { Box, Typography } from "@mui/material";
import React from "react";

function AdminViewAttendance() {
  return (
    <>
      <Box sx={{ width: "100%", pb: 4 }}>
        <Typography sx={{ textAlign: "center", fontFamily: "Ubuntu", mb: 2 }}>
          Home
        </Typography>
        <Box sx={{ mx: 2, display: "flex", justifyContent: "center" }}></Box>
      </Box>
    </>
  );
}

export default AdminViewAttendance;
