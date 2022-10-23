import React, { useState } from 'react';
import Banner from '../components/common/banner/Banner';
import Layout from '../components/common/Layout/Layout';
import Card from '../components/common/Card/Card';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookieToken, removeCookieToken } from '../storage/Cookie';
import { DELETE_TOKEN } from '../redux/modules/AuthSlice';
import { logoutUser } from '../shared/api/Users';

const HomeBannerText = styled.span`
  color: var(--color-white);
  font-size: 100px;
  display: flex;
  justify-content: center;
  font-family: 'Nanum Brush Script', cursive;
  transition: all 300ms ease;
`;

const HotItemText = styled.span`
  font-size: var(--font-very-large);
  font-weight: var(--weight-semi-bold);
  display: inline-block;
  margin-top: 100px;
  font-family: 'Gowun Dodum', sans-serif;
`;

const CardListBox = styled.div`
  width: 1164px;
  margin-top: 50px;
  margin-bottom: 100px;

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
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
    <Layout>
      <Banner page='Home'>
        <HomeBannerText>
          {slogan}쓰는 세상, 모두와 함께 만들어갑니다.
        </HomeBannerText>
      </Banner>

      <main>
        <section>
          <HotItemText>현재 인기매물은?</HotItemText>
          <CardListBox>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardListBox>
        </section>
      </main>

      <div
        style={{
          marginTop: '100px',
          fontFamily: 'Gowun Dodum',
          display: 'none',
        }}
      >
        {!refreshToken && !accessToken ? (
          <h2>토큰 모두 삭제완료</h2>
        ) : (
          <h2>토큰 남아있음</h2>
        )}
        {!refreshToken ? <h2>refresh 토큰없음</h2> : <h2>refresh 토큰있음</h2>}
        {!accessToken ? <h2>access 토큰없음</h2> : <h2>access 토큰있음</h2>}
      </div>
    </Layout>
  );
}
