import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Box = styled.div`
  background-color: var(--color-light-black);
  border-radius: 15px;
  box-shadow: 5px 5px 11px 4px rgba(0, 0, 0, 0.76);
  padding: 70px 70px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
export const InputSet = styled.div`
  background-color: var(--color-black);
  border-radius: 5px;
  width: 500px;
  height: 70px;

  padding: 20px 30px;
  border: none;
  outline: none;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  margin-bottom: 30px;
`;
export const BtnSet = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  background-color: transparent;
  font-size: var(--font-medium);
  color: var(--color-light-white);
  height: 50px;
  border: none;
  outline: none;

  ::placeholder {
    font-size: var(--font-regular);
  }
`;

export const Span = styled.span`
  color: red;
  display: inline-block;
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  margin-bottom: 30px;
`;

export const ToSignUp = styled(Link)`
  color: black;
  background-color: var(--color-white);
  border-radius: 5px;
  font-size: var(--font-medium);
  font-weight: var(--weight-bold);
  padding: 10px 64px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const InputSpan = styled.span`
  color: var(--color-light-white);
  font-size: var(--font-medium);
  margin-right: 30px;
  width: 35px;
`;
