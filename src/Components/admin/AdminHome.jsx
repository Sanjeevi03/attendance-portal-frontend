import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
function AdminHome() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      let response = await axios.get("http://localhost:8000/countstaff");
      setData(response.data);
    };
    loadData();
  }, []);
  console.log(data.length)
  return (
    <>
      <Box sx={{ width: "100%", pb: 4 }}>
        <Typography sx={{ textAlign: "center", fontFamily: "Ubuntu",pt:5, mb: 2 }}>
          Home
        </Typography>
        <Box sx={{ mx: 2, display: "flex", justifyContent: "center" }}>
          <Grid container sx={{mx:1}}>
            <Grid item sx={{textAlign:'center'}} xs={12} sm={6} md={6} lg={6} lx={6}>
            <Box sx={{border:1,py:1,textAlign:'center',px:1}}>
            <Typography>Total Staffs</Typography>
            {data.length}
            </Box>
            </Grid>
            <Grid item sx={{border:1,textAlign:'center',px:1}} xs={12} sm={6} md={6} lg={6} lx={6}>
            <Box><Typography>Total Staffs</Typography></Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default AdminHome;