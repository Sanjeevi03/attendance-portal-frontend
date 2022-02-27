import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { decodeToken } from "react-jwt";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

function StudentChange() {
  // token value
  var data = localStorage.getItem("stud-token");
  const decodedToken = decodeToken(data);
  const [state,setState] = useState({old:'',new:''})
  const handleChange=(e)=>{
      setState({...state,[e.target.name]:e.target.value})
  }
  //onclick
  const handleSubmit = async ()=>{
    try{
      await axios.put('https://attendance-portal-backend.herokuapp.com/studentchangepsw',{
      old:state.old,new:state.new,regno:decodedToken.regno
    })
    setState({old:'',new:''})
    toast.success("Password Updated Successfully")
    }
    catch(err){
      toast.error("Old Password is Incorrect")
    }
  }
  return (
    <>
      <Box sx={{ width: "100%",pb: 4 }}>
        <Typography sx={{ textAlign: "center",pt:5,pb:2,fontFamily: "Ubuntu", mb: 2 }}>
          Change Password
        </Typography>
        <Box sx={{ mx: 2,textAlign:'center'}}>

       <table style={{margin:'auto'}}>
         <tbody>
           <tr>
             <td style={{fontWeight:600}}>Old Password</td>
             <td><input type="text" name="old" value={state.old} onChange={handleChange} className="change-input" autoComplete="off"/></td>
           </tr>
           <br />
           <tr>
             <td style={{fontWeight:600}}>New Password</td>
             <td><input type="text" name="new" value={state.new} onChange={handleChange} className="change-input" autoComplete="off"/></td>
           </tr>
           <br /> <br />
         </tbody>
       </table> 
          {state.old!=='' && state.new!=='' ?<button className="chg-psw-btn" onClick={handleSubmit} sx={{px:2,py:1}} >Change My Password</button>:<button className="chg-dis-psw-btn" disabled sx={{px:2,py:1}} >Change My Password</button>}
        </Box>
      </Box>
    </>
  );
}

export default StudentChange;