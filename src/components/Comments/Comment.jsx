import React, { useState } from 'react';
import Button from '../common/button/Button';
import Profile from '../common/profile/Profile';
import * as CommentST from './CommentStyle';
import placeholderPath from '../../img/profile_placeholder.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  __deleteComment,
  __updateComment,
} from '../../redux/modules/CommentSlice';
import { getCookieToken } from '../../storage/Cookie';
import useInput from '../../hooks/useInput';

export default function Comment({ index, comment }) {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { accessToken } = useSelector((state) => state.token);
  const refreshToken = getCookieToken();

  const [contentInput, setContent, contentChangeHandler] = useInput(
    comment.content
  );

  const toggleEdit = () => {
    setContent(comment.content);
    setIsEdit(!isEdit);
  };
  const onDeleteHandler = () => {
    dispatch(
      __deleteComment({
        Authorization: accessToken,
        refresh_token: refreshToken,
        commentId: comment.commentId,
      })
    );
  };
  const onUpdateHandler = () => {
    //console.log({ ...comment, content: contentInput });
    dispatch(
      __updateComment({
        Authorization: accessToken,
        refresh_token: refreshToken,
        body: { ...comment, content: contentInput },
      })
    );
    setIsEdit(false);
  };

  const InEditBtnBox = () => {
    return (
      <CommentST.BtnBox>
        <Button type='Comment' onClick={onUpdateHandler}>
          완료
        </Button>
        <Button type='Comment' onClick={toggleEdit}>
          취소
        </Button>
      </CommentST.BtnBox>
    );
  };
  const OutEditBtnBox = () => {
    return (
      <CommentST.BtnBox>
        <Button type='Comment' onClick={toggleEdit}>
          수정
        </Button>
        <Button type='Comment' onClick={onDeleteHandler}>
          삭제
        </Button>
      </CommentST.BtnBox>
    );
  };

  return (
    <>
      <CommentST.Box index={index}>
        {(index + 1) % 2 === 0 ? (
          isEdit ? (
            <>
              <InEditBtnBox />
              <InEditInfoBox
                contentInput={contentInput}
                contentChangeHandler={contentChangeHandler}
                comment={comment}
                index={index}
              />
              <Profile width='65px' src={placeholderPath} />
            </>
          ) : (
            <>
              <OutEditBtnBox />
              <OutEditInfoBox comment={comment} index={index} />
              <Profile width='65px' src={placeholderPath} />
            </>
          )
        ) : isEdit ? (
          <>
            <Profile width='65px' src={placeholderPath} />
            <InEditInfoBox
              contentInput={contentInput}
              contentChangeHandler={contentChangeHandler}
              comment={comment}
              index={index}
            />
            <InEditBtnBox />
          </>
        ) : (
          <>
            <Profile width='65px' src={placeholderPath} />
            <OutEditInfoBox comment={comment} index={index} />
            <OutEditBtnBox />
          </>
        )}
      </CommentST.Box>
      <CommentST.Hr />
    </>
  );
}

const InEditInfoBox = ({
  contentInput,
  contentChangeHandler,
  comment,
  index,
}) => {
  return (
    <CommentST.InfoBox index={index}>
      <CommentST.Input
        type='text'
        value={contentInput}
        onChange={contentChangeHandler}
      />
    </CommentST.InfoBox>
  );
};

const OutEditInfoBox = ({ comment, index }) => {
  return (
    <CommentST.InfoBox index={index}>
      <h3 style={{ margin: '0' }}>{comment.nickname}</h3>
      <h2 style={{ margin: '0' }}>{comment.content}</h2>
    </CommentST.InfoBox>
  );
};
