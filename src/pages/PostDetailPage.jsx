import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/common/banner/Banner';
import Layout from '../components/common/Layout/Layout';
import styled from 'styled-components';

export default function PostDetail(props) {
  const { postId } = useParams();
  console.log(postId);
  return (
    <Layout>
      <Banner page='User' />
    </Layout>
  );
}
