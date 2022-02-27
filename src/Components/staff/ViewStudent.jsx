import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Button, TableHead, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

function TablePaginationActions(props) {


  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
      
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable() {
   //Get
   const [data,setData] = React.useState([])
   React.useEffect(()=>{
   const loadData = async()=>{
      const response = await axios.get('https://attendance-portal-backend.herokuapp.com/viewstudent')
      setData(response.data)
   }
   loadData()
},[data])
// deleting
const handleDelete = async(regno,name)=>{
   Swal.fire({
      title:`Are you sure to delete ${name} ?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
         try{
             axios.delete('https://attendance-portal-backend.herokuapp.com/delete',{headers: {
               regno:regno   
             }})
         }
         catch(err){
            toast.error("Try Again")
         }
        Swal.fire(
          'Deleted!',
          `${name} has deleted.`,
          'success'
        )
      }
    })
  
}
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
     <>
     <Box sx={{mx:2}}>
      <Typography sx={{textAlign:'center',fontFamily:'Ubuntu',mb:2,pt:4}}>Student Details</Typography>

    <TableContainer component={Paper} sx={{mt:6}}>

      <Table sx={{ minWidth: 950 }} aria-label="custom pagination table">
      <TableHead>
  <TableRow >
    <TableCell sx={{fontWeight:'600'}}>S.No</TableCell>
    <TableCell sx={{fontWeight:'600'}} >Reg No</TableCell>
    <TableCell sx={{fontWeight:'600'}} >Name</TableCell>
    <TableCell sx={{fontWeight:'600'}} >Email</TableCell>
    <TableCell sx={{fontWeight:'600'}} >Gender</TableCell>
    <TableCell sx={{fontWeight:'600'}} >Date of Birth</TableCell>
    <TableCell sx={{fontWeight:'600'}} >Mobile No</TableCell>
    <TableCell sx={{fontWeight:'600'}} >Course</TableCell>
    <TableCell sx={{fontWeight:'600'}} >Delete</TableCell>
  </TableRow>
</TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row,i) => (
            <TableRow key={i}>
              <TableCell>{i+1}</TableCell>
               <TableCell >{row.regno}</TableCell>
               <TableCell >{(row.studentname).toUpperCase()}</TableCell>
               <TableCell >{row.studentemail}</TableCell>
               <TableCell >{row.studentgender}</TableCell>
               <TableCell >{row.studentdob}</TableCell>
               <TableCell >{row.studentmobile}</TableCell>
               <TableCell >{row.studentcourse}</TableCell>
               <TableCell >
                  <Button onClick={()=>handleDelete(row.regno,row.studentname)} color="error"><DeleteIcon/></Button>
               </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={5}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    </Box>
     </>
  );
}
