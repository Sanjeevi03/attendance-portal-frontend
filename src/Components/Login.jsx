import React, { useState } from "react";
import attendanceImage from './assets/attendanceImage.jpeg'
import { Box } from "@mui/system";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const style = useStyles();
  const [expanded, setExpanded] = useState("")
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // admin login
  const [state,setState] = useState({adminusername:'',adminpassword:'',staffid:'',staffpassword:'',regno:'',studentpassword:''})
  const handleLoginChange = (e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  // axios to login
  const handleAdminLogin = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('https://attendance-portal-backend.herokuapp.com/adminlogin',{
        username:state.adminusername,
        password:state.adminpassword
      })
      if(response.data){
        await localStorage.setItem("token",response.data);
        navigate('/admin')
      }
    }
    catch(err){
      toast.error("Invalid Username or Password")
    }
  }
  // axios to staff login
  const handleStaffLogin = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('https://attendance-portal-backend.herokuapp.com/stafflogin',{
        staffid:state.staffid,
        staffpassword:state.staffpassword
      })
      if(response.data){
        await localStorage.setItem("staff-token",response.data);
        navigate('/staff')
      }
    }
     catch(err){
        toast.error("Invalid Staff ID or Password")
      }
  }
  // axios to student login
  const handleStudentLogin = async (e) =>{
    e.preventDefault();
    try{
      const response = await axios.post('https://attendance-portal-backend.herokuapp.com/studentlogin',{
        regno:state.regno,
        studentpassword:state.studentpassword
      })
      if(response.data){
        await localStorage.setItem("stud-token",response.data);
        navigate('/student')
      }
    }
     catch(err){
        toast.error("Invalid Regsiter No or Password")
      }
  }
  return (
    <>
    <Box sx={{backgroundColor:'grey',minHeight:'860px',background:'linear-gradient(to bottom right, #44D24A,#033359)'}}>
      <Box sx={{mb:5,py:6}}>
        <Typography sx={{color:'white',textAlign:'center',fontWeight:'700',fontSize:26,fontFamily:'Montserrat'}}>Attendance Portal</Typography>
      </Box>
      <Box sx={{mb:8,py:1}}>
        <Typography sx={{color:'white',textAlign:'center',fontWeight:'700',fontSize:30,fontFamily:'Redressed'}}>Choose your role and Login</Typography>
      </Box>

      {/* Grid  */}

      <Grid container spacing={3}>
         <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{display:'flex',justifyContent:"center"}}>
            <Box sx={{width:'500px',px:1.5}}>
            <img className={style.frontImage} src={attendanceImage} alt="AttenImage"/>
            </Box>
         </Grid>
         <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{display:'flex',justifyContent:"center"}}>
         <Box sx={{ mt:2,mb:6,width:'22em' }}>

        {/* ADMIN LOGIN */}
        <Accordion sx={{my:1}}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}>
          <AccordionSummary sx={{background:'#3d8294'}} aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{color:'white',fontWeight:'600',mx:14,fontFamily:'Ubuntu',my:0.5}}>Admin Login</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{mx:7,mt:2}}>
            <span>Credentials to Login</span> <br />
            <span>Username: admin</span> <br />
            <span>Password: admin</span>
            <TextField name="adminusername" value={state.adminusername} onChange={handleLoginChange}label='Username' type='text' sx={{m:1,width:'230px'}}  autoComplete="off"/> <br />
            <TextField name="adminpassword" value={state.adminpassword} onChange={handleLoginChange}label='Password' type='password' sx={{m:1,width:'230px'}} autoComplete="off"/> <br />
            <Button onClick={handleAdminLogin} variant="contained" sx={{mx:9,my:1,px:4}}>Login</Button>
          </AccordionDetails>
        </Accordion>

        {/* STAFF LOGIN */}
        <Accordion sx={{my:1}}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary sx={{background:'#3d8294'}} aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{color:'white',fontWeight:'600',mx:14,fontFamily:'Ubuntu',my:0.5}}>Staff Login</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{mx:7,mt:2}}>
            <TextField name="staffid" value={state.staffid} onChange={handleLoginChange} label='Staff ID' type='text' sx={{m:1,width:'230px'}} autoComplete="off"/> <br />
            <TextField name="staffpassword" value={state.staffpassword} onChange={handleLoginChange} label='Password' type='password' sx={{m:1,width:'230px'}} autoComplete="off" /> <br />
            <Button onClick={handleStaffLogin} variant="contained" sx={{mx:9,my:1,px:4}}>Login</Button>
          </AccordionDetails>
        </Accordion>

        {/* STUDENT LOGIN */}
        <Accordion 
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary sx={{background:'#3d8294'}} aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{color:'white',fontWeight:'600',mx:13,fontFamily:'Ubuntu',my:0.5}}>Student Login</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{mx:7,mt:2}}>
            <TextField name="regno" value={state.regno} onChange={handleLoginChange} label='Register No' type='text' sx={{m:1,width:'230px'}} autoComplete="off"/> <br />
            <TextField name="studentpassword" value={state.studentpassword} onChange={handleLoginChange} label='Password' type='password' sx={{m:1,width:'230px'}} autoComplete="off"/> <br />
            <Button onClick={handleStudentLogin} variant="contained" sx={{mx:9,my:1,px:4}}>Login</Button>
          </AccordionDetails>
        </Accordion>
      </Box>
         </Grid>
      </Grid>
    </Box>
    <Box sx={{p:5,background:'#4dacc4'}} >
      <Typography sx={{textAlign:'center'}}>All Rights Reserved &copy;</Typography>
    </Box>
    </>
  );
}
const useStyles = makeStyles({
   frontImage:{
      width:'100%',
      borderRadius:10
   },
})
export default Login;
