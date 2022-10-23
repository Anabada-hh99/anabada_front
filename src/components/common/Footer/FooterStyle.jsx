import styled from 'styled-components';

export const FooterBox = styled.div`
  width: 100%;
  height: 80px;
  background: #181818;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  /* text-decoration: none;
  color: white; */
`;

export const GitIcon = styled.div`
  margin-left: 5px;
  margin-right: 10px;
  a {
    color: lightgrey;
  }
  cursor: pointer;
`;

export const CrownIcon = styled.div`
  margin-right: 2px;
`;
export const FooterSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

export const Title = styled.div`
  font-size: small;
  font-weight: 600;
  color: #868b94;
`;

export const Logo = styled.div`
  background: url(img/LogoTitle.png);
  width: 50px;
  height: 12px;
  margin-left: 10px;
`;

export const FrontSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const BackSection = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const Front = styled.div`
  color: #868b94;
  font-weight: 600;
  margin-right: 20px;
`;

export const Back = styled.div`
  color: #868b94;
  font-weight: 600;
  margin-right: 20px;
  margin-left: 40px;
`;

export const FrontMember = styled.div`
  color: #868b94;
  font-size: small;
  display: flex;
  float: left;
`;

export const BackMember = styled.div`
  color: #868b94;
  font-size: small;
  display: flex;
  float: left;
  margin-right: 25px;
`;
