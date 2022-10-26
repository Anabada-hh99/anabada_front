import React from 'react';
import Banner from '../components/common/banner/Banner';
import Layout from '../components/common/Layout/Layout';
import LoginForm from '../components/Login/LoginForm';

export default function Login(props) {
  return (
    <Layout>
      <Banner page='Sign'>
        <LoginForm />
      </Banner>
    </Layout>
  );
}
