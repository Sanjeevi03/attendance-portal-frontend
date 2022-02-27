import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { decodeToken } from "react-jwt";
import { toast } from "react-toastify";

function ApplyLeave() {
   // token value
  var data = localStorage.getItem("stud-token");
  const decodedToken = decodeToken(data);
   const [state,setState] = useState({fromdate:'',todate:'',message:'',regno:'',name:''})
   const handleChange = (e)=>{
         setState({...state,[e.target.name]:e.target.value,regno:decodedToken.regno,name:decodedToken.studentname})
   
   }
   const handleSubmit = async ()=>{
      console.log(state);
      await axios.post('https://attendance-portal-backend.herokuapp.com/applyleave',state)
      setState({fromdate:'',todate:'',message:'',regno:'',name:''})
      toast.success("Leave Applied")

   }
  return (
    <>
      <Box sx={{ width: "100%", pb: 4 }}>
        <Typography
          sx={{ textAlign: "center", fontFamily: "Ubuntu", mb: 2, pt: 4 }}>
         Leave Form
        </Typography>
        <Box>
           <table style={{margin:'auto'}}>
              <thead>
                 <tr>
                    <td>From Date</td>
                    <td>To Date</td>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                    <td><input type="date" name="fromdate" value={state.fromdate} onChange={handleChange} /></td>
                    <td><input type="date" name="todate" value={state.todate} onChange={handleChange} /></td>
                 </tr>
                 <br />
              </tbody>
           </table>
        </Box>
        <div style={{display:'flex',justifyContent:'center'}}><div><textarea onChange={handleChange} name="message" value={state.message} placeholder="Message:" rows='5' cols='30'></textarea></div></div>
        {state.fromdate!==''&&state.todate!==""&&state.message!==''?<button onClick={handleSubmit} className="stud-button" type="submit">Apply</button>:<button disabled style={{cursor:'not-allowed'}} className="stud-button" type="submit">Apply</button>}
      </Box>
    </>
  );
}

export default ApplyLeave;
