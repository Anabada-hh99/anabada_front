import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ContentBox, LayoutBox } from './LayoutStyle';

const Layout = (props) => {
  return (
    <>
      <ContentBox>
        <Header />
        <LayoutBox>{props.children}</LayoutBox>
      </ContentBox>
      <Footer />
    </>
  );
};

export default Layout;
