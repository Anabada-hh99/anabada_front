import React from 'react';
import * as ProfileST from './ProfileStyle';

export default function Profile(props) {
  return (
    <ProfileST.Box>
      <ProfileST.Img src={props.src} />
    </ProfileST.Box>
  );
}
