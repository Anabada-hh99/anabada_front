import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/common/Layout/Layout';
import {
  ImgBox,
  SampleImg,
  ImgLabel,
  ProductTitle,
  TitleInput,
  ProductCategory,
  CategorySelect,
  ProductPrice,
  PriceInput,
  ProductDesc,
  DescInput,
  ProductUpload,
  Column,
  UploadButton,
} from './PostingPageStyle';
import useMultipleInput from '../../hooks/useMultipleInput';
import { __createPost } from '../../redux/modules/PostSlice';
import { useNavigate } from 'react-router-dom';
import { getCookieToken } from '../../storage/Cookie';

export default function Posting() {
  const [fileImage, setFileImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveFileImage = (file) => {
    setFileImage(URL.createObjectURL(file));
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage('');
  };

  const onImageChangeHandler = (e) => {
    saveFileImage(e.target.files[0]);
  };

  const [postInfo, setPostInfo, postChangeHandler] = useMultipleInput({
    title: '',
    content: '',
    price: 0,
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/06/30/11/05/gift-box-2458012_960_720.jpg',
    category: 'ETC',
    state: true,
  });

  const { accessToken } = useSelector((state) => state.token);
  const refreshToken = getCookieToken();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __createPost({
        Authorization: accessToken,
        refresh_token: refreshToken,
        body: postInfo,
      })
    );
    navigate('/trade');
  };

  //console.log(postInfo);

  return (
    <Layout>
      <ProductUpload onSubmit={onSubmitHandler}>
        <ImgBox>
          <input
            type='file'
            id='choosePhoto'
            name='choosePhoto'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={onImageChangeHandler}
            value={fileImage}
          />

          <ImgLabel htmlFor='choosePhoto'>????????? ??????</ImgLabel>
          {fileImage && <SampleImg alt='sample' src={fileImage} />}
        </ImgBox>

        <Column>
          {/* ?????? ?????? ?????? ?????? */}
          <ProductTitle>
            ??????<div style={{ color: '#FF3D00' }}>*</div>
            <TitleInput
              type='text'
              name='title'
              value={postInfo.title}
              onChange={postChangeHandler}
              placeholder='?????? ????????? ???????????????.'
            />
          </ProductTitle>
          <ProductCategory>
            ??????<div style={{ color: '#FF3D00' }}>*</div>
            <CategorySelect
              name='category'
              value={postInfo.category}
              onChange={postChangeHandler}
            >
              <option value='SPORT'>?????????</option>
              <option value='CLOTH'>??????</option>
              <option value='FOOD'>??????</option>
              <option value='HOME'>????????????</option>
              <option value='BEAUTY'>??????</option>
              <option value='ETC'>??????</option>
            </CategorySelect>
          </ProductCategory>
          {/* ?????? ?????? ?????? */}
          <ProductPrice>
            ??????<div style={{ color: '#FF3D00' }}>*</div>
            <PriceInput
              type='number'
              name='price'
              value={postInfo.price}
              onChange={postChangeHandler}
              placeholder='????????? ????????? ?????????.'
            />
          </ProductPrice>

          {/* ?????? ?????? ?????? */}
          <ProductDesc>
            ??????<div style={{ color: '#FF3D00' }}>*</div>
            <DescInput
              type='text'
              name='content'
              value={postInfo.content}
              onChange={postChangeHandler}
              placeholder='??????????????? ????????? ????????? ??? ????????? ?????????.'
            />
          </ProductDesc>
          <UploadButton>????????????</UploadButton>
        </Column>
      </ProductUpload>
    </Layout>
  );
}
