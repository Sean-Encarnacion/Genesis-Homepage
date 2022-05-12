import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive } from '../components/InfoSection/Data';
import Feedbacks from '../components/Feedbacks';
import Footer from '../components/Footer';
import Facilities from '../components/Facilities/Facility';
import { facilityOne, facilityTwo } from '../components/Facilities/Data';


const Home = () => {
  return (
      <>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <InfoSection {...homeObjThree}/>
    <InfoSection {...homeObjFour}/>
    <InfoSection {...homeObjFive}/>
    <Feedbacks />
    <Footer />
    {/* <Facilities {...facilityOne}/>
    <Facilities {...facilityTwo}/> */}
 

   
    </>
  );
};

export default Home