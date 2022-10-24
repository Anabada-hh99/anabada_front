import React from 'react';
import * as BannerST from './BannerStyle';

export default function Banner(props) {
  switch (props.page) {
    case 'Home':
      return <BannerST.HomeBox>{props.children}</BannerST.HomeBox>;
    case 'User':
      return <BannerST.UserBox>{props.children}</BannerST.UserBox>;
    case 'Sign':
      return <BannerST.SignBox>{props.children}</BannerST.SignBox>;
    case 'Trade':
      return <BannerST.TradeBox>{props.children}</BannerST.TradeBox>;
    default:
      return;
  }
}
