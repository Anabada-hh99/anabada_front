import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../components/common/banner/Banner';
import Layout from '../components/common/Layout/Layout';
import Post from '../components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deletePost,
  __getPost,
  __updatePost,
} from '../redux/modules/PostSlice';
import Comments from '../components/Comments/Comments';

export default function PostDetail() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const post = useSelector((state) => state.post.post);
  const [ren, setRen] = useState(false);

  useEffect(() => {
    dispatch(__getPost(postId));
  }, [ren, postId]);

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
          <Post setRen={setRen} post={post.data} />
        </section>
      </Banner>

      <section>
        <Comments postId={postId} />
      </section>
    </Layout>
  );
}
