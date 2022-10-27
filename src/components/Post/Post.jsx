import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../common/button/Button';
import { getCookieToken } from '../../storage/Cookie';
import * as PostST from './PostStyle';
import {
  __getPost,
  CLEAR_POST,
  __deletePost,
  __updatePost,
  CLEAR_POSTS,
} from '../../redux/modules/PostSlice';

const InEditBox = ({ post, toggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [content, setContentInput] = useState(post.content);
  const [state, setStateInput] = useState(post.state);
  const [price, setPriceInput] = useState(post.price);
  const { accessToken } = useSelector((state) => state.token);
  const refreshToken = getCookieToken();
  const onContentChangeHandler = (e) => {
    setContentInput(e.target.value);
  };
  const onStateChangeHandler = (e) => {
    if (e.target.value === 'false') {
      setStateInput(false);
    } else {
      setStateInput(true);
    }
  };
  const onPriceChangeHandler = (e) => {
    setPriceInput(parseInt(e.target.value));
  };

  const onUpdateHandler = () => {
    dispatch(
      __updatePost({
        Authorization: accessToken,
        refresh_token: refreshToken,
        body: {
          ...post,
          content,
          price,
          state,
        },
        postId: post.id,
      })
    );
    toggle();
    dispatch(CLEAR_POSTS());
    toggle();
    // navigate(`/trade/${post.id}`);
  };

  // console.log({
  //   ...post,
  //   content,
  //   price,
  //   state,
  // });
  return (
    <>
      <PostST.InfoBox>
        <PostST.InfoLine>
          <h1 style={{ margin: '0 0' }}>{post.title}</h1>
          <p style={{ transform: 'translateY(36px)', marginLeft: '10px' }}>
            / {post.category}
          </p>
        </PostST.InfoLine>

        <PostST.InfoLine>
          <p style={{ marginRight: '20px' }}>
            {post.modifiedAt ? post.modifiedAt.slice(0, 10) : post.modifiedAt}
          </p>
          <p style={{ marginRight: '20%' }}>작성자: {post.nickname}</p>
          <p>조회수 {post.count}회</p>
        </PostST.InfoLine>

        <PostST.InfoLine style={{ height: '192px', marginRight: '90px' }}>
          <PostST.ContentTextArea
            name='content'
            value={content}
            onChange={onContentChangeHandler}
          />
        </PostST.InfoLine>

        <PostST.InfoLine style={{ alignItems: 'center', marginTop: '15px' }}>
          <PostST.SalesSelect
            name='state'
            value={state}
            onChange={onStateChangeHandler}
          >
            <option value={true}>판매 중</option>
            <option value={false}>판매 완료</option>
          </PostST.SalesSelect>
          <PostST.PriceBox>
            ₩
            <PostST.PriceInput
              type='number'
              name='price'
              value={price}
              onChange={onPriceChangeHandler}
            />
          </PostST.PriceBox>
        </PostST.InfoLine>
      </PostST.InfoBox>
      <PostST.BtnBox>
        <Button type='post' onClick={onUpdateHandler}>
          <i className='fa-solid fa-circle-check'></i>
        </Button>
        <Button
          type='post'
          onClick={() => {
            toggle();
            setContentInput(post.content);
            setStateInput(post.state);
            setPriceInput(post.price);
          }}
        >
          <i className='fa-solid fa-delete-left'></i>
        </Button>
      </PostST.BtnBox>
    </>
  );
};
const OutEditBox = ({ post, toggle }) => {
  const [isPostDisabled, setIsPostDisabled] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { accessToken } = useSelector((state) => state.token);
  const refreshToken = getCookieToken();
  const priceTag = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const onDeleteHandler = () => {
    console.log('Then.. Lets try delete!');
    dispatch(
      __deletePost({
        Authorization: accessToken,
        refresh_token: refreshToken,
        postId: post.id,
      })
    );
    //댓글삭제도 추가해야 함
    navigate('/trade');
  };

  useEffect(() => {
    if (post.memberId !== undefined && user.memberId !== null) {
      if (post.memberId === user.memberId) {
        setIsPostDisabled(false);
      } else {
        setIsPostDisabled(true);
      }
    }
  }, [post.memberId, user.memberId]);

  //console.log(post.memberId, user.memberId);
  return (
    <>
      <PostST.InfoBox>
        <PostST.InfoLine>
          <h1 style={{ margin: '0 0' }}>{post.title}</h1>
          <p style={{ transform: 'translateY(36px)', marginLeft: '10px' }}>
            / {post.category}
          </p>
        </PostST.InfoLine>

        <PostST.InfoLine>
          <p style={{ marginRight: '20px' }}>
            {post.modifiedAt ? post.modifiedAt.slice(0, 10) : post.modifiedAt}
          </p>
          <p style={{ marginRight: '20%' }}>작성자: {post.nickname}</p>
          <p>조회수 {post.count}회</p>
        </PostST.InfoLine>

        <PostST.InfoLine style={{ height: '192px', marginRight: '90px' }}>
          <h3>{post.content}</h3>
        </PostST.InfoLine>

        <PostST.InfoLine>
          <h2 style={{ marginRight: '30px' }}>
            {post.state ? '판매 중' : '판매 완료'}
          </h2>
          <h2>₩{post.price ? priceTag(post.price) : post.price}</h2>
        </PostST.InfoLine>
      </PostST.InfoBox>
      <PostST.BtnBox>
        <Button type='post' disabled={isPostDisabled} onClick={toggle}>
          <i className='fa-solid fa-hammer'></i>
        </Button>
        <Button type='post' disabled={isPostDisabled} onClick={onDeleteHandler}>
          <i className='fa-solid fa-trash'></i>
        </Button>
      </PostST.BtnBox>
    </>
  );
};

export default function Post({ setRen, post }) {
  const [isPostEdit, setIsPostEdit] = useState(false);

  const togglePostEdit = () => {
    setIsPostEdit(!isPostEdit);
    setRen((prev) => !prev);
  };

  return (
    <PostST.Box>
      <PostST.ImgBox>
        <PostST.MainImg src={post.imageUrl} />
      </PostST.ImgBox>
      {isPostEdit ? (
        <InEditBox post={post} toggle={togglePostEdit} />
      ) : (
        <OutEditBox post={post} toggle={togglePostEdit} />
      )}
    </PostST.Box>
  );
}
