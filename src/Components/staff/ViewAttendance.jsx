import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
function ViewStaff() {
  
  const [data,setData] = useState([])
  useEffect(()=>{
    const loadData = async()=>{
      const response  = await axios.get('https://attendance-portal-backend.herokuapp.com/viewattendance')
      setData(response.data)

    }
    loadData();
  },[])

  var a=[]
  var b=[]
  data.map(i=>a.push(JSON.stringify(i)))
  a.map(i=>b.push(JSON.parse(i)))
  var date=[]
  b.map(i=>delete i._id ? date.push(i.date):null)
  var final=[]
  b.map(i=>delete i._id && delete i.date ? final.push(i):null)
  return (
    <>
      <Box sx={{ width: "100%", pt:6,pb: 4 }}>
        <Typography sx={{ textAlign: "center", fontFamily: "Ubuntu", mb: 2 }}>
          Attendance History
        </Typography>
        <Box sx={{ mx: 4, display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 587 }}>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight:'600',width:'100px',textAlign:'center'}}>Date</TableCell>
                    <TableCell sx={{fontWeight:'600',textAlign:'center'}}>Register Number and Status </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {date.map((i, j) => (
                    <TableRow key={j}>
                      <TableCell >{i}</TableCell>
                      <TableCell>{JSON.stringify(final[j])}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default ViewStaff;
