import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { decodeToken } from "react-jwt";
import EventNoteIcon from "@mui/icons-material/EventNote";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircle from "@mui/icons-material/AccountCircle";
function StudentDashBoard() {
  const navigate = useNavigate();
  //app bar
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // token value
  var data = localStorage.getItem("stud-token");
  const decodedToken = decodeToken(data);
  const handleLogout = async () => {
    await localStorage.removeItem("stud-token");
    navigate("/");
  };
  // sideBar hide and show
  const openMenu = ()=>{
    document.querySelector('.sidebar').classList.add('open')
  }
  const closeMenu = ()=>{
    document.querySelector('.sidebar').classList.remove('open')
  }

  
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
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome <strong>{decodedToken.studentname}</strong>
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu sx={{mt:5}}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link  style={{textDecoration:'none',color:'black'}} to=''>My Profile</Link>
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      </Box>
      <aside className="sidebar">
      <Box
            sx={{
              background: "#2C364C",
              px: 2,
              py: 1,height:'100%'}}>
                <span className="close-icon" onClick={closeMenu}><CloseIcon/></span>
            <nav>
              <List sx={{ color: "white",mt:2 }}>
                {/* Staff Home Button */}
                <Link
                  to=""
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <ListItem disablePadding onClick={closeMenu}>
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

                
                {/* View Attendance Button */}
                <Link
                  to="/student/viewattendance"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <ListItem disablePadding onClick={closeMenu}>
                    <ListItemButton sx={{ p: 1, py: 2 }}>
                      <ListItemIcon>
                        <PeopleIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <Typography sx={{ fontFamily: "Nunito" }}>
                        View Attendance
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>

                {/* Apply Leave Button */}
                <Link
                  to="/student/leave"
                  style={{ color: "white", textDecoration: "none" }}>
                  <ListItem disablePadding onClick={closeMenu}>
                    <ListItemButton sx={{ p: 1, py: 2 }}>
                      <ListItemIcon>
                        <EventNoteIcon sx={{ color: "white" }} />
                      </ListItemIcon>
                      <Typography sx={{ fontFamily: "Nunito" }}>
                        Apply Leave
                      </Typography>
                    </ListItemButton>
                  </ListItem>
                </Link>

                {/* Staff Change Password Button */}
                <Link
                  to="/student/changepsw"
                  style={{ color: "white", textDecoration: "none" }}>
                  <ListItem disablePadding onClick={closeMenu}>
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

                {/* Staff Logout Button */}
                <ListItem disablePadding onClick={handleLogout}>
                  <ListItemButton sx={{ p: 1, py: 2 }} onClick={handleLogout}>
                    <ListItemIcon>
                      <LogoutIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Typography sx={{ fontFamily: "Nunito" }}>
                      Logout
                    </Typography>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
      </aside>
      <div onClick={closeMenu} className="sidebar-close-button ">
      <Box  sx={{minHeight:'800px',backgroundColor:'#f0f2f5'}}>
        <Outlet />
      </Box>
      </div>
    </>
  );
}

export default StudentDashBoard;