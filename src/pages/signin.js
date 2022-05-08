import React from 'react';
import { useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import SignIn from '../components/Signin';


const SigninPage = () => {
  return (
    <> 
      <ScrollToTop />
      <SignIn />
      
      
    </>
  );
};

// function SigninPage() {

//   return(
//     <SignIn trigger={false}>
//       <SignIn />
//     </SignIn>
//   );
// }

export default SigninPage;