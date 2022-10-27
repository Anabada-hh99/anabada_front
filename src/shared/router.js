import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import UserPage from '../pages/UserPage';
import PostingPage from '../pages/postingPage/PostingPage';
import PostDetailPage from '../pages/PostDetailPage';
import PostListPage from '../pages/PostListPage';
import GlobalRoute from './GlobalRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalRoute />}>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/trade' element={<PostListPage />} />

          <Route path='/trade/:postId' element={<PostDetailPage />} />
          <Route path='/user/:userId' element={<UserPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/posting' element={<PostingPage />} />
        </Route>

        {/* <Route path='*' element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
