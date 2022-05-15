import React from 'react';
import { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Activity from '../components/Activities/Activity';
import { activityOne, activityTwo, activityThree, activityFour } from '../components/Activities/Data';


const ActivityPage = () => {
  return (
    <> 
      <ScrollToTop />
      <Activity {...activityOne} />
      <Activity {...activityTwo} />
      <Activity {...activityThree} />
      <Activity {...activityFour} />
      
      
    </>
  );
};


export default ActivityPage;