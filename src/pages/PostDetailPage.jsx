import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/common/banner/Banner';
import Button from '../components/common/button/Button';
import Layout from '../components/common/Layout/Layout';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { __getPost } from '../redux/modules/PostSlice';

export default function PostDetail() {
  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(__getPost(postId));
  }, [postId]);
  const post = useSelector((state) => state.post.post);

  return (
    <Layout>
      <Banner page='Detail'>
        <section
          style={{
            zIndex: '100',
            backgroundColor: 'var(--color-light-black)',
            borderRadius: '10px',
            padding: '40px 50px',
          }}
        >
          <DetailBox>
            <ImgBox>
              <MainImg src={post.data.imageUrl} />
            </ImgBox>
            <InfoBox>
              <InfoLine>
                <h1 style={{ margin: '0 0' }}>{post.data.title}</h1>
                <p
                  style={{ transform: 'translateY(36px)', marginLeft: '10px' }}
                >
                  / {post.data.category}
                </p>
              </InfoLine>
              <InfoLine>
                <p style={{ marginRight: '20px' }}>
                  {post.data.modifiedAt.slice(0, 10)}
                </p>
                <p style={{ marginRight: '20%' }}>
                  작성자: {post.data.nickname}
                </p>
                <p>조회수 {post.data.count}회</p>
              </InfoLine>
              <h3>{post.data.content}</h3>
            </InfoBox>
            <BtnBox>
              <Button type='post'>
                <i className='fa-solid fa-hammer'></i>
              </Button>
              <Button type='post'>
                <i className='fa-solid fa-trash'></i>
              </Button>
            </BtnBox>
          </DetailBox>
        </section>
      </Banner>

      <section>
        <CommentsBox></CommentsBox>
      </section>
    </Layout>
  );
}

const DetailBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
`;

const ImgBox = styled.div`
  background-color: var(--color-dark-white);
  border-radius: 5px;
  width: 350px;
  height: 350px;
  overflow: hidden;
  margin-right: 50px;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoBox = styled.div`
  width: 470px;
  height: 350px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: left;

  font-family: 'Gowun Dodum', sans-serif;
  color: var(--color-dark-white);

  margin-right: 200px;
`;

const InfoLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const BtnBox = styled.div`
  height: 350px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;
const CommentsBox = styled.div``;
