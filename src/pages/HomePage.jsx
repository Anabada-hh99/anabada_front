import React, { useState } from 'react';
import Banner from '../components/common/banner/Banner';
import Layout from '../components/common/Layout/Layout';
import Card from '../components/common/Card/Card';
import styled from 'styled-components';

const HomeBannerText = styled.span`
  color: var(--color-white);
  font-size: 100px;
  display: flex;
  justify-content: center;
  font-family: 'Nanum Brush Script', cursive;
  transition: all 300ms ease;

  z-index: 100;
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
  // const [slogan, setSlogan] = useState('아껴');
  const [query, setQuery] = useState('');

  return (
    <Layout>
      <Banner page='Home'>
        <HomeBannerText>
          아껴쓰는 세상, 모두와 함께 만들어갑니다.
        </HomeBannerText>
      </Banner>

      <main>
        <section>
          <HotItemText>현재 인기매물은?</HotItemText>
          <CardListBox>
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
          </CardListBox>
        </section>
      </main>
    </Layout>
  );
}
