import React from 'react';
import HomePath from '../../../img/banner/HomeBanner.jpg';
import SignPath from '../../../img/banner/SignBanner.jpg';
import TradePath from '../../../img/banner/TradeBanner.jpg';
import UserPath from '../../../img/banner/UserBanner.jpg';
import * as BannerST from './BannerStyle';

export default function Banner(props) {
  switch (props.page) {
    case 'Home':
      return (
        <BannerST.HomeBox>
          {props.children}
          <BannerST.BannerImg src={HomePath} />
        </BannerST.HomeBox>
      );
    case 'User':
      return (
        <BannerST.UserBox>
          {props.children}
          <BannerST.BannerImg src={UserPath} />
        </BannerST.UserBox>
      );
    case 'Sign':
      return (
        <BannerST.SignBox>
          {props.children}
          <BannerST.BannerImg src={SignPath} />
        </BannerST.SignBox>
      );
    case 'Trade':
      return (
        <BannerST.TradeBox>
          {props.children}
          <BannerST.BannerImg src={TradePath} />
        </BannerST.TradeBox>
      );
    default:
      return;
  }
}
