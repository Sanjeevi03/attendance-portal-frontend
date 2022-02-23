import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewStaff from "./Components/admin/AddNewStaff";
import AdminChangePsw from "./Components/admin/AdminChangePsw";
import AdminDashBoard from "./Components/admin/AdminDashBoard";
import AdminHome from "./Components/admin/AdminHome";
import AdminViewAttendance from "./Components/admin/AdminViewAttendance";
import ModifyStaffInfo from "./Components/admin/ModifyStaffInfo";
import ViewStaff from "./Components/admin/ViewStaff";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="" element={<AdminHome />} />
          <Route path="/admin/newstaff" element={<AddNewStaff />} />
          <Route path="/admin/modifystaff" element={<ModifyStaffInfo />} />
          <Route path="/admin/adminview" element={<AdminViewAttendance />} />
          <Route path="/admin/adminpsw" element={<AdminChangePsw />} />
          <Route path="/admin/viewstaff" element={<ViewStaff />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
