import styled from 'styled-components';

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: white;
  font-family: 'Do Hyeon', sans-serif;

  display: flex;
  justify-content: center;

  z-index: 999;
`;

export const HeaderContainer = styled.div`
  height: 100%;
  width: 80vw;
  max-width: 1320px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSection = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const Logo = styled.div`
  background: url(img/logo/Logo.png);
  width: 130px;
  height: 50px;
  margin-right: 5vw;
  cursor: pointer;
`;

export const Trade = styled.div`
  font-size: 30px;
  color: coral;
  cursor: pointer;
`;

export const UserNav = styled.div`
  color: darkslategray;
  margin-left: 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 1000;
  font-family: 'Gowun Dodum', sans-serif;
`;

export const Nickname = styled.span`
  color: darkslategray;
  margin-left: 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 1000;
  font-family: 'Gowun Dodum', sans-serif;
`;

export const ProfileBox = styled.div`
  width: 30px;
  height: 30px;

  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
