import "./App.css";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Review from "./Pages/Home/Review/Review";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboards/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboards/MyAppointment/MyAppointment";
import MyReview from "./Pages/Dashboards/MyReview/MyReview";

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
          <Route index element={<MyAppointment/>}></Route>
          <Route path="review" element={<MyReview/>}></Route>
        </Route>
        {/* <Route path="/review" element={<Review />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
