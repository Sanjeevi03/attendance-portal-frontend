import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import ClassIcon from "@mui/icons-material/Class";
import PeopleIcon from "@mui/icons-material/People";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { decodeToken } from "react-jwt";
import EventNoteIcon from "@mui/icons-material/EventNote";
function AdminDashBoard() {
  const navigate = useNavigate();
  // token value
  var data = localStorage.getItem("token");
  const decodedToken = decodeToken(data);
  const handleLogout = async () => {
    await localStorage.removeItem("token");
    navigate("/");
  };
  // sideBar hide and show
  const[sideBar,setSideBar] = React.useState(false);
  window.addEventListener('resize',()=>{
    let a = window.screen.width;
    if(a<900){
      setSideBar(true)
    }
    else if(a>=900){
    setSideBar(false)
   }
  })
  console.log(sideBar);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome <strong> {decodedToken.username}</strong>
            </Typography>
            <Button color="inherit" variant="outlined" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container >
        <Grid item lg={3} md={3} sm={3} xs={2} >
          <Box
            sx={{
              background: "#2C364C",
              px: 2,
              py: 1,
              display: "flex",
              flexDirection: "column",
              minHeight:'90.23vh'}}>
            <nav>
              <List sx={{ color: "white" }}>
                {/* Admin Home Button */}
                <Link
                  to="/admin"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={{ p: 1, py: 2 }}>
                      <ListItemIcon>
                        <HomeIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <Typography sx={{ fontFamily: "Nunito" }}>
                        Home
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>

                {/* Admin NewBranch Button */}
                <Link
                  to="/admin/newstaff"
                  style={{ color: "white", textDecoration: "none" }}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ p: 1, py: 2 }}>
                      <ListItemIcon>
                        <SchoolIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <Typography sx={{ fontFamily: "Nunito" }}>
                        Add New Staff
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>

                {/* Admin view staff Button */}
                <Link
                  to="/admin/viewstaff"
                  style={{ color: "white", textDecoration: "none" }}>
                  <ListItem disablePadding>
                    <ListItemButton sx={{ p: 1, py: 2 }}>
                      <ListItemIcon>
                        <ClassIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <Typography sx={{ fontFamily: "Nunito" }}>
                        View all Staff
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>

                {/* Admin Add Staff Button */}
                <Link
                  to="/admin/modifystaff"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={{ p: 1, py: 2 }}>
                      <ListItemIcon>
                        <PeopleIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <Typography sx={{ fontFamily: "Nunito" }}>
                        Modify Staff
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>

                {/* Admin View Attendance Button */}
                <Link
                  to="/admin/adminview"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={{ p: 1, py: 2 }}>
                      <ListItemIcon>
                        <EventNoteIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <Typography sx={{ fontFamily: "Nunito" }}>
                        View Attendance
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>

                {/* Admin Change Password Button */}
                <Link
                  to="/admin/adminpsw"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <ListItem disablePadding>
                    <ListItemButton sx={{ p: 1, py: 2 }}>
                      <ListItemIcon>
                        <NoteAltIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <Typography sx={{ fontFamily: "Nunito" }}>
                        Change Password
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>

                {/* Admin Logout Button */}
                {/* <Link t style={{color:'white',textDecoration:'none'}}> */}
                <ListItem disablePadding onClick={handleLogout}>
                  <ListItemButton sx={{ p: 1, py: 2 }}>
                    <ListItemIcon>
                      <LogoutIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Typography sx={{ fontFamily: "Nunito" }}>
                      Logout
                    </Typography>
                  </ListItemButton>
                </ListItem>
                {/* </Link> */}
              </List>
              {/* <span style={{color:'white',position:'relative',top:'5em'}}>
                Admin
              </span> */}
            </nav>
          </Box>
        </Grid> 
        <Grid item lg={9} md={9} sm={9} sx={{backgroundColor:'#f0f2f5'}} >
          <Box sx={{mt:5}}>
          <Outlet />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminDashBoard;

// /admin/newbranch
// /admin/newstaff
// /admin/modifystaff
// /admin/adminview
// /admin/adminpsw
//https://github.com/devias-io/material-kit-react.git