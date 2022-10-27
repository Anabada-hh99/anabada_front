import styled from 'styled-components';
export const Box = styled.div`
  justify-content: ${(props) =>
    (props.index + 1) % 2 === 0 ? 'right' : 'left'};
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 20px;
`;
export const InfoBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  align-items: ${(props) =>
    (props.index + 1) % 2 === 0 ? 'flex-end' : 'flex-start'};

  font-family: 'Gowun Dodum', sans-serif;
  margin-right: 20px;
  margin-left: 20px;
`;

export const BtnBox = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  outline: none;
  border: none;

  height: 72px;
  width: 500px;
  border-radius: 5px;
  padding: 0 20px;
  font-family: 'Gowun Dodum', sans-serif;
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
`;

export const Hr = styled.hr`
  color: var(--color-black);
  margin-bottom: 20px;
`;
