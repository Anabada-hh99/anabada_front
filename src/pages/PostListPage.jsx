import React, { useRef, useState } from 'react';
import Banner from '../components/common/banner/Banner';
import Button from '../components/common/button/Button';
import Layout from '../components/common/Layout/Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CategorySet = styled.div`
  width: 1140px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: space-between;
`;

const SaleCheckBox = styled.div`
  background-color: var(--color-white);
  border-radius: 5px;
  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
  padding: 10px 64px;
  margin-top: 20px;
  font-family: 'Gowun Dodum', sans-serif;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NavBtn = styled.button`
  background-color: var(--color-dark-white);
  border-radius: 5px;
  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
  padding: 10px 64px;
  margin-top: 20px;
  margin-left: -200px;
  font-family: 'Gowun Dodum', sans-serif;

  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background-color: var(--color-sth-pink);
    color: var(--color-black);
  }
`;
const CheckInput = styled.input`
  margin-right: 20px;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const TradeText = styled.span`
  font-size: var(--font-very-large);
  font-weight: var(--weight-semi-bold);
  display: inline-block;
  margin-top: 100px;
  font-family: 'Gowun Dodum', sans-serif;
`;

export default function PostListPage(props) {
  const navigate = useNavigate();
  const categoryRef = useRef();
  const [salesOnly, setSalesOnly] = useState(false);
  const [category, setCategory] = useState(null);
  const onCheckChangeHandler = () => {
    setSalesOnly(!salesOnly);
  };
  const onBtnClickHandler = (e) => {
    for (let i = 0; i < 6; i++) {
      categoryRef.current.children[i].name = 'category';
    }
    if (category === e.target.value) {
      setCategory(null);
    } else {
      e.target.name = 'categoryActive';
      setCategory(e.target.value);
    }
  };

  return (
    <Layout>
      <Banner page='Trade'>
        <section style={{ zIndex: 100 }}>
          <CategorySet ref={categoryRef}>
            <Button type='category' value='스포츠' onClick={onBtnClickHandler}>
              스포츠
            </Button>
            <Button type='category' value='의류' onClick={onBtnClickHandler}>
              의류
            </Button>
            <Button type='category' value='식품' onClick={onBtnClickHandler}>
              식품
            </Button>
            <Button
              type='category'
              value='가전제품'
              onClick={onBtnClickHandler}
            >
              가전제품
            </Button>
            <Button type='category' value='뷰티' onClick={onBtnClickHandler}>
              뷰티
            </Button>
            <Button type='category' value='기타' onClick={onBtnClickHandler}>
              기타
            </Button>
            <SaleCheckBox>
              <CheckInput
                id='salesCheck'
                name='salesCheck'
                type='checkBox'
                onChange={onCheckChangeHandler}
              />
              <label htmlFor='salesCheck' style={{ cursor: 'pointer' }}>
                판매중인 게시글만 보기
              </label>
            </SaleCheckBox>
            <NavBtn
              onClick={() => {
                navigate('/posting');
              }}
            >
              게시글 작성하기
            </NavBtn>
          </CategorySet>
        </section>
      </Banner>
      <section>
        <TradeText>
          {category
            ? salesOnly
              ? `판매중인 ${category} 중고 매물`
              : `모든 ${category} 중고 매물`
            : salesOnly
            ? '판매중인 중고 매물'
            : '모든 중고 매물'}
        </TradeText>
      </section>
    </Layout>
  );
}
