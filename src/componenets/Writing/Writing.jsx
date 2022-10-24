import React from 'react';
import { useRef } from 'react';
import {
  ImgUpload,
  PlusButton,
  ProductTitle,
  TitleInput,
  ProductPrice,
  PriceInput,
  ProductDesc,
  DescInput,
  ProductUpload,
  Column,
  UploadButton,
} from './WritingStyle';

const Writing = () => {
  const photoInput = useRef();

  const handleClick = () => {
    photoInput.current.click();
  };

  return (
    <ProductUpload>
      {/* 이미지 업로드 부분 */}
      <input
        type="file"
        accept="image/*"
        ref={photoInput}
        style={{ display: 'none' }}
      />
      <ImgUpload onClick={handleClick}>
        <p>
          <PlusButton>+</PlusButton>
        </p>
        이미지 등록
      </ImgUpload>

      {/* 상품 제목 입력 부분 */}
      <Column>
        <ProductTitle>
          제목<div style={{ color: '#FF3D00' }}>*</div>
          <TitleInput type="text" placeholder="상품 제목을 입력하세요." />
        </ProductTitle>

        {/* 가격 입력 부분 */}
        <ProductPrice>
          가격<div style={{ color: '#FF3D00' }}>*</div>
          <PriceInput type="text" placeholder="숫자만 입력해 주세요." />
        </ProductPrice>

        {/* 설명 입력 부분 */}
        <ProductDesc>
          설명<div style={{ color: '#FF3D00' }}>*</div>
          <DescInput
            type="text"
            placeholder="구매자에게 필요한 정보를 꼭 포함해 주세요."
          />
        </ProductDesc>
        <UploadButton>등록하기</UploadButton>
      </Column>
    </ProductUpload>
  );
};

export default Writing;
