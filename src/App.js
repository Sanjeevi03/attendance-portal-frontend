import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNewStaff from "./Components/admin/AddNewStaff";
import AdminChangePsw from "./Components/admin/AdminChangePsw";
import AdminDashBoard from "./Components/admin/AdminDashBoard";
import AdminHome from "./Components/admin/AdminHome";
import AdminViewAttendance from "./Components/admin/AdminViewAttendance";
import ViewStaff from "./Components/admin/ViewStaff";
import Login from "./Components/Login";
import StaffDashBoard from "./Components/staff/StaffDashBoard";
import StaffHome from "./Components/staff/StaffHome";
import AddStudent from "./Components/staff/AddStudent";
import MarkAttendance from "./Components/staff/MarkAttendance";
import ViewAttendance from "./Components/staff/ViewAttendance";
import ViewLeaveForm from "./Components/staff/ViewLeaveForm";
import StaffChange from "./Components/staff/StaffChange";
import StaffProfile from "./Components/staff/StaffProfile";
import StudentDashBoard from "./Components/student/StudentDashBoard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminDashBoard />}>
          <Route path="" element={<AdminHome />} />
          <Route path="/admin/newstaff" element={<AddNewStaff />} />
          <Route path="/admin/adminview" element={<AdminViewAttendance />} />
          <Route path="/admin/adminpsw" element={<AdminChangePsw />} />
          <Route path="/admin/viewstaff" element={<ViewStaff />} />
        </Route>
        {/* STAFF ROUTES */}
        <Route path="/staff" element={<StaffDashBoard />}>
          <Route path="" element={<StaffHome />} />
          <Route path="/staff/newstudent" element={<AddStudent />} />
          <Route path="/staff/markattendance" element={<MarkAttendance />} />
          <Route path="/staff/viewattendance" element={<ViewAttendance />} />
          <Route path="/staff/viewleave" element={<ViewLeaveForm />} />
          <Route path="/staff/staffpsw" element={<StaffChange />} />
          <Route path="/staff/myprofile" element={<StaffProfile />} />
        </Route>
        {/* STUDENT ROUTES */}
        <Route path='/student' element={<StudentDashBoard/>}>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
