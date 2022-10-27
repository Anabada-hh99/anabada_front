import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Card(props) {
  const navigate = useNavigate();
  const priceTag = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <CardBox index={props.index}>
      <SoldOut isSold={!props.post.state}>판매완료!</SoldOut>
      <div>
        <ImgBox
          url={props.post.imageUrl}
          onClick={() => {
            navigate(`/trade/${props.post.id}`);
          }}
        />
        <TextBox>
          <h2
            style={{
              display: 'block',
              textDecoration: 'none',
              color: '#333',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            onClick={() => {
              navigate(`/trade/${props.post.id}`);
            }}
          >
            {props.post.title}
          </h2>
          <h3>₩{priceTag(props.post.price)}</h3>
          <p>조회수 {props.post.count}회</p>
        </TextBox>
      </div>
    </CardBox>
  );
}

const ImgBox = styled.div`
  background-color: var(--color-dark-white);
  background: url(${(props) =>
      props.url
        ? props.url
        : 'https://cdn.pixabay.com/photo/2017/07/09/07/14/shadow-2486373_960_720.jpg'})
    no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;

  width: 260px;
  height: 260px;

  overflow: hidden;
  border-radius: 5px;
`;

const CardBox = styled.div`
  position: relative;
  font-family: 'Gowun Dodum', sans-serif;
  display: flex;
  margin-bottom: 30px;
  margin-right: ${(props) => ((props.index + 1) % 4 === 0 ? '0px' : '41px')};
`;

const TextBox = styled.div`
  width: 260px;
  overflow: hidden;
`;

const SoldOut = styled.span`
  position: absolute;
  background-color: #f44236;
  font-family: 'Gowun Dodum', sans-serif;
  color: var(--color-white);
  padding: 10px 20px;
  display: ${(props) => (props.isSold ? 'default' : 'none')};

  border-radius: 5px;
  top: -10px;
  right: -10px;
`;
