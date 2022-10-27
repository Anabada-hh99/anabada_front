import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  __getComments,
  __createComment,
} from '../../redux/modules/CommentSlice';
import Button from '../common/button/Button';
import Comment from './Comment';
import * as CommentsST from './Comments.style';
import { getCookieToken } from '../../storage/Cookie';
import useInput from '../../hooks/useInput';

export default function Comments({ postId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment.comments);
  const [contentInput, setContent, contentHandler] = useInput('');
  const { accessToken } = useSelector((state) => state.token);
  const refreshToken = getCookieToken();
  const argPostId = parseInt(postId);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __createComment({
        Authorization: accessToken,
        refresh_token: refreshToken,
        body: { postId: Number(postId), content: contentInput },
      })
    );
    setContent('');
  };
  useEffect(() => {
    dispatch(__getComments(postId));
  }, [postId]);

  //console.log({ postId: argPostId, content: contentInput });
  return (
    <>
      <CommentsST.Form onSubmit={onSubmitHandler}>
        <CommentsST.Input value={contentInput} onChange={contentHandler} />
        <Button type='CommentSubmit'>등록</Button>
      </CommentsST.Form>

      <CommentsST.Box>
        {comments.data !== [] ? (
          comments.data.map((comment, index) => (
            <Comment key={comment.commentId} index={index} comment={comment} />
          ))
        ) : (
          <></>
        )}
      </CommentsST.Box>
    </>
  );
}
