import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import BookingPage from "./pages/booking";
import ProofPage from "./pages/proof";
import FacilityPage from "./pages/facility";
import ActivityPage from "./pages/activity";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Activities from "./components/Activities/Activity";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/services" element={<Activities />} />

          <Route exact path="/signin" element={<SigninPage />} />

          <Route exact path="/signup" element={<SignupPage />} />

          <Route exact path="/booking" element={<BookingPage />} />
          <Route exact path="/proof" element={<ProofPage />} />

          <Route exact path="/facility" element={<FacilityPage />} />

          <Route exact path="/activity" element={<ActivityPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
