import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewBranch from "./Components/admin/AddNewBranch";
import AddNewStaff from "./Components/admin/AddNewStaff";
import AdminChangePsw from "./Components/admin/AdminChangePsw";
import AdminDashBoard from "./Components/admin/AdminDashBoard";
import AdminHome from "./Components/admin/AdminHome";
import AdminViewAttendance from "./Components/admin/AdminViewAttendance";
import ModifyStaffInfo from "./Components/admin/ModifyStaffInfo";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="" element={<AdminHome />} />
          <Route path="/admin/newbranch" element={<AddNewBranch />} />
          <Route path="/admin/newstaff" element={<AddNewStaff />} />
          <Route path="/admin/modifystaff" element={<ModifyStaffInfo />} />
          <Route path="/admin/adminview" element={<AdminViewAttendance />} />
          <Route path="/admin/adminpsw" element={<AdminChangePsw />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
