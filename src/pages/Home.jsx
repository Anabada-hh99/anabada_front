import React, { useState } from 'react';
import Banner from '../components/common/banner/Banner';
import styled from 'styled-components';

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
  //const wordArr = ['아껴', '나눠', '바꿔', '다시'];
  const [slogan, setSlogan] = useState('아껴');

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
    </>
  );
}
