import React from 'react';
import { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Activity from '../components/Activities/Activity';
import { activityOne, activityTwo, activityThree, activityFour, activityFive, activitySeven, activitySix, activityEight } from '../components/Activities/Data';

const ActivityPage = (props) => {
  return (
    <> 
      <ScrollToTop />
      <Activity {...activityOne} />
      <Activity {...activityTwo} />
      <Activity {...activityThree} />
      <Activity {...activityFour} />
      <Activity {...activityFive} />
      <Activity {...activitySix} />
      <Activity {...activitySeven} />
      <Activity {...activityEight} />
      
      
    </>
  );
};


export default ActivityPage;