import styled from 'styled-components';

export const Box = styled.div`
  width: ${(props) => (props.width ? props.width : '30px')};
  height: ${(props) => (props.width ? props.width : '30px')};

  background-color: var(--color-white);
  border-radius: 50%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
