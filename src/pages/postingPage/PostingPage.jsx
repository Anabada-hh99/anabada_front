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

          <ImgLabel htmlFor='choosePhoto'>이미지 등록</ImgLabel>
          {fileImage && <SampleImg alt='sample' src={fileImage} />}
        </ImgBox>

        <Column>
          {/* 상품 제목 입력 부분 */}
          <ProductTitle>
            제목<div style={{ color: '#FF3D00' }}>*</div>
            <TitleInput
              type='text'
              name='title'
              value={postInfo.title}
              onChange={postChangeHandler}
              placeholder='상품 제목을 입력하세요.'
            />
          </ProductTitle>
          <ProductCategory>
            범주<div style={{ color: '#FF3D00' }}>*</div>
            <CategorySelect
              name='category'
              value={postInfo.category}
              onChange={postChangeHandler}
            >
              <option value='SPORT'>스포츠</option>
              <option value='CLOTH'>의류</option>
              <option value='FOOD'>식품</option>
              <option value='HOME'>가전제품</option>
              <option value='BEAUTY'>뷰티</option>
              <option value='ETC'>기타</option>
            </CategorySelect>
          </ProductCategory>
          {/* 가격 입력 부분 */}
          <ProductPrice>
            가격<div style={{ color: '#FF3D00' }}>*</div>
            <PriceInput
              type='number'
              name='price'
              value={postInfo.price}
              onChange={postChangeHandler}
              placeholder='숫자만 입력해 주세요.'
            />
          </ProductPrice>

          {/* 설명 입력 부분 */}
          <ProductDesc>
            설명<div style={{ color: '#FF3D00' }}>*</div>
            <DescInput
              type='text'
              name='content'
              value={postInfo.content}
              onChange={postChangeHandler}
              placeholder='구매자에게 필요한 정보를 꼭 포함해 주세요.'
            />
          </ProductDesc>
          <UploadButton>등록하기</UploadButton>
        </Column>
      </ProductUpload>
    </Layout>
  );
}
