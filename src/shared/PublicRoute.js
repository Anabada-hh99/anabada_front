import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { CheckToken } from './CheckToken';
import Loading from '../components/common/Loading/Loading';
import Login from '../pages/LoginPage';

export default function PublicRoute({ children }) {
  const location = useLocation();
  const { isAuth } = CheckToken(location.key);

  if (isAuth === 'Success') {
    return <Navigate to='/' state={{ from: location }} />;
  }
  // else if (isAuth === 'Loading') {
  //   return (
  //     <>
  //       <Loading />
  //       <Login />
  //     </>
  //   );
  // }

  return children;
}
