import React from 'react';
import styled from 'styled-components';

export default function Cardbox() {
  return (
    <CardBox>
      <div>
        <ImgBox />
        <TextBox>
          <h2
            style={{
              display: 'block',
              'text-decoration': 'none',
              color: '#333',
              'text-overflow': 'ellipsis',
              'white-space': 'nowrap',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            A380B 바이크 슈퍼라이트 모델
          </h2>
          <h3>₩120,000</h3>
          <p>조회수 207회</p>
        </TextBox>
      </div>
    </CardBox>
  );
}

const ImgBox = styled.div`
  background: url('https://cdn.pixabay.com/photo/2017/07/09/07/14/shadow-2486373_960_720.jpg')
    no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;

  width: 260px;
  height: 260px;
`;

const CardBox = styled.div`
  font-family: 'Gowun Dodum', sans-serif;
  display: flex;

  margin-bottom: 30px;
`;

const TextBox = styled.div`
  width: 260px;
  overflow: hidden;
`;

// const TextLine = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;