import React from 'react';
import {
  FooterBox,
  GitIcon,
  Title,
  Logo,
  FooterSection,
  Front,
  Back,
  FrontMember,
  BackMember,
  FrontSection,
  BackSection,
  CrownIcon,
} from './FooterStyle';

const Footer = () => {
  return (
    <FooterBox>
      <FooterSection>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Title>항해99 B반 5조 6주차 미니 프로젝트</Title>
          <Logo />
        </div>
        <BackSection>
          <Back>Back</Back>
          <BackMember>
            <CrownIcon>
              <i class="fa-solid fa-crown" color="gold" />
            </CrownIcon>
            정영민
            <GitIcon>
              <a
                href="https://github.com/celinaym"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
            </GitIcon>
            김동현
            <GitIcon>
              <a
                href="https://github.com/kidonge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
            </GitIcon>
            이호진
            <GitIcon>
              <a
                href="https://github.com/kaifazhe99"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
            </GitIcon>
          </BackMember>
        </BackSection>
        <FrontSection>
          <Front>Front</Front>
          <FrontMember>
            김재명
            <GitIcon>
              <a
                href="https://github.com/JMKiim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
            </GitIcon>
            이중오
            <GitIcon>
              <a
                href="https://github.com/jnwnddh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
            </GitIcon>
            홍마로
            <GitIcon>
              <a
                href="https://github.com/formaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
            </GitIcon>
          </FrontMember>
        </FrontSection>
      </FooterSection>
    </FooterBox>
  );
};

export default Footer;
