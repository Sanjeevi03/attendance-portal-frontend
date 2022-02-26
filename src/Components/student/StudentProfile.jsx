import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { decodeToken } from 'react-jwt';
import profile from '../assets/profile.png';
function StaffProfile() {
   var data = localStorage.getItem("stud-token");
  const decodedToken = decodeToken(data);
  return (
   <Box sx={{ width: "100%", pb: 4 }}>
      <Typography sx={{textAlign:'center',fontFamily:'Ubuntu',mb:2,pt:4}}>Profile</Typography>
      <Box sx={{display:'flex',justifyContent:'center'}}>
         <Grid container>
            <Grid item xs={12} sm={6} lg={6} xl={6}>
               <Box sx={{px:5,textAlign:'center'}}>
               <img style={{marginTop:'30px',marginBottom:'10px'}} src={profile} className="profile-icon" alt="profile" />
               <Typography sx={{fontWeight:'600',my:2}}><span style={{fontWeight:0,color:'#6b6b6b'}}>REGISTER NUMBER</span> <span style={{color:"#cc5858"}}>{decodedToken.regno}</span></Typography>
               </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} xl={6}>
               <Box sx={{p:5,pt:6}}>
                  <table>
                     <tbody>
                        <tr>
                           <td><span style={{fontWeight:600,paddingRight:20}}>My Name</span></td>
                           <td  className='profile-field'><span>{decodedToken.studentname}</span></td>
                        </tr>
                        <br />
                        <tr>
                           <td><span style={{fontWeight:600,paddingRight:27}}>Email ID</span></td>
                           <td className='profile-field'><span>{decodedToken.studentemail}</span></td>
                        </tr>
                        <br />
                        <tr>
                           <td><span style={{fontWeight:600,paddingRight:27}}>Age</span></td>
                           <td className='profile-field'><span>{decodedToken.studentage}</span></td>
                        </tr>
                        <br />
                        <br />
                        <tr>
                           <td><span style={{fontWeight:600,paddingRight:27}}>Date of Birth</span></td>
                           <td className='profile-field'><span>{decodedToken.studentdob}</span></td>
                        </tr>
                        <br />
                        <tr>
                           <td><span style={{fontWeight:600,paddingRight:27}}>Gender</span></td>
                           <td className='profile-field'><span>{decodedToken.studentgender}</span></td>
                        </tr>
                        <br />
                        <tr>
                           <td><span style={{fontWeight:600,paddingRight:34}}>Branch </span></td>
                           <td className='profile-field'><span>{decodedToken.studentcourse}</span></td>
                        </tr>
                        <br />
                        <tr>
                           <td><span style={{fontWeight:600,paddingRight:27}}>Mobile No</span></td>
                           <td className='profile-field'><span>{decodedToken.studentmobile}</span></td>
                        </tr>
                        <br />
                     </tbody>
                  </table>
               </Box>
            </Grid>
         </Grid>
     </Box>
   </Box>
  )
}

export default StaffProfile