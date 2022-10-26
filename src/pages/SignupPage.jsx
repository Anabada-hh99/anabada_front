import React from 'react';
import Banner from '../components/common/banner/Banner';
import Layout from '../components/common/Layout/Layout';
import SignupForm from '../components/Signup/SignupForm';

export default function Signup() {
  return (
    <Layout>
      <Banner page='Sign'>
        <SignupForm />
      </Banner>
    </Layout>
  );
}
