import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
function ViewStaff() {
   //Pagination
   const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // GETTING STAFF DETAILS FROM DB
  const [data,setData] = useState([])
  useEffect(()=>{
     const loadData = async()=>{
         let response = await axios.get('http://localhost:8000/viewstaff');
         setData(response.data)
     }
     loadData();
  },[])
  return (
    <>
      <Box
        sx={{  width: "100%", mt: 4, pb: 4 }}
      >
        <Typography sx={{ textAlign: "center", fontFamily: "Ubuntu", mb: 2 }}>
          Staff Details
        </Typography>
        <Box sx={{mx:2,display:'flex',justifyContent:'center'}}>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow >
                    <TableCell sx={{fontWeight:'600'}}>S.No</TableCell>
                    <TableCell sx={{fontWeight:'600'}}>ID</TableCell>
                    <TableCell sx={{fontWeight:'600'}}>Name</TableCell>
                    <TableCell sx={{fontWeight:'600'}}>Email</TableCell>
                    <TableCell sx={{fontWeight:'600'}}>Branch</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((i,j)=>(
                  <TableRow key={j}>
                     <TableCell>{j+1}</TableCell>
                     <TableCell>{i.staffid}</TableCell>
                     <TableCell>{i.staffname}</TableCell>
                     <TableCell>{i.staffemail}</TableCell>
                     <TableCell>{i.staffbranch}</TableCell>
                  </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default ViewStaff;
