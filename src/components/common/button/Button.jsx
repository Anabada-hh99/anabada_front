import React from 'react';
import * as ButtonST from './ButtonStyle';

export default function Button(props) {
  switch (props.type) {
    case 'sign':
      return <ButtonST.Sign>{props.children}</ButtonST.Sign>;
    default:
      return;
  }
}
