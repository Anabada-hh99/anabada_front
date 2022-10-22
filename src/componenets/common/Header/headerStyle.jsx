import styled from 'styled-components';

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: white;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'Do Hyeon', sans-serif;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.div`
  background: url(img/Logo.png);
  width: 130px;
  height: 50px;
  margin-top: 10px;
  margin-right: 50px;
  cursor: pointer;
`;

export const Trade = styled.div`
  font-size: 30px;
  color: coral;
  width: 100px;
  margin-right: 800px;
  margin-top: 20px;
  cursor: pointer;
`;

export const Login = styled.div`
  color: darkslategray;
  width: 50px;
  font-size: large;
  margin-right: 10px;
  margin-left: 1300px;
  margin-top: -40px;
  cursor: pointer;
`;

export const SignUp = styled.div`
  width: 60px;
  color: darkslategray;
  font-size: large;
  margin-right: 450px;
  margin-top: -40px;
  cursor: pointer;
`;
