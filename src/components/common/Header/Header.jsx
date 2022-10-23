import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookieToken, removeCookieToken } from '../../../storage/Cookie';
import { DELETE_TOKEN } from '../../../redux/modules/AuthSlice';
import { DELETE_USER } from '../../../redux/modules/UserSlice';
import { logoutUser } from '../../../shared/api/Users';
import {
  HeaderBox,
  HeaderContainer,
  Logo,
  Trade,
  UserNav,
  Nickname,
  HeaderSection,
} from './HeaderStyle';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.token);
  const { nickname } = useSelector((state) => state.user);
  const refreshToken = getCookieToken();

  async function logout() {
    const data = await logoutUser({
      authorization: accessToken,
      refresh_token: refreshToken,
    });
    //console.log(data);
    if (data.status) {
      console.log('logout Success!');
      dispatch(DELETE_TOKEN());
      dispatch(DELETE_USER());
      removeCookieToken();
      return navigate('/');
    } else {
      window.location.reload();
    }
  }

  console.log(nickname);
  const SectionForLoggedIn = () => {
    return (
      <HeaderSection>
        <Nickname>{nickname} 님</Nickname>
        <UserNav
          onClick={() => {
            logout();
            navigate('/');
          }}
        >
          로그아웃
        </UserNav>
      </HeaderSection>
    );
  };
  const SectionForLoggedOut = () => {
    return (
      <HeaderSection>
        <UserNav
          onClick={() => {
            navigate('/login');
          }}
        >
          로그인
        </UserNav>
        <UserNav
          onClick={() => {
            navigate('/signup');
          }}
        >
          회원가입
        </UserNav>
      </HeaderSection>
    );
  };

  return (
    <HeaderBox>
      <HeaderContainer>
        <HeaderSection>
          <Logo
            onClick={() => {
              navigate('/');
            }}
          />
          <Trade
            onClick={() => {
              navigate('/trade');
            }}
          >
            중고거래
          </Trade>
        </HeaderSection>
        {accessToken || refreshToken ? (
          <SectionForLoggedIn />
        ) : (
          <SectionForLoggedOut />
        )}
      </HeaderContainer>
    </HeaderBox>
  );
};

export default Header;
