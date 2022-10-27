import React from 'react';
import * as LoadingST from './LoadingStyle';

export default function Loading(props) {
  return (
    <LoadingST.Layout>
      <LoadingST.Box>
        <h1>Loading...</h1>
      </LoadingST.Box>
    </LoadingST.Layout>
  );
}
