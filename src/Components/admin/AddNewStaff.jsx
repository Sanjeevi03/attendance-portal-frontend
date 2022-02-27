import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function AddNewStaff() {
  const [staffDetail,setstaffDetail] = useState({
    staffID:'SID',
    staffName:'',
    staffEmail:'',
    staffBranch:'',
    staffPassword:''
  })
 const handleOnchange=(e)=>{
    setstaffDetail({...staffDetail,[e.target.name]:e.target.value})
 }
 
 // adding data to DB
  const handleSubmit = async(e)=>{  
    e.preventDefault()
   try{
    await axios.post('https://attendance-portal-backend.herokuapp.com/addstaff',{
      staffid:staffDetail.staffID,
      staffname:staffDetail.staffName,
      staffemail:staffDetail.staffEmail,
      staffbranch:staffDetail.staffBranch,
      staffpassword:staffDetail.staffPassword,
    })
    setstaffDetail({ staffID:'SID',staffName:'',staffEmail:'',staffBranch:'',staffPassword:''})
    toast.success("New Staff Added Succesfully")
   }
   catch(err){
    toast.error("Staff ID already Exists")
   }
  }
  return <>
   <Box sx={{ width: "100%", pb: 4 }}>
   <Typography sx={{textAlign:'center',fontFamily:'Ubuntu',mb:2,pt:6,textDecoration:'underline'}}>Add New Staff</Typography>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <form>
        <table>
          <tbody>
          <tr>
            <td className="addstaff-formTitle">Staff ID</td>
            <td><input onChange={handleOnchange} name="staffID" value={staffDetail.staffID} className="addstaff-fromInputBox" type="text" minLength={4} autoComplete="off" required/></td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Name </td>
            <td><input onChange={handleOnchange} name="staffName" value={staffDetail.staffName} className="addstaff-fromInputBox" type="text" autoComplete="off"/></td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Email</td>
            <td><input onChange={handleOnchange} name="staffEmail" value={staffDetail.staffEmail} className="addstaff-fromInputBox" type="email" autoComplete="off"/></td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Branch</td>
            <td>
            {/* <input  type="text"/> */}
              <select onChange={handleOnchange} name="staffBranch" value={staffDetail.staffBranch} className="addstaff-fromInputBox" autoComplete="off">
                <option value="">Choose</option>
                <option value="IT">IT</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
                <option value="EEE">EEE</option>
                <option value="BIO-TECH">BIO-TECH</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Password</td>
            <td><input onChange={handleOnchange} name="staffPassword" value={staffDetail.staffPassword} className="addstaff-fromInputBox" type="password" autoComplete="off"/></td>
          </tr>
          </tbody>
        </table>
        <div style={{position:'static'}}>
      {staffDetail.staffID!=='' && staffDetail.staffName!=='' && staffDetail.staffEmail!=='' && staffDetail.staffBranch!=='' && staffDetail.staffPassword!=='' ?<><button className="addstaff-button" type="submit" onClick={handleSubmit}>Add</button></>:<button title="Please Fill All the fields" className="addstaff-dis-button" disabled>Add</button>}
      </div>
      </form>
      </Box>
      </Box>
  </>;
}

export default AddNewStaff;


      