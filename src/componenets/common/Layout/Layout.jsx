import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { LayoutBox } from './LayoutStyle';

const Layout = (props) => {
  return (
    <>
      <Header />
      <LayoutBox>{props.children}</LayoutBox>
      <Footer />
    </>
  );
};

export default Layout;
