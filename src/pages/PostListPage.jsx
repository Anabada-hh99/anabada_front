import React, { useEffect, useRef, useState } from 'react';
import { CLEAR_POSTS, __getPosts } from '../redux/modules/PostSlice';
import Banner from '../components/common/banner/Banner';
import Button from '../components/common/button/Button';
import Layout from '../components/common/Layout/Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/common/Card/Card';

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

const CardListBox = styled.div`
  width: 1164px;
  margin-top: 50px;
  margin-bottom: 100px;

  display: flex;
  flex-flow: row wrap;
  justify-content: left;
`;

export default function PostListPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoryRef = useRef();
  const [salesOnly, setSalesOnly] = useState(false);
  let prevSales = false;
  const [category, setCategory] = useState(null);
  let prevCategory = null;
  const obsRef = useRef(null);
  const [page, setPage] = useState(0);

  const onCheckChangeHandler = () => {
    setPage(0);
    setSalesOnly(!salesOnly);
  };

  const onBtnClickHandler = (e) => {
    setPage(0);
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

  //let page = 0;
  let prevPage = 0;
  let query = '';
  // const [query, setQuery] = useState('');

  const dynamicQuery = () => {
    if (category) {
      if (salesOnly) {
        query = `/c?isSaled=true&category=${category}&page=${page}`;
      } else {
        query = `/c?isSaled=false&category=${category}&page=${page}`;
      }
    } else {
      if (salesOnly) {
        query = `?isSaled=true&page=${page}`;
      } else {
        query = `?isSaled=false&page=${page}`;
      }
    }
  };

  useEffect(() => {
    if (prevPage !== page) {
      // 페이지 변경시
      //console.log('page change');
      prevPage = page;
      dynamicQuery();
      dispatch(__getPosts(query));
    } else if (prevCategory !== category || prevSales !== salesOnly) {
      //카테고리,판매여부 변경시
      //console.log('category OR salesOnly change');
      prevCategory = category;
      prevSales = salesOnly;
      dispatch(CLEAR_POSTS());
      dynamicQuery();
      dispatch(__getPosts(query));
    } else {
      // 마운트시
      //console.log('MOUNT!');
      dispatch(CLEAR_POSTS());
      dynamicQuery();
      //console.log(`This is my query: ${query}`);
      dispatch(__getPosts(query));
    }
  }, [page, category, salesOnly]);

  const _onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      //console.log('intersecting!!');
      setPage((prevent) => prevent + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(_onIntersect, { threshold: 1 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const posts = useSelector((state) => state.post.posts);

  return (
    <Layout>
      <Banner page='Trade'>
        <section style={{ zIndex: 100 }}>
          <CategorySet ref={categoryRef}>
            <Button type='category' value='SPORT' onClick={onBtnClickHandler}>
              스포츠
            </Button>
            <Button type='category' value='CLOTH' onClick={onBtnClickHandler}>
              의류
            </Button>
            <Button type='category' value='FOOD' onClick={onBtnClickHandler}>
              식품
            </Button>
            <Button type='category' value='HOME' onClick={onBtnClickHandler}>
              가전제품
            </Button>
            <Button type='category' value='BEAUTY' onClick={onBtnClickHandler}>
              뷰티
            </Button>
            <Button type='category' value='ETC' onClick={onBtnClickHandler}>
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
        <CardListBox>
          {posts.data.map ? (
            posts.data.map((post, index) => (
              <Card key={post.id} index={index} post={post} />
            ))
          ) : (
            <></>
          )}
          <div ref={obsRef} style={{ width: '50px' }}></div>
        </CardListBox>
      </section>
    </Layout>
  );
}
