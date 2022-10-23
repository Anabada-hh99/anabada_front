import React from 'react';
import {
  HeaderBox,
  Logo,
  Trade,
  Login,
  SignUp,
  HeaderSection,
} from './HeaderStyle';

const Header = () => {
  return (
    <HeaderBox>
      <HeaderSection>
        <Logo />
        <Trade>중고거래</Trade>
      </HeaderSection>
      <HeaderSection>
        <Login>로그인</Login>
        <SignUp>회원가입</SignUp>
      </HeaderSection>
    </HeaderBox>
  );
};

export default Header;
