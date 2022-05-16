import React, {useEffect, useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import Feedbacks from '../components/Feedbacks';
import Footer from '../components/Footer';
import Facilities from '../components/Facilities/Facility';
import { facilityOne, facilityTwo } from '../components/Facilities/Data';


const Home = () => {

  useEffect(() => {
    const url = new URL(window.location.href);

    const urlParams = new URLSearchParams(url.search);

    if(!urlParams.get('token') && !localStorage.getItem('user')) {
      localStorage.removeItem('user');
      window.location = "http://localhost:3000";
    }

    if(urlParams.get('token') && !localStorage.getItem('user')) {
      const user = {
        "_id": urlParams.get('_id'),
        "name": urlParams.get('name'),
        "email": urlParams.get('email'),
        "token": urlParams.get('token'),
      }
  
      localStorage.setItem('user', JSON.stringify(user))
    }
  }, [])

  return (
      <>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    {/* <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    <InfoSection {...homeObjFour}/>
    <InfoSection {...homeObjFive}/> */}
    {/* <Feedbacks /> */}
    <Footer />
    {/* <Facilities {...facilityOne}/>
    <Facilities {...facilityTwo}/> */}
 

   
    </>
  );
};

export default Home