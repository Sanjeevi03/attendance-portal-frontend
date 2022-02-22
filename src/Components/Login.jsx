import React from "react";
import attendanceImage from '../assets/attendanceImage.jpeg'
import { Box } from "@mui/system";

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

function Login() {
   const style = useStyles();
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
    <Box sx={{backgroundColor:'grey',minHeight:'860px',background:'linear-gradient(to bottom right, #44D24A,#033359)'}}>
      <Box sx={{mb:5,py:6}}>
        <Typography sx={{color:'white',textAlign:'center',fontWeight:'700',fontSize:26,fontFamily:'Montserrat'}}>Attendance Portal</Typography>
      </Box>
      <Box sx={{mb:8,py:1}}>
        <Typography sx={{color:'white',textAlign:'center',fontWeight:'700',fontSize:30,fontFamily:'Redressed'}}>Choose your role and Login</Typography>
      </Box>
      <Grid container spacing={3}>
         <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{display:'flex',justifyContent:"center"}}>
            <Box sx={{width:'500px',px:1.5}}>
            <img className={style.frontImage} src={attendanceImage} alt="AttenImage"/>
            </Box>
         </Grid>
         <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{display:'flex',justifyContent:"center"}}>
         <Box sx={{ mt:2,mb:6,width:'22em' }}>
        <Accordion sx={{my:1}}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}>
          <AccordionSummary sx={{background:'#3d8294'}} aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{color:'white',fontWeight:'600',mx:14,fontFamily:'Ubuntu',my:0.5}}>Admin Login</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{mx:7,mt:2}}>
            <TextField label='Username' type='text' sx={{m:1,width:'230px'}}/> <br />
            <TextField label='Password' type='password' sx={{m:1,width:'230px'}} /> <br />
            <Button variant="contained" sx={{mx:9,my:1,px:4}}>Login</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{my:1}}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary sx={{background:'#3d8294'}} aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{color:'white',fontWeight:'600',mx:14,fontFamily:'Ubuntu',my:0.5}}>Staff Login</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{mx:7,mt:2}}>
            <TextField label='Username' type='text' sx={{m:1,width:'230px'}}/> <br />
            <TextField label='Password' type='password' sx={{m:1,width:'230px'}} /> <br />
            <Button variant="contained" sx={{mx:9,my:1,px:4}}>Login</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion 
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary sx={{background:'#3d8294'}} aria-controls="panel1d-content" id="panel1d-header">
            <Typography sx={{color:'white',fontWeight:'600',mx:13,fontFamily:'Ubuntu',my:0.5}}>Student Login</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{mx:7,mt:2}}>
            <TextField label='Username' type='text' sx={{m:1,width:'230px'}}/> <br />
            <TextField label='Password' type='password' sx={{m:1,width:'230px'}} /> <br />
            <Button variant="contained" sx={{mx:9,my:1,px:4}}>Login</Button>
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
