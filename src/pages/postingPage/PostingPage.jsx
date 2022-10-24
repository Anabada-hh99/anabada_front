import React, { useState } from 'react';
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

export default function Posting() {
  const [fileImage, setFileImage] = useState('');

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

  return (
    <Layout>
      <ProductUpload>
        <ImgBox>
          <input
            type='file'
            id='choosePhoto'
            name='choosePhoto'
            accept='image/*'
            style={{ display: 'none' }}
            onChange={onImageChangeHandler}
          />

          <ImgLabel htmlFor='choosePhoto'>이미지 등록</ImgLabel>
          {fileImage && <SampleImg alt='sample' src={fileImage} />}
        </ImgBox>

        <Column>
          {/* 상품 제목 입력 부분 */}
          <ProductTitle>
            제목<div style={{ color: '#FF3D00' }}>*</div>
            <TitleInput type='text' placeholder='상품 제목을 입력하세요.' />
          </ProductTitle>
          <ProductCategory>
            범주<div style={{ color: '#FF3D00' }}>*</div>
            <CategorySelect>
              <option value='스포츠'>스포츠</option>
              <option value='의류'>의류</option>
              <option value='식품'>식품</option>
              <option value='가전제품'>가전제품</option>
              <option value='뷰티'>뷰티</option>
              <option value='기타'>기타</option>
            </CategorySelect>
          </ProductCategory>
          {/* 가격 입력 부분 */}
          <ProductPrice>
            가격<div style={{ color: '#FF3D00' }}>*</div>
            <PriceInput type='number' placeholder='숫자만 입력해 주세요.' />
          </ProductPrice>

          {/* 설명 입력 부분 */}
          <ProductDesc>
            설명<div style={{ color: '#FF3D00' }}>*</div>
            <DescInput
              type='text'
              placeholder='구매자에게 필요한 정보를 꼭 포함해 주세요.'
            />
          </ProductDesc>
          <UploadButton>등록하기</UploadButton>
        </Column>
      </ProductUpload>
    </Layout>
  );
}
