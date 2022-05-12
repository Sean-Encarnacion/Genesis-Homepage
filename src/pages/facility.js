import React from 'react';
import { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Facility from '../components/Facilities/Facility';
import { facilityOne, facilityTwo } from '../components/Facilities/Data';


const FacilityPage = () => {
  return (
    <> 
      <ScrollToTop />
      <Facility {...facilityTwo} />
      <Facility {...facilityOne} />
      
      
    </>
  );
};


export default FacilityPage;