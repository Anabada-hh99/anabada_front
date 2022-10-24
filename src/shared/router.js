import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import UserPage from '../pages/UserPage';
import PostDetailPage from '../pages/PostDetailPage';
import PostListPage from '../pages/PostListPage';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/trade' element={<PostListPage />} />

        <Route element={<PrivateRoute />}>
          <Route path='/user/:userId' element={<UserPage />} />
          <Route path='/trade/:postId' element={<PostDetailPage />} />
        </Route>

        {/* <Route path='*' element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
