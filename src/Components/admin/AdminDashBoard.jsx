import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  List,Box,AppBar,
  Button,
  ListItem,Typography,Toolbar,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import ClassIcon from "@mui/icons-material/Class";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { decodeToken } from "react-jwt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
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
              Welcome <strong> {decodedToken.username}</strong>
            </Typography>
            <Button color="inherit" variant="outlined" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <aside className="sidebar">
        <Box
          sx={{
            background: "#2C364C",
            px: 2,
            py: 1,
            height: "99%",
          }}
        >
          <span className="close-icon" onClick={closeMenu}>
            <CloseIcon />
          </span>
          <nav>
            <List sx={{ color: "white",mt:2 }}>
              {/* Admin Home Button */}
              <Link
                to="/admin"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem disablePadding onClick={closeMenu}>
                  <ListItemButton sx={{ p: 1, py: 2 }}>
                    <ListItemIcon>
                      <HomeIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                    <Typography sx={{ fontFamily: "Nunito" }}>Home</Typography>
                  </ListItemButton>
                </ListItem>
              </Link>

              {/* Admin NewBranch Button */}
              <Link
                to="/admin/newstaff"
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem disablePadding onClick={closeMenu}>
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
                style={{ color: "white", textDecoration: "none" }}
              >
                <ListItem disablePadding onClick={closeMenu}>
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

              {/* Admin Change Password Button */}
              <Link
                to="/admin/adminpsw"
                style={{ color: "white", textDecoration: "none" }}
              >
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

              {/* Admin Logout Button */}
              {/* <Link t style={{color:'white',textDecoration:'none'}}> */}
              <ListItem disablePadding onClick={handleLogout}>
                <ListItemButton sx={{ p: 1, py: 2 }}>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <Typography sx={{ fontFamily: "Nunito" }}>Logout</Typography>
                </ListItemButton>
              </ListItem>
              {/* </Link> */}
            </List>
            {/* <span style={{color:'white',position:'relative',top:'5em'}}>
                Admin
              </span> */}
          </nav>
        </Box>
      </aside>
      <div onClick={closeMenu} className="sidebar-close-button ">
        <Box sx={{ height: "93vh", backgroundColor: "#f0f2f5" }}>
          <Outlet />
        </Box>
      </div>
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
