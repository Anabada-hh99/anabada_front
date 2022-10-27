import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
`;

export const ImgBox = styled.div`
  background-color: var(--color-dark-white);
  border-radius: 5px;
  width: 350px;
  height: 350px;
  overflow: hidden;
  margin-right: 50px;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  width: 600px;
  height: 350px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: left;

  font-family: 'Gowun Dodum', sans-serif;
  color: var(--color-dark-white);
`;

export const InfoLine = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const BtnBox = styled.div`
  height: 350px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const ContentTextArea = styled.textarea`
  width: 100%;
  height: 192px;
  background-color: var(--color-dark-white);
  border-radius: 5px;
  border: none;
  outline: none;
  resize: none;
  font-size: var(--font-regular);
  font-weight: var(--weight-regular);
  font-family: 'Gowun Dodum', sans-serif;
  padding: 10px 10px;
`;

export const PriceBox = styled.div`
  background-color: var(--color-dark-white);
  height: 40px;
  width: 50%;
  border-radius: 5px;
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  color: var(--color-black);
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 5px 10px;
`;
export const PriceInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  font-family: 'Gowun Dodum', sans-serif;
`;
export const SalesSelect = styled.select`
  background-color: var(--color-dark-white);
  height: 40px;
  border-radius: 5px;
  font-size: var(--font-regular);
  font-weight: var(--weight-semi-bold);
  color: var(--color-black);
  font-family: 'Gowun Dodum', sans-serif;
  padding: 0 10px;
  margin-right: 10px;
`;
