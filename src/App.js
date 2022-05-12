import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import BookingPage from './pages/booking';
import FacilityPage from './pages/facility';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        
        <Route exact path="/signin" element={ <SigninPage /> }  />
        
        <Route exact path="/signup" element={ <SignupPage /> }  />
        
        <Route exact path="/booking" element={ <BookingPage /> }  />

        <Route exact path="/facility" element={ <FacilityPage /> }  />
      </Routes>
    </Router>

    </>
  );
}

export default App;
