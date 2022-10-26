import React from 'react';
import * as ButtonST from './ButtonStyle';

export default function Button(props) {
  switch (props.type) {
    case 'sign':
      return <ButtonST.Sign>{props.children}</ButtonST.Sign>;
    case 'category':
      return (
        <ButtonST.Category
          name={props.type}
          value={props.value}
          onClick={props.onClick}
        >
          {props.children}
        </ButtonST.Category>
      );
    case 'post':
      return <ButtonST.Post>{props.children}</ButtonST.Post>;
    default:
      return;
  }
}
