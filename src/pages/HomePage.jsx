import React, { useEffect, useState } from 'react';
import Banner from '../components/common/banner/Banner';
import Layout from '../components/common/Layout/Layout';
import Card from '../components/common/Card/Card';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __getPosts, CLEAR_POSTS } from '../redux/modules/PostSlice';

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
  const [slogan, setSlogan] = useState('아껴');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CLEAR_POSTS());
    dispatch(__getPosts('/p'));
  }, []);
  const posts = useSelector((state) => state.post.posts);

  return (
    <Layout>
      <Banner page='Home'>
        <HomeBannerText>
          {slogan}쓰는 세상, 모두와 함께 만들어갑니다.
        </HomeBannerText>
      </Banner>

      <main>
        <section>
          <HotItemText>TOP 4 - 현재 인기매물은?</HotItemText>
          <CardListBox>
            {posts.data.map((post, index) => (
              <Card key={post.id} index={index} post={post} />
            ))}
          </CardListBox>
        </section>
      </main>
    </Layout>
  );
}
