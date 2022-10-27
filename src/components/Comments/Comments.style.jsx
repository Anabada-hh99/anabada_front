import styled from 'styled-components';

export const Form = styled.form`
  background-color: var(--color-light-black);
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin-top: 35px;
  padding: 20px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  background-color: var(--color-black);
  color: var(--color-light-white);
  width: 85%;
  height: 100%;
  border-radius: 5px;
  border: none;
  outline: none;

  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  font-family: 'Gowun Dodum', sans-serif;

  margin-right: 5%;
  padding: 0 20px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 30px;
  padding-left: 100px;
  padding-right: 100px;
`;
