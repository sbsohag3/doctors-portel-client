import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboards/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboards/MyAppointment/MyAppointment";
import MyReview from "./Pages/Dashboards/MyReview/MyReview";
import Users from "./Pages/Dashboards/Users/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import AddDoctors from "./Pages/Dashboards/AddDoctors/AddDoctors";
import ManageDoctors from "./Pages/Dashboards/ManageDoctors/ManageDoctors";
import Payment from "./Pages/Dashboards/Payment/Payment";

function App() {
  return (
    <div className="mx-w-7xl mx-auto lg:px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctor"
            element={
              <RequireAdmin>
                <AddDoctors />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
