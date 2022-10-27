import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useMultipleInput from '../../hooks/useMultipleInput';
import Button from '../common/button/Button';
import * as LoginFormST from './LoginFormStyle';

import { loginUser } from '../../shared/api/Users';
import { setRefreshToken } from '../../storage/Cookie';
import { SET_TOKEN } from '../../redux/modules/AuthSlice';
import { SET_USER } from '../../redux/modules/UserSlice';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [loginInfo, _, loginInfoHandler] = useMultipleInput({
    loginName: '',
    password: '',
  });
  const { loginName, password } = loginInfo;
  const [isFail, setIsFail] = useState(false);
  const [failText, setFailText] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (loginName === '') {
      setFailText('아이디를 입력해 주세요!');
      setIsFail(true);
      return;
    } else if (password === '') {
      setFailText('비밀번호를 입력해 주세요!');
      setIsFail(true);
      return;
    }

    const response = await loginUser(loginInfo);
    console.log(response);
    if (response.status) {
      setRefreshToken(response.headers.refresh_token);
      //console.log(response.headers.authorization);
      dispatch(SET_TOKEN(response.headers.authorization));
      //console.log(response.userInfo);
      dispatch(SET_USER(response.userInfo));

      return navigate('/');
    } else {
      setIsFail(true);
      setFailText(response.headers.message);
      console.log(response.headers.message);
    }
  };

  return (
    <LoginFormST.Box style={{ zIndex: '100' }}>
      <form onSubmit={onSubmitHandler} autoComplete='off'>
        <LoginFormST.InputBox>
          <LoginFormST.InputSet>
            <LoginFormST.InputSpan>
              <i className='fa-solid fa-user-shield'></i>
            </LoginFormST.InputSpan>
            <LoginFormST.Input
              type='text'
              name='loginName'
              value={loginName}
              onChange={loginInfoHandler}
              placeholder='아이디'
            />
          </LoginFormST.InputSet>
          <LoginFormST.InputSet>
            <LoginFormST.InputSpan>
              <i className='fa-solid fa-key'></i>
            </LoginFormST.InputSpan>
            <LoginFormST.Input
              type='password'
              name='password'
              value={password}
              onChange={loginInfoHandler}
              placeholder='비밀번호'
            />
          </LoginFormST.InputSet>
        </LoginFormST.InputBox>

        {isFail === true ? (
          <LoginFormST.Span>{failText}</LoginFormST.Span>
        ) : (
          <></>
        )}

        <LoginFormST.BtnSet>
          <LoginFormST.ToSignUp to='/signup'>회원가입</LoginFormST.ToSignUp>
          <Button type='sign'>로그인</Button>
        </LoginFormST.BtnSet>
      </form>
    </LoginFormST.Box>
  );
}
