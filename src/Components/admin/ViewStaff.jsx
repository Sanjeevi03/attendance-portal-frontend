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
  
  // GETTING STAFF DETAILS FROM DB
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      let response = await axios.get("https://attendance-portal-backend.herokuapp.com/viewstaff");
      setData(response.data);
    };
    loadData();
  }, []);
  
  return (
    <>
      <Box sx={{ width: "100%", pt:6,pb: 4 }}>
        <Typography sx={{ textAlign: "center", fontFamily: "Ubuntu", mb: 2 }}>
          Staff Details
        </Typography>
        <Box sx={{ mx: 2, display: "flex", justifyContent: "center" }}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 587 }}>
              <Table >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "600" }}>S.No</TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>ID</TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>Email</TableCell>
                    <TableCell sx={{ fontWeight: "600" }}>Branch</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((i, j) => (
                    <TableRow key={j}>
                      <TableCell>{j + 1}</TableCell>
                      <TableCell>{i.staffid}</TableCell>
                      <TableCell>{i.staffname}</TableCell>
                      <TableCell>{i.staffemail}</TableCell>
                      <TableCell>{i.staffbranch}</TableCell>
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
