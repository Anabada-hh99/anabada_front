import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/common/banner/Banner';
import Layout from '../components/common/Layout/Layout';

export default function PostDetail() {
  const { postId } = useParams();

  return (
    <Layout>
      <Banner page='User' />
    </Layout>
  );
}
