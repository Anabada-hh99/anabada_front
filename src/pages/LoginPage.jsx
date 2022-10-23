import React from 'react';
import Banner from '../components/common/banner/Banner';
import LoginForm from '../components/Login/LoginForm';
import styled from 'styled-components';

export default function Login(props) {
  return (
    <Banner page='Sign'>
      <LoginForm />
    </Banner>
  );
}
