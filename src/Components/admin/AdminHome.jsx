import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import axios from "axios";
function AdminHome() {
  const [studData, setStudData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      let response = await axios.get("http://localhost:8000/countstaff");
      setStudData(response.data);
    };
    loadData();
  }, []);
  return (
    <>
      <Box sx={{ width: "100%", pb: 4 }}>
        <Typography sx={{ textAlign: "center", fontFamily: "Ubuntu",pt:5, mb: 2 }}>
          Home
        </Typography>
        <Box sx={{ mx: 2, display: "flex", justifyContent: "center" }}>
          <Grid container sx={{mx:1}} spacing={3}>
            <Grid sx={{display:'flex',justifyContent:'center'}} item  xs={12} sm={6} md={6} lg={6} lx={6}>
            <Box sx={{width:'300px',boxShadow:'10px 10px 25px #aaaaaa;',borderRadius:'5px',py:1,textAlign:'center',px:1}}>
            <Typography sx={{mt:1,py:2}}>Total Staffs</Typography>
            <Typography sx={{pb:2}}>{studData.length}</Typography>
            </Box>
            </Grid>
            <Grid sx={{display:'flex',justifyContent:'center'}} item  xs={12} sm={6} md={6} lg={6} lx={6}>
            <Box sx={{width:'300px',boxShadow:'10px 10px 25px #aaaaaa;',borderRadius:'5px',py:1,textAlign:'center',px:1}}>
              <Typography sx={{mt:1,py:2}}>Total Students</Typography>
              <Typography sx={{pb:2}}>{studData.length}</Typography>
            </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default AdminHome;