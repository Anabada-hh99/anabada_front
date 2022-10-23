import React, { useState } from 'react';
import Banner from '../components/common/banner/Banner';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookieToken, removeCookieToken } from '../storage/Cookie';
import { DELETE_TOKEN } from '../redux/modules/AuthSlice';
import { logoutUser } from '../shared/api/Users';

const HomeBannerText = styled.span`
  color: var(--color-white);
  font-size: var(--font-large);
  display: flex;
  justify-content: center;

  transition: all 300ms ease;
`;

const HotItemText = styled.span`
  font-size: var(--font-very-large);
  font-weight: var(--weight-semi-bold);
  display: inline-block;
  margin-top: 100px;
`;

export default function Home(props) {
  const [slogan, setSlogan] = useState('아껴');
  const { accessToken } = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const refreshToken = getCookieToken();

  async function logout() {
    const data = await logoutUser({
      authorization: accessToken,
      refresh_token: refreshToken,
    });
    //console.log(data);
    if (data.status) {
      console.log('Im here!');
      dispatch(DELETE_TOKEN());
      removeCookieToken();
      return navigate('/');
    } else {
      window.location.reload();
    }
  }

  return (
    <>
      <Banner page='Home'>
        <HomeBannerText>
          {slogan}쓰는 세상, 모두와 함께 만들어갑니다.
        </HomeBannerText>
      </Banner>
      <section>
        <HotItemText>현재 인기매물은?</HotItemText>
      </section>
      <button style={{ fontSize: '100px' }} onClick={logout}>
        로그아웃!!
      </button>
      {!refreshToken && !accessToken ? <h2>토큰없음</h2> : <h2>토큰있음</h2>}
      {!refreshToken ? <h2>refresh토큰없음</h2> : <h2>refresh토큰있음</h2>}
      {!accessToken ? <h2>access토큰없음</h2> : <h2>access토큰있음</h2>}
    </>
  );
}
