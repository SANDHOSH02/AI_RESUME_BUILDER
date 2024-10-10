import React from 'react';
import { SignIn, UserButton } from '@clerk/clerk-react';

function SignInpage() {
  return (
    <div className='flex justify-center my-20 items-center'>
      <SignIn/>
      
    </div>
  );
}

export default SignInpage;
