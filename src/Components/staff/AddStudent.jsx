import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function AddNewStaff() {
  const [studDetail,setStudDetail] = useState({
    regNo:'R15',
    studentName:'',
    studentAge:'',
    studentDob:'',
    studentGender:'',
    studentEmail:'',
    studentMobile:'',
    studentCourse:'',
    studentPassword:''
  })
 const handleOnchange=(e)=>{
    setStudDetail({...studDetail,[e.target.name]:e.target.value})
 }
 
 // adding data to DB
  const handleSubmit = async(e)=>{  
    e.preventDefault()
   try{
    await axios.post('https://attendance-portal-backend.herokuapp.com/addstudent',{
      regno:studDetail.regNo,
    studentname:studDetail.studentName,
    studentage:studDetail.studentAge,
    studentdob:studDetail.studentDob,
    studentgender:studDetail.studentGender,
    studentemail:studDetail.studentEmail,
    studentmobile:studDetail.studentMobile,
    studentcourse:studDetail.studentCourse,
    studentpassword:studDetail.studentPassword
    })
    setStudDetail({ regNo:'R15',
    studentName:'',
    studentAge:'',
    studentDob:'',
    studentGender:'',
    studentEmail:'',
    studentMobile:'',
    studentCourse:'',
    studentPassword:''})
    toast.success("New Student Added Succesfully")
   }
   catch(err){
    toast.error("Register No already Exists")
   }
  }
  return <>
   <Box sx={{ width: "100%", pb: 4 }}>
   <Typography sx={{textAlign:'center',fontFamily:'Ubuntu',mb:2,pt:5}}>Add New Student</Typography>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <form>
        <table>
          <tbody>
          <tr>
            <td className="addstaff-formTitle">Register No</td>
            <td><input style={{width:'250px'}} onChange={handleOnchange} name="regNo" value={studDetail.regNo} className="addstaff-fromInputBox" type="text" minLength={4} autoComplete="off" required/></td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Name </td>
            <td><input style={{width:'250px'}} onChange={handleOnchange} name="studentName" value={studDetail.studentName} className="addstaff-fromInputBox" type="text" autoComplete="off"/></td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Age </td>
            <td><input style={{width:'250px'}} onChange={handleOnchange} name="studentAge" value={studDetail.studentAge} className="addstaff-fromInputBox" type="text" autoComplete="off"/></td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Date Of Birth </td>
            <td><input style={{width:'250px'}} onChange={handleOnchange} name="studentDob" value={studDetail.studentDob} className="addstaff-fromInputBox" type="date" autoComplete="off"/></td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Gender </td>
            <td><input onChange={handleOnchange} name="studentGender" value="male" className="radio-btn" type="radio" autoComplete="off"/>Male
           <input style={{width:'20px'}} onChange={handleOnchange} name="studentGender" value="female" className="radio-btn" type="radio" autoComplete="off"/>Female</td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Email</td>
            <td><input style={{width:'250px'}} onChange={handleOnchange} name="studentEmail" value={studDetail.studentEmail} className="addstaff-fromInputBox" type="email" autoComplete="off"/></td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Mobile No</td>
            <td><input style={{width:'250px'}} onChange={handleOnchange} name="studentMobile" value={studDetail.studentMobile} className="addstaff-fromInputBox" type="email" autoComplete="off"/></td>
          </tr>
          <tr>
            <td className="addstaff-formTitle">Course</td>
            <td>
            {/* <input  type="text"/> */}
              <select style={{width:'250px'}} onChange={handleOnchange} name="studentCourse" value={studDetail.studentCourse} className="addstaff-fromInputBox" autoComplete="off">
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
            <td><input style={{width:'250px'}} onChange={handleOnchange} name="studentPassword" value={studDetail.studentPassword} className="addstaff-fromInputBox" type="password" autoComplete="off"/></td>
          </tr>
          </tbody>
        </table>
        <div style={{position:'static'}}>
      {studDetail.regNo !=='' &&
    studDetail.studentName !=='' &&
    studDetail.studentAge !=='' &&
    studDetail.studentDob !=='' &&
    studDetail.studentGender !=='' &&
    studDetail.studentEmail !=='' &&
    studDetail.studentMobile !=='' &&
    studDetail.studentCourse !=='' &&
    studDetail.studentPassword !=='' ?<><button className="studstaff-button" type="submit" onClick={handleSubmit}>Add Student</button></>:<button title="Please Fill All the fields" className="studstaff-dis-button" disabled>Add Student</button>}

      </div>
      </form>
      </Box>
      </Box>
  </>;
}

export default AddNewStaff;


      