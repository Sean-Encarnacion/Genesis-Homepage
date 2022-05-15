import React from 'react';
import { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Facility from '../components/Facilities/Facility';
import { facilityOne, facilityTwo, facilityThree, facilityFour } from '../components/Facilities/Data';


const FacilityPage = () => {
  return (
    <> 
      <ScrollToTop />
      <Facility {...facilityOne} />
      <Facility {...facilityTwo} />
      <Facility {...facilityThree} />
      <Facility {...facilityFour} />
      
      
    </>
  );
};


export default FacilityPage;