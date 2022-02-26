import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewAttendance() {
  const [data,setData] = useState([])
  useEffect(()=>{
    const loadData = async()=>{
      const response  = await axios.get('http://localhost:8000/viewattendance')
      setData(response.data)

    }
    loadData();
  },[])

  var k=[]
  var v=[]
  data.map(i=>i !== '_id'?k.push(Object.keys(i)):null)
  data.map(i=>v.push(Object.values(i)))
  console.log(k);
  // console.log(v);
  // {JSON.stringify(data)}

  return (
    <Box sx={{ width: "100%" }}>
        <Typography sx={{ textAlign: "center", fontFamily: "Ubuntu", mb: 2,pt:4 }}>
          Viewing Attendance
        </Typography>
        <Box sx={{ mx: 2, display: "flex", justifyContent: "center" }}>
          {data.map((i,j)=>
            <div>
              <span>{i.date} </span> 
            </div>
            )}
        </Box>
      </Box>
  )
}

export default ViewAttendance