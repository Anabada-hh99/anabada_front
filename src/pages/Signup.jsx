import React from 'react';
import Banner from '../components/common/banner/Banner';
import SignupForm from '../components/Signup/SignupForm';

export default function Signup() {
  return (
    <Banner page='Sign'>
      <SignupForm />
    </Banner>
  );
}
