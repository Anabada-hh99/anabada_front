import styled from 'styled-components';

export const Sign = styled.button`
  background-color: var(--color-white);
  border-radius: 5px;
  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
  padding: 10px 64px;
  font-family: 'Gowun Dodum', sans-serif;
`;

export const Category = styled.button`
  border-radius: 10px;
  width: 300px;
  font-size: var(--font-large);
  font-weight: var(--weight-bold);
  padding: 10px 0;
  margin-bottom: 10px;
  font-family: 'Gowun Dodum', sans-serif;
`;

export const Post = styled.button`
  background-color: var(--color-white);
  border-radius: 5px;
  font-size: 80px;
  font-weight: var(--weight-bold);
  width: 150px;
  height: 150px;
  &:hover {
    background-color: var(--color-light-orange);
  }
  &:disabled {
    background-color: var(--color-dark-white);
    cursor: default;
  }
`;

export const CommentSubmit = styled.button`
  background-color: white;
  border-radius: 5px;

  height: 100%;
  width: 10%;

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  font-family: 'Gowun Dodum', sans-serif;
  &:hover {
    background-color: var(--color-sth-pink);
  }
  &:disabled {
    background-color: var(--color-dark-white);
    cursor: default;
  }
`;

export const Comment = styled.button`
  background-color: white;
  border-radius: 5px;
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  font-family: 'Gowun Dodum', sans-serif;
  padding: 10px 20px;
  &:disabled {
    background-color: var(--color-dark-white);
    cursor: default;
  }
`;
